import GalleryItem from "../GalleryItem/GalleryItem";
function GalleryList({galleryList, updateGalleryItem}) {
   
    return (
       
        <ul>
        {galleryList.map(picture =>{
         
        return < GalleryItem 
        key={picture.id}
        picture={picture}
        updateGalleryItem={updateGalleryItem}
        />
        })}
       </ul>
       
    )
}
export default GalleryList;