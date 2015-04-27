'use strict';


export class Deck {
    next() {
        throw 'Must be implemented';
    }
}

export class InfinityRandomNumberDeck extends Deck {
    constructor(rng) {
        super();

        this.rng = rng;
    }

    next() {
        return this.rng.next();
    }
}
