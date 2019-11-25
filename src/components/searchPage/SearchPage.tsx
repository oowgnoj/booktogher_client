import React, { ReactElement } from "react";
import SearchBooks from "./SearchBooks"
import SearchReviews from "./SearchReviews"

interface IState {
  selectBook: boolean;
}
class SearchPage extends React.Component<{}, IState> {
  constructor({}){
    super({})
    this.state ={
      selectBook : true
    }
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
  }
  
  public handleChangeSelect(e: any){
    if(e.target.value === "book"){
      this.setState({ selectBook : true })
    } else if (e.target.value === "review"){
      this.setState({ selectBook : false })
    } 
  }
  public render(): ReactElement {
    return (
      <div>
        <div className = "search-area">
          <div className = "search-select">
            <div className="uk-margin">
                <div className="uk-form-controls">              
                    <select 
                      className="uk-select" 
                      id="form-stacked-select"
                      onChange ={(e) => this.handleChangeSelect(e)}>
                        <option value="book">책</option>
                        <option value="review">서평</option>
                    </select>  
                </div>
            </div>
          </div>
        </div>

        {this.state.selectBook ? <SearchBooks /> :  <SearchReviews /> } 
      </div>
    );
  }
};

export default SearchPage;