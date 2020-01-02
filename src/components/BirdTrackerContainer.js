import React, { Component } from 'react'
import BirdTrackerDisplay from './BirdTrackerDisplay'
import TrackerListItem from './pages/TrackerListItem'
import uuidv4 from 'uuid'
import axios from 'axios'


export default class BirdTrackerContainer extends Component {
    state = {
        isLoading: false,
        location: "",
        birds: {},
        currentBird: {
            info: "",
            image: ""
        }
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('birds'))

        if (localStorage.getItem('birds')) {
            this.setState(userData)
        } else {
            axios.get('./birdList.json')
                .then(response => this.setState({ birds: response.data }))
        }
    }

    componentDidUpdate() {
        localStorage.setItem('birds', JSON.stringify(this.state))
    }



    handleChange = (e) => {
        const { value, name, type } = e.target
        if (type === 'select-one') {
            this.setState({ currentBird: { info: "", image: "" } })
        }
        this.setState({ [name]: value })

    }

    handleCheck = (bird) => {
        const updatedState = this.state.birds[this.state.location].map(thisBird => {
            if (thisBird.name === bird.name) {
                thisBird.seen = !thisBird.seen
            }
            return thisBird
        })

        console.log(updatedState)
        this.setState(prev => { return { birds: { ...prev.birds, [this.state.location]: updatedState } } })
    }

    getBirds = (props) => {
        const { location } = props
        const birdList = this.state.birds[location].map(bird => {
            return (
                <TrackerListItem bird={bird} getBirdInfo={this.getBirdInfo} handleCheck={this.handleCheck} key={uuidv4()} />
            )
        })
        return (
            <div>
                {birdList}
            </div>
        )
    }

    getBirdInfo = (bird) => {
        this.setState({ isLoading: true })
        axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts|pageimages|pageterms&exintro=1&explaintext=1&titles=${bird}&origin=*&redirects=1`)
            .then(response => {
                this.setState({ isLoading: false })
                this.setState(prev => { return ({ currentBird: { ...prev.currentBird, info: response.data } }) })
            })
    }

    getOptions = (props) => {
        const areas = Object.keys(this.state.birds)
        const options = areas.map(area => {
            return <option value={area} key={uuidv4()}>{area.toUpperCase()}</option>
        })
        return (
            <select value={props.location} onChange={props.handleChange} name="location" style={{}}>
                <option value="">Select a location</option>
                {options}
            </select>
        )
    }

    render() {
        return <BirdTrackerDisplay handleChange={this.handleChange} location={this.state.location} getBirds={this.getBirds} getOptions={this.getOptions} state={this.state} />
    }
}
