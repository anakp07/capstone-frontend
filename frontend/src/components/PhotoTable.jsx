import React from "react"
import { alertService } from '../services/alert'
import Axios from "axios"
import { API_HOST } from "../config"
class PhotoTable extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            loading: true,
            photos: []
        }
    }

    componentDidMount() {
        Axios.get(`${API_HOST}/photos`).then(res => {
            this.setState({
                photos: res.data
            })
        }).catch(e => {
            alertService.showError('Cannot get photo data...')
        }).finally(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="row mt-5 justify-content-center">
                <div className="col-12 col-lg-8">
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                {/* <th>Photo Id</th> */}
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Landmark</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Perspective</th>
                                <th>User Id</th>
                                <th>Photo Url</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.loading ? (
                            <tr><td>Loading...</td></tr>
                        ) : (
                            <>
                                {this.state.photos.map((photo, index) => {
                                    return (
                                        <tr key={index}>
                                            {/* <thd>{index+1}</thd> */}
                                            {/* <td>{photo.photo_id}</td> */}
                                            <td>{photo.country}</td>
                                            <td>{photo.state}</td>
                                            <td>{photo.city}</td>
                                            <td>{photo.landmark}</td>
                                            <td>{photo.latitude}</td>
                                            <td>{photo.longitude}</td>
                                            <td>{photo.perspective}</td>
                                            <td>{photo.user_id}</td>
                                            <td>{photo.photo_url}</td>
                                        </tr>
                                    )
                                })}
                                {!this.state.photos.length && (
                                    <tr><td>Loading...</td></tr>
                                )}
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default PhotoTable