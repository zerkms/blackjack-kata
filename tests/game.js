'use strict';

import {assert} from 'chai';
import sinon from 'sinon';

import Game from '../src/game.js';
import {Deck} from '../src/model/deck.js';


describe('game', () => {
    it('should deal 3 cards initially', () => {
        let deck = new Deck(),
            mock = sinon.mock(deck);
        mock.expects('next').thrice();

        let game = new Game(deck);
        game.tick();

        mock.verify();
    });
});
