import { useState } from 'react';
function GalleryItem({galleryList, getNewGalleryItem}) {
    // this toggles the image description
    const [isImageFlipped, setIsImageFlipped] = useState(true)
    const onSubmit = () => {
        updateGalleryItem(picture.id);
    };
    const flipImage = () => {
        setIsImageFlipped(!isImageFlipped)
    };
    const renderImage = () => {
        // conditional run to show the description of the picture
        if (isImageFlipped) {
            return <img className='.picture' src={picture.path}></img>
        } 
        else {
            return <p className='return'>{picture.description}</p>
        }
    }

    return (
        <>
        </>
    )
      
}
export default GalleryItem;