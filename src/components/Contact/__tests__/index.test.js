import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact/>);
    })
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('text', () => {
    it('is correct', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('contact-h1')).toHaveTextContent('Contact me');
        expect(getByTestId('contact-submit')).toHaveTextContent('Submit')
    })
})