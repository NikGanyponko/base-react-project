
import React from 'react';
import { render } from '@testing-library/react';

import { AppTest } from './index';

describe('Simple tests', ()=> {
    it('Test 1', () => {
        expect(1).toBe(1);
    });

    it('Test 2', () => {
        const { debug } = render(<AppTest num={1}/>);
        debug();
    });
});