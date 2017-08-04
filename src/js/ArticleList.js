import React from "react"
import {observer} from "mobx-react"

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
        const mapped = ordered.map(article => (
            <li key={article.date} >
                <blockquote>
                    <span>{article.upvotes}</span><button onClick={article.upvote.bind(article)}>up</button><span>{article.text}</span>
                </blockquote>
            </li>
        ))
        return <div>
            <div>article displaaay</div>
            <input onKeyPress={this.createNew.bind(this)} />
            <ul>{mapped}</ul>
        </div>

    }
}
