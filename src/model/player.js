'use strict';


export default class Player {
    constructor() {
        this.hand = null;
    }

    setHand(hand) {
        this.hand = hand;
    }
    getHand() {
        return this.hand;
    }
}
