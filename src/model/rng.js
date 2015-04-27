'use strict';


export default class RNG {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    next() {
        return Math.floor(Math.random() * (this.to - this.from + 1)) + this.from;
    }
}
