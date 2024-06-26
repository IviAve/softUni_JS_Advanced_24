class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const newPlayers = [];

        footballPlayers.forEach(playerInfo => {
            const [name, age, playerValue] = playerInfo.split('/');
            const existingPlayer = this.invitedPlayers.find(p => p.name === name);

            if (existingPlayer) {
                if (Number(playerValue) > existingPlayer.playerValue) {
                    existingPlayer.playerValue = Number(playerValue);
                }
            } else {
                this.invitedPlayers.push({
                    name,
                    age: Number(age),
                    playerValue: Number(playerValue)
                });
                newPlayers.push(name);
            }
        });

        return `You successfully invite ${newPlayers.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (Number(playerOffer) < player.playerValue) {
            const priceDifference = player.playerValue - Number(playerOffer);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const ageDifference = age - player.age;

        if (ageDifference < 0) {
            return `${name} is above age limit!`;
        } else if (ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    }

    transferWindowResult() {
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        let result = 'Players list:\n';
        this.invitedPlayers.forEach(player => {
            result += `Player ${player.name}-${player.playerValue}\n`;
        });

        return result.trim();
    }
}





// let fTeam = new footballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));


// Output 1
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

// Input 2
//  let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// Output 2
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Uncaught Error: Barbukov is not invited to the selection list!


// Input 3
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));


// Output 3
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.


// Input 4
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


// Output 4
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52

// Write a class Football team, which supports the described functionality below:
// Functionality
// Constructor
// Should have these 3 properties:
// •	clubName - string
// •	country - string
// •	invitedPlayers - empty array
// At the initialization of the FootballTeam class, the constructor 
// accepts the clubName and country. 
// Hint: You can add more properties to help you finish the task.
// newAdditions(footballPlayers)
// This method adds players to the invitation list. 
// The method takes one argument: footballPlayers (array of strings).
// •	Every element into this array is information about player in the format:
// "{name}/{age}/{playerValue}"
// o	They are separated by slash symbol "/". The playerValue is in millions.
//  Example: ["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"…]
// •	If the name of the current player is already present in invitedPlayers
//  array, update the old playerValue only if the current one is higher.
// •	Otherwise, should add the player, with properties: 
// {name, age, playerValue} to the invitedPlayers array.
// •	In all cases, you must finally return a string in the following format:
// "You successfully invite {name1}, {name2}, …{nameN}."
//        Note: When returning the string, keep in mind that the 
//        different names of football Players must be:
// •	Unique - for instance: 
// o	" You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres " - is a correctly returned string
// o	" You successfully invite Kylian Mbappé, Lionel Messi, Kylian Mbappé "- is not a correctly returned string
// •	Separated by comma and space (, )
// signContract(selectedPlayer)
// With this method, a manager can sign contracts with players 
// from the invited list. The method takes one argument: selectedPlayer (string).
// •	Тhe string about the selected player is in the format: 
// "{name}/{playerOffer}"
// •	Check:
// o	If the name of the current player is not present in 
// invitedPlayers array, an error with the following message should be thrown:
// "{name} is not invited to the selection list!"
// o	If the playerOffer selected by the manager for a given 
// player is less than the value recorded in the array invitedPlayers, an error with the following message should be thrown:
// "The manager's offer is not enough to sign a contract with {name}, {priceDifference} million more are needed to sign the contract!"
// 	priceDifference - is the difference between playerValue and playerOffer.
// o	Otherwise, if the above conditions are not met, you must replace 
// playerValue with the string "Bought"
// o	Finally, you need to return the string in the following format:
// "Congratulations! You sign a contract with {BoughtPlayer} for {BuyingPrice} million dollars."
// ageLimit(name, age)
// With this method, we make sure that the players are young enough to sign a five-year contract with the team, a reduced-time contract, or no contract at all. The method takes two arguments: 
// o	name (string)
// o	age (number)
// •	If the submitted name is not present in the invitedPlayers array,
//  an error with the following message should be thrown:
//   "{name} is not invited to the selection list!"
// •	If the age recorded in the invitedPlayers array is less than the age 
// submitted as an argument, you must check the difference between the limit
//  age and player age. If the difference is less than 5 years, return the 
//  following string: "{name} will sign a contract for {ageDifference} years with {clubName} in {country}!"
// o	ageDifference - is the difference between limit age and player age.
// •	 If the age difference is more than 5 years, return the following message:
// "{name} will sign a full 5 years contract for {clubName} in {country}!"
// •	If the player age from the invitedPlayers array is greater or
//  equal to the age submitted as an argument, return the following 
//  message: "{name} is above age limit!"
// transferWindowResult()
// o	This method returns all players, The first line shows the 
// following message:
// "Players list:"
// o	On the new line, display information about each player
//  sorted in ascending order of name:
// "Player {name}-{playerValue}"
// Example
// Input 1


