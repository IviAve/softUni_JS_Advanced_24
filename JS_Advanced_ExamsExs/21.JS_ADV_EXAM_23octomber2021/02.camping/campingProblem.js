class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        const existingParticipant = this.listOfParticipants.find(p => p.name === name);
        if (existingParticipant) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const index = this.listOfParticipants.findIndex(p => p.name === name);
        if (index === -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'Battleship') {
            const participant = this.findParticipant(participant1);
            participant.power += 20;
            return `The ${participant.name} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame === 'WaterBalloonFights') {
            const player1 = this.findParticipant(participant1);
            const player2 = this.findParticipant(participant2);
            
            if (player1.condition !== player2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            } else if (player2.power > player1.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';
            }
        } else {
            throw new Error('Invalid game type.');
        }
    }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        const sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sortedParticipants.forEach(p => {
            result += `${p.name} - ${p.condition} - ${p.power} - ${p.wins}\n`;
        });
        return result.trim();
    }

    findParticipant(name) {
        const participant = this.listOfParticipants.find(p => p.name === name);
        if (!participant) {
            throw new Error('Invalid entered name/s.');
        }
        return participant;
    }
}
