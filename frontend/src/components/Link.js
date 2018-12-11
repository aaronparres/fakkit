import React, { Component } from 'react'
import './Link.css';
import Context from '../Context';

export default class Link extends Component {
    render() {

        let { link, index } = this.props;
        let upVote = null;

        if (this.context.user) {
            upVote = <div className="upArrow"></div>;
        }

        return (
            <div className="link">
                <span className="index">{index}.</span>
                {upVote}
                <div className="content">
                    <a href={link.url}>{link.title}</a>
                    <div className="info">
                        {link.votes.length} points by {link.by}
                    </div>
                </div>
            </div>
        )
    }
}
Link.contextType = Context;