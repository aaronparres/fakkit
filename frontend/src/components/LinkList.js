import React, { Component } from 'react'
import axios from 'axios'
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
    axios.get("http://localhost:4000/links")
      .then(response => {
        this.setState({
          links: response.data,
          loading: false
        })
      });
  }

  render() {

    if (this.state.loading) {
      return <p>Loading...</p>
    }

    let { links } = this.state;

    return (
      <div>
        {links.map((link, index) =>
          <Link key={link.id} index={index + 1} link={link} />
        )}
      </div>
    )
  }
}
