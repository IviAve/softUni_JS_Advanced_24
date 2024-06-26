class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!");
        }

        let existingArticle = this.listOfArticles.find(a => a.articleModel === articleModel && a.articleName === articleName);

        if (existingArticle) {
            existingArticle.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points;
        switch (personality.toLowerCase()) {
            case 'vip':
                points = 500;
                break;
            case 'middle':
                points = 250;
                break;
            default:
                points = 50;
                break;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(a => a.articleModel === articleModel && a.articleName === articleName);

        if (!article) {
            throw new Error("This article is not found.");
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let guest = this.guests.find(g => g.guestName === guestName);

        if (!guest) {
            return "This guest is not invited.";
        }

        let articlePoints = this.possibleArticles[articleModel];
        if (guest.points < articlePoints) {
            return "You need more points to purchase the article.";
        }

        guest.points -= articlePoints;
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === "article") {
            let result = ["Articles information:"];
            this.listOfArticles.forEach(article => {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            });
            return result.join("\n");
        } else if (criteria === "guest") {
            let result = ["Guests information:"];
            this.guests.forEach(guest => {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            });
            return result.join("\n");
        } else {
            throw new Error("Invalid criteria");
        }
    }
}

// Example usage:
const artGallery = new ArtGallery('Curtis Mayfield');

console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));

console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));