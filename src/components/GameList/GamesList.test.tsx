import { render, screen } from '@testing-library/react';
import { useAppContext } from '../../context/AppContext';
import GameList from './GameList';
import { Mock } from 'vitest';
import { games } from '../../test/data/gamesData';
import withRouter from '../../test/withRouter';

describe('GamesList', () => {
  vi.mock('../../context/AppContext');

  it('renders the specified number of cards', () => {
    (useAppContext as Mock).mockImplementation(() => {
      return {
        games,
      };
    });
    render(withRouter(<GameList />));
    const gamesList = screen.getByTestId('games-list');
    const gameCards = screen.getAllByTestId('game-card');
    expect(gamesList).toBeInTheDocument();
    expect(gameCards.length).toBe(games.length);
  });

  it('displayes "Nothing found!" if no cards are present', () => {
    (useAppContext as Mock).mockImplementation(() => {
      return {
        games: [],
      };
    });
    render(withRouter(<GameList />));
    const gamesEmtyList = screen.getByTestId('games-empty-list');
    expect(gamesEmtyList).toHaveTextContent('Nothing found!');
  });
});
