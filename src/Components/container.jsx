import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GitHubIndexItem from './github-index-item';
import '../index.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { firstRepos: [], firstUserName: '', loading: false, searchBar: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


    handleSubmit(e) {
      e.preventDefault();


      let query = this.state.searchBar;
      console.log(query);
      this.setState({loading: true});
        $.ajax({
          method: 'GET',
          url: `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc&per_page=100`
        }).then((obj) => {
          let firstRepos = obj.items;
          this.setState({ firstRepos: obj.items, firstUserName:
            firstRepos[0].name, loading: false});
        });

    }

    handleChange(e) {
      this.setState({searchBar: e.target.value});
    }

    render() {
      let loader = <div className='loading'></div>;


      let display = this.state.loading ? loader :
      this.state.firstRepos.map( obj => <GitHubIndexItem imageUrl={obj.owner.avatar_url} name={obj.name} url={obj.html_url} followers={obj.followers_url}/>);

      return(
        <div>
          <div className='sideSection'>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label name="searchInput">
                    <input className='searchBar' type="text" placeholder='Search a Language or Framework' value={this.state.searchBar} onChange={this.handleChange} />
                </label>
              </div>
              <input type='submit'/>
            </form>
          </div>
          <div id='main'>
            <div className='repoWrapper'>
              {display}
            </div>
          </div>
        </div>
      );
    }
}

export default MainContainer;
