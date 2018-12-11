import React, { Component } from 'react'
import './Link.css';
import Context from '../Context';

export default class Link extends Component {
    render() {

        let { link, index } = this.props;
        let upVote = null;
        //findIndex returns -1 when it doesn't find what i looks for
        const hasVoted = link.votes.findIndex(vote => vote.userId === this.context.user) !== -1;

        if (this.context.user) {
            if (!hasVoted) {
                upVote = <div className="upArrow"></div>;
            } else {
                upVote = <div className="arrowSpace"></div>;
            }
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