'use strict';

import Player from './model/player.js';
import States from './model/states.js';


const fsa = {
    [States.BEGIN]: {
        [States.PLAYER_TURN]: [States.PLAYER_TURN]
    },
    [States.PLAYER_TURN]: {
        [States.PLAYER_TURN]: [States.PLAYER_TURN],
        [States.PLAYER_TURN_END]: [States.DEALER_TURN]
    }
};

export default class Game {
    constructor(deck) {
        this.deck = deck;
        this.players = {
            dealer: new Player(),
            player: new Player()
        };
        this.state = States.BEGIN;
    }

    tick() {
        this.gameLogic();
    }

    gameLogic() {
        switch (this.state) {
            case States.BEGIN:
                this.initialDeal();
                break;
        }
    }

    transition(newState) {
        this.state = fsa[this.state][newState];
    }

    initialDeal() {
        let dealerHand = [this.deck.next()],
            playerHand = [this.deck.next(), this.deck.next()];

        this.players.dealer.setHand(dealerHand);
        this.players.player.setHand(playerHand);

        this.transition(States.PLAYER_TURN);
    }
}
