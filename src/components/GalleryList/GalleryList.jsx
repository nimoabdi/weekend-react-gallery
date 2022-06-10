import GalleryItem from "../GalleryItem/GalleryItem";
function GalleryList({galleryList, getNewGalleryItem}) {
   
    return (
       
        <ul>
        {galleryList.map(picture =>{
         
        return < GalleryItem 
        key={picture.id}
        picture={picture}
        getNewGalleryItem={getNewGalleryItem}
        />
        })}
       </ul>
       
    )
}
export default GalleryList;