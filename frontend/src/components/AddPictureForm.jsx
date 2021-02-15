import React, { useState } from 'react';
import Axios from "axios"
import { alertService } from '../services/alert'
import SubmitForm from "./SubmitForm"
import PhotoTable from "./PhotoTable"
import { API_HOST } from "../config"

class AddPictureForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photo_id: null,
            country: '',
            state: '',
            city: '',
            landmark: '',
            latitude: null,
            longitude: null,
            perspective: '',
            user_id: null,
            photo_url: '',
            sendingRequest: false,
            submited: false,
            result: '',
        }
        this.changePhotoId= this.changePhotoId.bind(this)
        this.changeCountry = this.changeCountry.bind(this)
        this.changeState = this.changeState.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.changeLandmark = this.changeLandmark.bind(this)
        this.changeLatitude = this.changeLatitude.bind(this)
        this.changeLongitude = this.changeLongitude.bind(this)
        this.changePerspective = this.changePerspective.bind(this)
        this.changeUserId = this.changeUserId.bind(this)
        this.changePhotoUrl = this.changePhotoUrl.bind(this)

        this.submit = this.submit.bind(this)
    }

    changePhotoId(e) {
        let photo_id = e.target.value
        this.setState({photo_id})
    }

    changeCountry(e) {
        let country = e.target.value
        this.setState({country})
    }

    changeState(e) {
        let state = e.target.value
        this.setState({state})
    }
    changeCity(e) {
        let city = e.target.value
        this.setState({city})
    }

    changeLandmark(e) {
        let landmark = e.target.value
        this.setState({landmark})
    }
    changeLatitude(e) {
        let latitude = e.target.value
        this.setState({latitude})
    }
    changeLongitude(e) {
        let longitude = e.target.value
        this.setState({longitude})
    }
    changePerspective(e) {
        let perspective = e.target.value
        this.setState({perspective})
    }
    changeUserId(e) {
        let user_id = e.target.value
        this.setState({user_id})
    }
    changePhotoUrl(e) {
        let photo_url = e.target.value
        this.setState({photo_url})
    }
    submit() {
        this.setState({
            sendingRequest: true
        })
        if (!this.state.photo_id) {
            return alertService.showError('Please input photo id!')
        }
        if (!this.state.country) {
            return alertService.showError('Please input country!')
        }
        if (!this.state.state) {
            return alertService.showError('Please input state!')
        }
        if (!this.state.city) {
            return alertService.showError('Please input city!')
        }
        if (!this.state.landmark) {
            return alertService.showError('Please input landmark!')
        }
        if (!this.state.latitude) {
            return alertService.showError('Please input latitude!')
        }
        if (!this.state.longitude) {
            return alertService.showError('Please input longitude!')
        }
        if (!this.state.perspective) {
            return alertService.showError('Please input perspective!')
        }
        if (!this.state.user_id) {
            return alertService.showError('Please input user_id!')
        }
        if (!this.state.photo_url) {
            return alertService.showError('Please input photo_url!')
        }
        Axios.post(`${API_HOST}/photos`, {
            photo_id: this.state.photo_id,
            country: this.state.country,
            state: this.state.state,
            city: this.state.city,
            landmark: this.state.landmark,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            perspective: this.state.perspective,
            user_id: this.state.user_id,
            photo_url: this.state.photo_url,

        }
        ).then(res => {
            if (res.data && res.data._id) {
                this.setState({
                    subscription: true,
                    result: "Your photo has been successfully uploaded!"
                })
            } else {
                alertService.showError('Subscription failed!')
            }
        }).finally(() => {
            this.setState({
                sendingRequest: false
            })
        })
        
    }

    render() {
        return (
            <div className="container">
                {this.state.submited ? (
                    <PhotoTable
                        submited={this.state.submited}
                    />
                ) : (
                    <>
                    <SubmitForm
                        photo_id={this.state.photo_id}
                        country={this.state.country}
                        state={this.state.state}
                        city={this.state.city}
                        landmark={this.state.landmark}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        perspective={this.state.perspective}
                        user_id={this.state.user_id}
                        photo_url={this.state.photo_url}
                        
                        changePhotoId={this.changePhotoId}
                        changeCountry={this.changeCountry}
                        changeState={this.changeState}
                        changeCity={this.changeCity}
                        changeLandmark={this.changeLandmark}
                        changeLatitude={this.changeLatitude}
                        changeLongitude={this.changeLongitude}
                        changePerspective={this.changePerspective}
                        changeUserId={this.changeUserId}
                        changePhotoUrl={this.changePhotoUrl}

                        submit={this.submit}
                        sendingRequest={this.state.sendingRequest}
                    />
                    <div>
                        {this.state.result}
                    </div>
                    </>
                )}

            </div>
        )
    }

}

export default AddPictureForm