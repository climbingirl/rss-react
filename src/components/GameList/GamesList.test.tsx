import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/renderWithRouter';
import GamesList from './GamesList';
import { games } from '../../test/data/gamesData';

describe('GamesList', () => {
  it('renders the specified number of cards', () => {
    renderWithRouter(<GamesList games={games} />);
    const gamesList = screen.getByTestId('games-list');
    const gameCards = screen.getAllByTestId('game-card');
    expect(gamesList).toBeInTheDocument();
    expect(gameCards.length).toBe(games.length);
  });

  it('displayes "Nothing found!" if no cards are present', () => {
    renderWithRouter(<GamesList games={[]} />);
    const gamesEmtyList = screen.getByTestId('games-empty-list');
    expect(gamesEmtyList).toHaveTextContent('Nothing found!');
  });
});
