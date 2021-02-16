import React, { useState } from 'react';
import AddPictureForm from './AddPictureForm';
import S3FileUpload from 'react-s3';

const AddPicture = () => {

const config = {
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACESS_KEY,
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION
}

const [photoUrl, setPhotoUrl] = useState("")

const upload=(e) => {
  S3FileUpload.uploadFile(e.target.files[0],config)
  .then((data) => {
    console.log(data.location)
    setPhotoUrl(data.location)
  })
  .catch ((error) => {
    console.log({error})
    alert(error)
  })
}


    return(
      <div>
        <h3> Upload your Photo</h3>
        <input type="file" onChange={upload}/>
        { photoUrl ? <AddPictureForm photoUrl={photoUrl} /> :"Upload Photo" } 
      </div>   
    )
};

export default AddPicture;
