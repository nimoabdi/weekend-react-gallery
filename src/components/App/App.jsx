import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

let [galleryList, setGalleryList] = useState([]);
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
useEffect(() =>{
  console.log('in useEffect');
  getNewGalleryItem();
}, [])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
        <GalleryList
          galleryList={galleryList}
          getNewGalleryItem={galleryList}
        />
      </div>
    );
}

export default App;
