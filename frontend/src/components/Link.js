import React, { Component } from 'react'
import './Link.css';
import Context from '../Context';
import Axios from 'axios';

export default class Link extends Component {

    onUpvote = (e) => {
        Axios.post("http://localhost:4000/votes", {
            userId: this.context.user,
            linkId: this.props.link.id,
        }).then(response => {
            const vote = response.data;
            this.props.onUpvote(vote);
        })
    }

    render() {

        let { link, index } = this.props;
        let upVote = null;
        //findIndex returns -1 when it doesn't find what i looks for
        const hasVoted = link.votes.findIndex(vote => vote.userId === this.context.user) !== -1;

        if (this.context.user) {
            if (!hasVoted) {
                upVote = <div className="upArrow" onClick={this.onUpvote}></div>;
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