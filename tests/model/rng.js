'use strict';

import {assert} from 'chai';

import RNG from '../../src/model/rng.js';


describe('rng', () => {
    it('should generate random numbers within range', () => {
        let oneToTen = new RNG(1, 10),
            random;

        for (let i = 0; i < 100; ++i) {
            random = oneToTen.next();
            assert.isTrue(random >= 1 && random <= 10);
        }
    });
});
