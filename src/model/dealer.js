'use strict';


export default class Dealer {
    constructor(deck) {
        this.deck = deck;
    }

    deal() {
        return this.deck.next();
    }
}
