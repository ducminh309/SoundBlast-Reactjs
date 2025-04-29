import gallery from '../data/images.json';
import { useState } from 'react';

function Gallery() {
    // Constant array of variables for image link and visibility state, null for now
    const [Image, setVisibility] = useState(null);
    // Constant functions for toggling visibility
    const MakeVisible = (image) => {
        setVisibility(image);
    };
    const MakeInvisible = () => {
        setVisibility(null);
    };
    // Function for showing an image
    return <div className='gallery'>
        {/* Mapping image links */}
        {gallery.map((images) => {
            return <img src={images.image} className='gallery-image' onClick={() => MakeVisible(images.image)}></img>
        })}

        {/* And operand for showing image */}
        {Image && (<div className='viewer'>
            <img className='image' src={Image}></img>
            <button className='close' onClick={MakeInvisible}><h1>X</h1></button>
        </div>)}
    </div>
}

export default Gallery;