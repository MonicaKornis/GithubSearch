import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GitHubIndexItem from './github-index-item';
import '../index.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { firstRepos: [], firstUserName: '', loading: true };
  }

  componentDidMount() {

    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc&per_page=100'
    }).then((obj) => {
      let firstRepos = obj.items;
      this.setState({ firstRepos: obj.items, firstUserName:
        firstRepos[0].name, loading: false});
    });
  }

    render() {
      let loader = <div className='loading'></div>;


      let display = this.state.loading ? loader :
      this.state.firstRepos.map( obj => <GitHubIndexItem imageUrl={obj.owner.avatar_url} name={obj.name} url={obj.html_url} followers={obj.followers_url}/>);
      console.log(display.id);
      return(
        <div id='main'>

          <h1> Most Popular React Repositories!</h1>
          <div className='repoWrapper'>
            {display}
          </div>
        </div>
      );
    }
}

export default MainContainer;
