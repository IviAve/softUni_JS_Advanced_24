class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = new Set();
    }

    get likes() {
        if (this._likes.size === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.size === 1) {
            return `${[...this._likes][0]} likes this story!`;
        } else {
            const [firstLike, ...others] = [...this._likes];
            return `${firstLike} and ${others.length} others like this story!`;
        }
    }

    like(username) {
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        if (this._likes.has(username)) {
            throw new Error("You can't like the same story twice!");
        }
        this._likes.add(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.has(username)) {
            throw new Error("You can't dislike this story!");
        }
        this._likes.delete(username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.some(comment => comment.id === id)) {
            const newComment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            };
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        } else {
            const comment = this._comments.find(comment => comment.id === id);
            const replyId = `${id}.${comment.replies.length + 1}`;
            const reply = {
                id: replyId,
                username: username,
                content: content
            };
            comment.replies.push(reply);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let sortedComments = this._comments.slice();

        switch (sortingType) {
            case 'asc':
                sortedComments.sort((a, b) => a.id - b.id);
                sortedComments.forEach(comment => {
                    comment.replies.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
                });
                break;
            case 'desc':
                sortedComments.sort((a, b) => b.id - a.id);
                sortedComments.forEach(comment => {
                    comment.replies.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
                });
                break;
            case 'username':
                sortedComments.sort((a, b) => a.username.localeCompare(b.username));
                sortedComments.forEach(comment => {
                    comment.replies.sort((a, b) => a.username.localeCompare(b.username));
                });
                break;
        }

        let commentsString = sortedComments.map(comment => {
            let repliesString = comment.replies.map(reply => `--- ${reply.id}. ${reply.username}: ${reply.content}`).join('\n');
            return `-- ${comment.id}. ${comment.username}: ${comment.content}` + (repliesString ? '\n' + repliesString : '');
        }).join('\n');

        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.size}\nComments:\n` + (commentsString || '');
    }
}


 art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
