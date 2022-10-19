import React, {useState} from "react";

function Search({handleSubmitList}) {
  const [searchData, setSearchData] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      handleSubmitList(e, data)
    })
  }

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
