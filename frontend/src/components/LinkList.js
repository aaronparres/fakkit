import React, { Component } from 'react'
import axios from 'axios';
import { cloneDeep } from 'lodash';
import Link from './Link'

export default class LinkList extends Component {
  constructor() {
    super();
    this.state = {
      links: [],
      loading: true,
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:4000/links?_embed=votes")
      .then(response => {
        this.setState({
          links: response.data,
          loading: false
        })
      });
  }

  onUpvote = (vote) => {
    //TODO: Add the vote to the appropiate link in the linklist...
    console.log("LinkList.onUpvote", vote);
    this.setState(prevState =>{
      let newState = cloneDeep(prevState);
      newState.links.forEach(link => {
        if(link.id === vote.linkId){
          link.votes.push(vote);
        }
      });
      return(newState);
    });
  }

  render() {
    document.title = "fakkit | home";
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    let { links } = this.state;

    return (
      <div>
        {links.map((link, index) =>
          <Link key={link.id} index={index + 1} link={link} onUpvote={this.onUpvote} />
        )}
      </div>
    )
  }
}
