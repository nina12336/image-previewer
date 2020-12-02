import React from 'react';
import './ImagePreviewer.css';


const ImagePreviewer = () => {
    return (
    <label className="wrapper" htmlFor="input">
        <div className="description" >請選擇圖片</div>
        <input
        type="file"
        accept="image/*"
        style={{display:"none"}}
        id="input"


        
        />

    </label>

    );
};


export default ImagePreviewer;