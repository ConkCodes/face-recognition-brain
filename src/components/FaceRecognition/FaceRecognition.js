import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, box}) => {

    return (
        <div className="faceRecognitionContainer">
            <div className="wrapper">
                <img id="inputImage" src={imageUrl} alt="" className="facePic"/>
                <div className="boundingBox" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );

}

export default FaceRecognition;