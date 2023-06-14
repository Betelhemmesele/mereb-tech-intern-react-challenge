import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ActorList from './components/ActorList';

describe('ActorList', () => {
    it('renders the list of actors', async() => {
        render( < ActorList / > );
        expect(await screen.findByText('Luke Skywalker')).toBeInTheDocument();
        expect(screen.getByText('Darth Vader')).toBeInTheDocument();
    });

    it('renders the actor detail when the Detail button is clicked', async() => {
        render( < ActorList / > );
        const luke = await screen.findByText('Luke Skywalker');
        const detailButton = within(luke).getByText('Detail');
        detailButton.click();
        expect(await screen.findByText('Films:')).toBeInTheDocument();
        expect(screen.getByText('A New Hope')).toBeInTheDocument();
        expect(screen.getByText('Back')).toBeInTheDocument();
    });
});