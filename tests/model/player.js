'use strict';

import {assert} from 'chai';
import sinon from 'sinon';

import Player from '../../src/model/player.js';


describe('player', () => {
    it('should accept, hold and return hand', () => {
        let player = new Player(),
            emptyHand = [],
            handWithCards = [1, 2, 4];

        player.setHand(emptyHand);
        assert.equal(emptyHand, player.getHand());

        player.setHand(handWithCards);
        assert.equal(handWithCards, player.getHand());
    });

    it('should return a promise for decition', () => {
        let player = new Player();
    });
});
