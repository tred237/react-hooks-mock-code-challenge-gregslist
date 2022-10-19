import React from "react";
import Search from "./Search";

function Header({handleSubmitList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmitList={handleSubmitList}/>
    </header>
  );
}

export default Header;
