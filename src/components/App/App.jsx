import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

const [galleryList, setGalleryList] = useState([]);
  const getGallery = () => {
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
const updateGalleryItem = (pictureId) => {
  axios({
    method: 'PUT',
    url: `/gallery/${pictureId}`
  })
    .then((response) => {
        console.log(response)
        getGallery();
    })
    .catch((error) => {
      console.log('Error in PUT updating', error);
    })

};

useEffect(() =>{
  console.log('in useEffect');
  getGallery();
}, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
        <GalleryList
          galleryList={galleryList}
          updateGalleryItem={updateGalleryItem}
        />
      </div>
    );
}

export default App;
