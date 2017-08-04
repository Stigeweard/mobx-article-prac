import React from "react"
import {observer} from "mobx-react"
import CommentList from "./CommentList"

@observer
export default class ArticleList extends React.Component {
    createNew (e) {
        if (e.which === 13) {
            this.props.store.createArticle(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        const toMap = this.props.store.articles;
        const ordered = toMap.sort((a, b) => b.upvotes - a.upvotes);
        const mappedArticles = ordered.map(article => (
            <li className="articleBlock" key={article.date} >
                <blockquote>
                    <span>{article.upvotes}</span><button onClick={article.upvote.bind(article)}>up</button><span>{article.text}</span>
                </blockquote>
                <CommentList store={article.comments} />
            </li>
        ))
        return <div>
            <h1>article display</h1>
            <h4>(hit enter to post an article)</h4>
            <input onKeyPress={this.createNew.bind(this)} />
            <ul>{mappedArticles}</ul>
        </div>

    }
}
