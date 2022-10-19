import React from "react";
import ListingCard from "./ListingCard";
import Sort from "./Sort";

function ListingsContainer({ listings, onDelete, onSort }) {
  return (
    <main>
      <Sort listings={listings} onSort={onSort}/>
      <ul className="cards">
        {listings.map(listing => <ListingCard listing={listing} onDelete={onDelete} key={listing.id}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
