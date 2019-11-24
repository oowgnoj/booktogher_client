import React, { ReactElement } from "react";
import SearchBooks from "./SearchBooks"
import SearchReviews from "./SearchReviews"

interface IState {
  selectBook: boolean;
}
const SearchPage = (): ReactElement => {
  const state : IState={
    selectBook : true
  }
  const handleChangeSelect = (e: any) => {
    console.log(state)
    if(e.value === "book"){
      state.selectBook = true
    } else {
      state.selectBook = false
    } 
  }
  return (
    <div>
      <div className = "search-area">
        <div className = "search-select">
          <div className="uk-margin">
              <div className="uk-form-controls">              
                  <select 
                    className="uk-select" 
                    id="form-stacked-select"
                    onChange ={(e) => handleChangeSelect(e)}>
                      <option value="book">책</option>
                      <option value="review">서평</option>
                  </select>  
              </div>
          </div>
        </div>
      </div>

      {state.selectBook ? <SearchBooks /> :  <SearchReviews /> } 
    </div>
  );
};

export default SearchPage;