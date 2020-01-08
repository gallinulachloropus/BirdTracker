import React, { useState, useEffect } from 'react'

import BirdTrackerDisplay from './BirdTrackerDisplay'
import TrackerItem from './pages/Tracker/TrackerItem'

import axios from 'axios'
import uuidv4 from 'uuid'

import './stylesheet.css'

const BirdTrackerContainer = () => {
    const [loaded, setLoaded] = useState(false)
    const [location, setLocation] = useState('')
    const [regionInfo, setRegionInfo] = useState({ desc: '', coords: ['', ''] })
    const [regions, setRegions] = useState({ error: 'JSON file not found' })
    const [currentSpecies, setCurrentSpecies] = useState({ image: '', info: '', title: '' })

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('regions'))
        if (localStorage.getItem('regions')) {
            setRegions(userData)
            setLoaded(true)
        }
        else {
            axios.get('./birdList.json')
                .then(response => {
                    setRegions(response.data)
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
        localStorage.setItem('regions', JSON.stringify(regions))
    })


    const handleLocationSelect = (e) => {
        const { value } = e.target
        setLocation(value)
        setCurrentSpecies({ image: '', info: '', title: '' })
    }

    const handleTrackerCheck = (species) => {
        regions[location].species.map(currentSpecies => {
            if (currentSpecies.name === species.name) {
                currentSpecies.seen = !currentSpecies.seen
            }
            return currentSpecies
        })
        setRegions({ ...regions}) //not completely sure why this works
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
            return regions[location].species.map(thisSpecies =>
                <TrackerItem
                    species={thisSpecies}
                    key={uuidv4()}
                    handleTrackerCheck={handleTrackerCheck}
                    getSpeciesInfo={getSpeciesInfo}
                />
            )
        } else {
            return <em>Select a location...</em>
        }
    }

    const getSpeciesInfo = (species) => {
        setLoaded(false)
        axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts|pageimages|pageterms&exintro=1&exsentences=8&titles=${species}&pithumbsize=250&origin=*&redirects=1`)
            .then(response => {
                setLoaded(true)
                return (
                    setCurrentSpecies({ title: species, image: response.data.query.pages[Object.keys(response.data.query.pages)[0]].thumbnail, info: response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract })
                )
            })

    }

    const reset = () => {
        localStorage.clear()
        window.location.reload(false)
    }





    return (
        <BirdTrackerDisplay
            location={location}
            currentSpecies={currentSpecies}
            regionInfo={regionInfo}
            regions={regions}
            loaded={loaded}
            handleLocationSelect={handleLocationSelect}
            getLocationOptions={getLocationOptions}
            getTrackerItems={getTrackerItems}
            reset={reset}
        />
    )
}

export default BirdTrackerContainer
