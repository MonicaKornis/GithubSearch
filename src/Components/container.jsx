import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { firstUserName: ''};
  }

  componentDidMount() {
    console.log('hello');
    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc&per_page=100'
    }).then((obj) => {
      let firstRepos = obj.items[0].name;
      this.setState({ firstUserName: firstRepos});
    });
  }

  render() {

    return(
      <div>
        <div>Monica Kornis</div>
        <div>{this.state.firstUserName}</div>
      </div>
    );
  }
}

export default MainContainer;
