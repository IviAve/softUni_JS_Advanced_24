function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
 
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
 
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
 
        addComment(comment) {
            this.comments.push(comment);
        }
 
        toString() {
            let superString = super.toString();
            let rating = this.likes - this.dislikes;
 
            if (this.comments.length > 0) {
                let commentsToPrint = '';
                for (let comment of this.comments) {
                    commentsToPrint += `\n * ${comment}`;
                }
 
                return `${superString}\nRating: ${rating}\nComments:${commentsToPrint}`;
            } else {
                return `${superString}\nRating: ${rating}`;
            }
 
        }
    }
 
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
 
        view() {
            this.views++;
            return this;
        }
 
        toString() {
            let superString = super.toString();
 
            return superString + `\nViews: ${this.views}`;
        }
    }
 
    return {Post, SocialMediaPost, BlogPost}
}



const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!




// You need to create several classes for Posts.
// Implement the following classes:
// •	Post, which is initialized with the title (String) and content (String)
// o	The 2 arguments should be public members
// o	The Post class should also have toString() function which returns the following result:
// "Post: {postTitle}"
// "Content: {postContent}"
// •	SocialMediaPost, which inherits the Post class and should be initialized with
//  2 additional arguments - likes (Number) and dislikes (Number). The class should hold:
// o	comments(Strings) -  an array of strings
// o	addComment(comment)- a function, which adds comments to that array
// o	The class should extend the toString() function of the Post class,
//  and should return the following result:
// "Post: {postTitle}"
// "Content: {postContent}"
// "Rating: {postLikes - postDislikes}"
// "Comments:"
// " * {comment1}"
// " * {comment2}"
// . . .
// In case there are no comments, return information only about the title, 
// content, and rating of the post.
// •	BlogPost, which inherits the Post class:
// o	The BlogPost class should be initialized with 1 additional argument - views(Number).
// o	The BlogPost class should hold 
// - view() - which increments the views of the object with 1, every time
//  it is called. The function should return the object so that chaining is supported.
// o	The BlogPost class should extend the toString() function of the Post
//  class, and should return the following result:
// "Post: {postTitle}"
// "Content: {postContent}"
// "Views: {postViews}"
// Submit a function (NOT IIFE), which holds all classes, and returns them as an object.
