import React, { ReactElement } from "react";
import SearchBooks from "./SearchBooks"
import SearchReviews from "./SearchReviews"

const SearchPage = (): ReactElement => {
  return (
    <div>
      <SearchBooks />
      <SearchReviews />     
    </div>
  );
};

export default SearchPage;