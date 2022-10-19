import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard listing={listing} onDelete={onDelete} key={listing.id}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
