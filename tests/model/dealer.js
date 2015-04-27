'use strict';

import {assert} from 'chai';
import sinon from 'sinon';

import Dealer from '../../src/model/dealer.js';
import {Deck} from '../../src/model/deck.js';


describe('dealer', () => {
    it('should deal cards from deck with `next` method', () => {
        let deck = new Deck();
        let stub = sinon.stub(deck, 'next');
        stub.onCall(0).returns(42);
        stub.onCall(1).returns(11);

        let dealer = new Dealer(deck);
        assert.equal(42, dealer.deal());
        assert.equal(11, dealer.deal());
    });
});
