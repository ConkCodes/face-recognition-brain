import React from 'react';
import "./ImageLinkForm.css"

const ImageLinkForm = ({onInputChange, onButtomSubmit}) => {

    return (
        <div className="imageLinkFormContainer">
            <p className="text">This Magic Brain will detect faces in your pictures. Give it a try!</p>
            <div className="form">
                <input className="input" onChange={onInputChange} type="text"/>
                <button className="button" onClick={onButtomSubmit}>Detect</button>
            </div>
        </div>
    );

}

export default ImageLinkForm;