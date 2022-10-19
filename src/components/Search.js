import React, {useState} from "react";

function Search({handleSubmitList}) {
  const [searchData, setSearchData] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      const newListings = data.filter(listing => listing.description.toLowerCase().includes(e.target.search.value.toLowerCase()))
      handleSubmitList(newListings)
    })
  }

  console.log(searchData)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
