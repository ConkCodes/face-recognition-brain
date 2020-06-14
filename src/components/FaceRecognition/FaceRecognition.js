import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl}) => {

    return (
        <div className="faceRecognitionContainer">
            <img src={imageUrl} alt="" className="facePic"/>
        </div>
    );

}

export default FaceRecognition;