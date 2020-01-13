import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

import BirdTrackerDisplay from './BirdTrackerDisplay'
import TrackerItem from './pages/Tracker/TrackerItem'
import dummy from './pages/Tracker/dummy.json'

import axios from 'axios'
import uuidv4 from 'uuid'
import download from 'downloadjs'

import './stylesheet.css'

const BirdTrackerContainer = () => {
    const [loaded, setLoaded] = useState(false)
    const [location, setLocation] = useState('')
    const [regionInfo, setRegionInfo] = useState({ desc: '', coords: ['', ''] })
    const [regions, setRegions] = useState(dummy)
    const [currentSpecies, setCurrentSpecies] = useState({ image: '', info: '', title: '' })

    useEffect(() => {
        if (localStorage.getItem('regions')) {
            const userData = JSON.parse(localStorage.getItem('regions') || '')
            setRegions(userData)
            setLoaded(true)
        }
        else {
            axios.get('./birdList.json')
                .then(response => {
                    setRegions(response.data)
                    setLoaded(true)
                })
                .catch(error => {
                    console.log(error)
                    setLoaded(true)
                })
        }
    }, [])


    useEffect(() => {
        if (location) {
            setRegionInfo(regions[location].info)
        } else {
            setRegionInfo({ desc: '', coords: [0, 0] })
        }
    }, [location, regions])

    useEffect(() => {
        if (!regions.error && regions) {
            localStorage.setItem('regions', JSON.stringify(regions))
        }
    })


    const handleLocationSelect = (e) => {
        const { value } = e.target
        setLocation(value)
        setCurrentSpecies({ image: '', info: '', title: '' })
    }

    const handleTrackerCheck = (species) => {
        if (location) {
            regions[location].species.map(currentSpecies => {
                if (currentSpecies.name === species.name) {
                    currentSpecies.seen = !currentSpecies.seen
                }
                return currentSpecies
            })
            setRegions({ ...regions })
        }
    }

    const getLocationOptions = () => {
        return Object.keys(regions).map(currentRegion => {
            return (
                <option value={currentRegion} key={uuidv4()}>{currentRegion}</option>
            )
        })
    }

    const getTrackerItems = () => {
        if (loaded && location) {
            return regions[location].species.sort((a, b) => (a.name > b.name) ? 1 : -1).map(thisSpecies =>
                <TrackerItem
                    species={thisSpecies}
                    key={uuidv4()}
                    handleTrackerCheck={handleTrackerCheck}
                    getSpeciesInfo={getSpeciesInfo}
                />
            )
        } else {
            return <p style={{ width: "80vw", margin: 'auto' }}><em>To use the tracker, select a location from the <Link to="./">Home</Link> page. Then, return here and select a bird for more information.</em> </p>
        }
    }

    const getSpeciesInfo = (species) => {
        setLoaded(false)
        axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts|pageimages|pageterms&exintro=1&titles=${species}&pithumbsize=300&origin=*&redirects=1`)
            .then(response => {
                setLoaded(true)
                if (!response.data.query.pages[-1]) {
                    return (
                        setCurrentSpecies({ title: species, image: response.data.query.pages[Object.keys(response.data.query.pages)[0]].thumbnail, info: response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract })
                    )
                } else {
                    alert('No information found')
                }
            })

    }

    const getSeenList = () => {
        if (loaded) {
            const regionKeys = Object.keys(regions)
            let seenList = regionKeys.map(thisRegion => regions[thisRegion].species.filter(thisSpecies => {
                return thisSpecies.seen
            }))
            seenList = [].concat.apply([], seenList)
            return (
                <Fragment>
                    <h3>Total seen: {seenList.length}</h3>
                    <button onClick={() => download(seenList.map(bird => bird.name), 'birds-seen.txt', 'text/plain')}>Download List</button>
                    {seenList.length > 0 ? (
                        <ul className="seen-list">
                            {seenList.map(species => <li key={uuidv4()}>{species.name}</li>)}
                        </ul>
                    ) : ''}

                </Fragment>
            )
        } else {
            return <h1 className='loading'>...</h1>
        }

    }

    const reset = () => {
        localStorage.clear()
        window.location.reload(false)
    }





    return (
        <BirdTrackerDisplay
            location={location}
            currentSpecies={currentSpecies}
            setCurrentSpecies={setCurrentSpecies}
            regionInfo={regionInfo}
            regions={regions}
            loaded={loaded}
            handleLocationSelect={handleLocationSelect}
            getLocationOptions={getLocationOptions}
            getTrackerItems={getTrackerItems}
            reset={reset}
            getSeenList={getSeenList}
        />
    )
}

export default BirdTrackerContainer
