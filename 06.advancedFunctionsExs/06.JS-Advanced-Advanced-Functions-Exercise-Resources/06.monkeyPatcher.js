function monkeyPatcher(action) {

    let result = [];
    let that = this;

    switch (action) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            result = getScore();

            break;
    }

    function getScore() {

        let positive = that.upvotes;
        let negative = that.downvotes;
        let total = positive + negative;
        let score = positive - negative;

       
        if (total > 50) {

            let roundedNum = Math.ceil(Math.max(positive, negative) * 0.25);

            positive += roundedNum;
            negative += roundedNum;
        }
        let rating  = 'new';

        if (total < 10) {

            rating = 'new';

        } else if (that.upvotes > total * 0.66) {
            rating = 'hot';
        } else if (score >= 0 && total > 100) {
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        }

        return [positive, negative, score, rating];
    }
    return result;
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
monkeyPatcher.call(post, 'downvote');         // (executed 50 times)
score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);


// Your employer placed you in charge of an old forum management project.
//  The client requests new functionality, but the legacy code has high coupling,
//   so you don’t want to change anything, for fear of breaking everything else.
//   You know which values need to be accessed and modified, so it’s time to monkey patch!
// Write a program to extend a forum post record with voting functionality. It
//  needs to have the options to upvote, downvote, and tally the total score
//  (positive minus negative votes). Furthermore, to prevent abuse, if a post
//   has more than 50 total votes, the numbers must be obfuscated – the stored
//   values remain the same, but the reported amounts of upvotes and downvotes
//   have a number added to them. This number is 25% of the greater number of
//    votes (positive or negative), rounded up. The actual numbers should not
//    be modified, just the reported amounts.
// Every post also has a rating, depending on its score. If positive votes are
//  the overwhelming majority (>66%), the rating is hot. If there is no majority,
//   but the balance is non-negative and the sum of both votes is more than 100,
//   its rating is controversial. If the balance is negative, the rating becomes
//   unpopular. If the post has less than 10 total votes, or no other rating is met,
//    its rating is new regardless of balance. These calculations are performed on the actual numbers.
// Your function will be invoked with the call(object, arguments), so treat it as
//  though it is internal for the object. A forum post, to which the function will be attached,
//   has the following structure:
// JavaScript
// {
//   id: <id>,
//   author: <author name>,
//   content: <text>,
//   upvotes: <number>,
//   downvotes: <number>
// }
// The arguments will be one of the following strings:
// •	upvote – increase the positive votes by one
// •	downvote – increase the negative votes by one
// •	score – report positive and negative votes, balance and rating in an array; obfuscation rules apply
// Input
// Input will be passed as arguments to your function through a call() invocation.
// Output
// Output from the report command should be returned as a result of the
// function in the form of an array of three numbers and a string, as described above.
// The post begins at 100/100, we add one upvote and one downvote, bringing it to 101/101.
// The reported score is inflated by 25% of the greater value, rounded up (26).
// The balance is 0, and at least one of the numbers is greater than 100, so we
// return an array with the rating 'controversial'.
// We downvote 50 times, bringing the score to 101/151, the reported values are
//  inflated by 151*0.25=38 (rounded up), and since the balance is negative with
//   return an array with rating 'unpopular'.
