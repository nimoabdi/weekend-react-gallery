function inGallery() {
    const getNewGalleryItem = () => {
        axios({
            method: 'GET',
            url: '/gallery'
        })
        .then((res) => {
            console.log('This is the data', res.data);
            //this passes the data through gallery list
            setGalleryList(res.data);
        })
        .catch((error) => {
            console.log('GET data failed', error);
        })
    }
    return (
        <>
        <div>
        {galleryList.map(picture =>{
            <GalleryItem
            key={picture.id}
            picture={picture}
            getNewGalleryItem={getNewGalleryItem}
            />
        })}
       </div>
       </>
    )
}