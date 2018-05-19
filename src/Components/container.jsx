import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { firstUserName: '', loading: true };
  }

  componentDidMount() {
    console.log('hello');
    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&order=desc&per_page=100'
    }).then((obj) => {
      let firstRepos = obj.items;
      console.log(firstRepos[0].name);
      this.setState({ firstUserName: firstRepos[0].name, loading: false});
    });
  }

  render() {
    let loader = <div className='loading'></div>;

    let display = this.state.loading ? loader : this.state.firstUserName;
    console.log(display.id);
    return(
      <div>
        <div>Monica Kornis</div>
        <div>{display}</div>
      </div>
    );
  }
}

export default MainContainer;
