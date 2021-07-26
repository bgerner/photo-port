import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'Lorem ipsum sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal/>)
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal/>)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('Click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})
