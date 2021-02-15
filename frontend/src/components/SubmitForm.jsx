import React from "react"

class SubmitForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row mt-5 justify-content-center">
                <div className="col-12 col-lg-6 border border-1 p-4">
                    <form className="">
                        {/* <div className="form-group">
                            <label className="col-form-label">Photo Id</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the photo id"
                                value={this.props.photo_id}
                                onChange={this.props.changePhotoId}/>
                        </div> */}
                        <div className="form-group">
                            <label className="col-form-label">Country</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the country"
                                value={this.props.country}
                                onChange={this.props.changeCountry}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">State</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the state"
                                value={this.props.state}
                                onChange={this.props.changeState}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">City</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the city"
                                value={this.props.city}
                                onChange={this.props.changeCity}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Landmark</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the landmark"
                                value={this.props.landmark}
                                onChange={this.props.changeLandmark}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Latitude</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the latitude"
                                value={this.props.latitude}
                                onChange={this.props.changeLatitude}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Longitude</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the longitude"
                                value={this.props.longitude}
                                onChange={this.props.changeLongitude}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Perspective</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Please input the perspective"
                                value={this.props.perspective}
                                onChange={this.props.changePerspective}/>
                        </div>
                        <div className="form-group">
                        <label className="col-form-label">User Id</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Please input the user id"
                            value={this.props.user_id}
                            onChange={this.props.changeUserId}/>
                    </div>
                        <div className="form-group">
                        <label className="col-form-label">Photo Url</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Please input the photo url"
                            value={this.props.photo_url}
                            onChange={this.props.changePhotoUrl}/>
                    </div>
                        <hr className="my-4"/>
                        <div className="form-group text-right">
                            {this.props.sendingRequest ? (
                                <button type="button" className="btn btn-primary" disabled>Sending Request...</button>
                            ) : (
                                <button type="button" onClick={this.props.submit}
                                        className="btn btn-primary">Submit</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default SubmitForm