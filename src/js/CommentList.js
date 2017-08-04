import React from "react"
import {observer} from "mobx-react"

@observer
export default class CommentList extends React.Component {
    createNew (e) {
        if (e.which === 13) {
            this.props.store.createComment(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        const toMap = this.props.store.comments;

        const ordered = toMap.sort((a, b) => b.date - a.date);
        const mappedComments = ordered.map(comment => (
            <li key={comment.date} >
                <span className="commentDate">{formatDate(comment.date)}</span><span>{comment.message}</span>
            </li>
        ))
        return <div>
            <div>comment display</div>
            <input onKeyPress={this.createNew.bind(this)} />
            <ul>{mappedComments}</ul>
        </div>

    }
}
function formatDate(date) {
    const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
    ];
    date = new Date(date);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${day} ${monthNames[monthIndex]} ${year} ${hours}:${minutes}:${seconds}: `;
}
