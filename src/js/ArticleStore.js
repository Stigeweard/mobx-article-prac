import {
    computed,
    observable
} from "mobx"

class Article {
    @observable text
    @observable date
    @observable read
    @observable comments
    @observable upvotes

    constructor(text) {
        this.text = text;
        this.date = Date.now();
        this.read = false;
        this.upvotes = 0;
    }

    upvote() {
        this.upvotes++;
        return this.upvotes
    }

    downvote() {
        this.upvotes--;
        return this.upvotes;
    }
}

export class ArticleStore {
    @observable articles = []

    createArticle(text) {
        this.articles.push(new Article(text))
    }

}

export default new ArticleStore
