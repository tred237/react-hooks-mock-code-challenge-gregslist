import React from "react";
import Search from "./Search";
import NewItem from "./NewItem";

function Header({ handleSubmitList, onItemSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <NewItem onItemSubmit={onItemSubmit}/>
      <Search handleSubmitList={handleSubmitList}/>
    </header>
  );
}

export default Header;
