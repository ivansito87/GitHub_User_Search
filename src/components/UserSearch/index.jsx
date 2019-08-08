import React from 'react';
import Wrapper from "../Wrapper";
import axios from 'axios';

export default class UserSearch extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/search/users?q=example`)
      .then(res => {
        const users = res.data.items;
        console.log(users);
        this.setState({users});
      })
  }

  render() {
    return (
      <ul>
        {this.state.users.map(users => <li>{users.avatar_url}</li>)}
      </ul>
    )
  }
}


/*
* axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
*/