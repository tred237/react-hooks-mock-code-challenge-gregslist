import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(listingObj){
    const newListings = listings.filter(listing => listing.id !== listingObj.id)
    setListings(newListings)
  }

  function handleSubmitList(listObj){
    setListings(listObj)
  }

  return (
    <div className="app">
      <Header handleSubmitList={handleSubmitList}/>
      <ListingsContainer listings={listings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
