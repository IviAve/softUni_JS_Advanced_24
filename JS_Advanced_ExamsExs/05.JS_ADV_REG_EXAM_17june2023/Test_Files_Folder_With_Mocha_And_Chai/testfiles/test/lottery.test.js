import { assert } from 'chai';
import { lottery } from '../Lottery.js';

describe('Lottery', () => {
    describe('buyLotteryTicket', () => {
        it('should return correct message when buying tickets', () => {
            assert.strictEqual(lottery.buyLotteryTicket(10, 5, true), 'You bought 5 tickets for 50$.');
        });

        it('should throw error for invalid input', () => {
            assert.throws(() => lottery.buyLotteryTicket(0, 5, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(10, -1, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket('10', 5, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(10, 5, false), 'Unable to buy lottery ticket!');
        });
    });

    describe('checkTicket', () =>{
        it('should return "Congratulations you win" for 3 to 5 winning numbers', () => {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 3, 5, 7, 9, 11];
            assert.strictEqual(lottery.checkTicket(ticketNumbers, luckyNumbers), 'Congratulations you win, check your reward!');
        });

        it('should return "You win the JACKPOT!!!" for all 6 winning numbers', () => {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 2, 3, 4, 5, 6];
            assert.strictEqual(lottery.checkTicket(ticketNumbers, luckyNumbers), 'You win the JACKPOT!!!');
        });

        it('should throw error for invalid input', () => {
            assert.throws(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3]), 'Invalid input!');
            assert.throws(() => lottery.checkTicket('1,2,3,4,5,6', [1, 2, 3, 4, 5, 6]), 'Invalid input!');
        });
    });

    describe('secondChance', () => {
        it('should return "You win our second chance prize!" if ticketID is in secondChanceWinningIDs', () => {
            assert.strictEqual(lottery.secondChance(123, [123, 456, 789]), 'You win our second chance prize!');
        });

        it('should return "Sorry, your ticket didn\'t win!" if ticketID is not in secondChanceWinningIDs', () => {
            assert.strictEqual(lottery.secondChance(123, [456, 789]), 'Sorry, your ticket didn\'t win!');
        });

        it('should throw error for invalid input', () => {
            assert.throws(() => lottery.secondChance('123', [123, 456, 789]), 'Invalid input!');
            assert.throws(() => lottery.secondChance(123, '123,456,789'), 'Invalid input!');
        });
    });
});
