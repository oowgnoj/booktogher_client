import React, { ReactElement } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

interface IState {
  redirect: boolean;
  title: string;
}

class SearchForm extends React.Component<{}, IState> { 
  constructor({}){
    super({})
    this.state ={
      redirect: false,
      title: ""
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  public handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: e.target.value });
  }

  public handleKeyPress(e: any): any{
    if(e.key === 'Enter'){
      if(this.state.title !== ""){
        this.setState({ redirect: true });
      }
      else {
        alert("검색어를 입력해주세요")
        e.preventDefault();
      } 
    }
  }

  public render(): ReactElement {
  return ( 
    <div>
      {this.state.redirect ?
      <div className="uk-dark"><Redirect to={`/search/${this.state.title}`}/></div>
      :
      <div>
      <div className="nav-overlay uk-navbar-right search-i">
          <a 
            className="uk-navbar-toggle" 
            uk-icon="search"  uk-toggle="target: .nav-overlay; animation: uk-animation-fade" 
            href="#"></a>
        </div>

      <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
        <div className="uk-navbar-item uk-width-expand">
          <form className="uk-search uk-search-navbar uk-width-1-1">
            <input 
              className="uk-search-input" 
              type="search" 
              placeholder="Search..."
              onChange={this.handleChangeTitle}
              onKeyPress ={this.handleKeyPress}
            ></input>
          </form>
        </div>
        <a className="uk-navbar-toggle" uk-icon="close" uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
      </div>
      </div>
       }
      
    </div>   
  ) 
  }
};

export default SearchForm;