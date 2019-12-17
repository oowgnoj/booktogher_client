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
        <div>
          {this.setState({redirect: false})}
          <Redirect to={`/search/${this.state.title}`}/>
        </div>     
        :
        <div className="search-i">
              <a className="search-icon" href="#" uk-icon="search"></a>
              <div 
                className="uk-navbar-dropdown search-form" 
                uk-drop="mode: click; "
              >    
                <form className="uk-search uk-search-navbar uk-width-1-1">
                    <input 
                      className="uk-search-input search-form-input" 
                      type="search" 
                      placeholder="책 / 서평을 검색해 주세요"
                      onChange={this.handleChangeTitle}
                      onKeyPress ={this.handleKeyPress} />
                </form>
              </div>
        </div>
        }
      </div>  
    ) 
  }
};

export default SearchForm;