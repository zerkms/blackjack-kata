'use strict';

import {assert} from 'chai';
import sinon from 'sinon';

import {InfinityRandomNumberDeck} from '../../src/model/deck.js';
import RNG from '../../src/model/rng.js';


describe('deck', () => {
    describe('infinity RNG based', () => {
        it('should accept PRNG and return cards', () => {
            let rng = new RNG(),
                stub = sinon.stub(rng, 'next');
            stub.onCall(0).returns(5);
            stub.onCall(1).returns(7);

            let deck = new InfinityRandomNumberDeck(rng);

            assert.equal(5, deck.next());
            assert.equal(7, deck.next());
        });
    });
});
