import {
    computed,
    observable
} from "mobx"

class Comment {
    constructor (message) {
        this.message = message;
        this.date = Date.now();
    }
}
export class CommentStore {
    @observable comments = [new Comment(randomComment())]

    constructor () {
        console.log('made comment store');
    }

    createComment (comment) {
        this.comments.push(new Comment(comment));
    }
}

function randomComment() {
    let comments = ['wow very impress', 'much mobx', 'first', 'ayy lmao', 'beautiful article', 'i cried for 10 whole minutes out of sheer joy', 'ow now brown cow', 'spare change?', 'aldogasaurusrex', 'the incredible flying vi'];
    return comments[Math.floor(Math.random()*comments.length)];
}

export default CommentStore
