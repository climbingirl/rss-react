import { fireEvent, screen } from '@testing-library/react';
import GameCard from './GameCard';
import { games } from '../../../test/data/gamesData';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { SEARCH_PARAMS } from '../../../router/searchParams';

describe('GameCard', () => {
  const game = games[0];

  it('renders the relevant card data', () => {
    renderWithRouter(<GameCard game={game} />);
    const gameCard = screen.getByTestId('game-card');
    const gameImg = screen.getByRole('img');
    const gameName = screen.getByTestId('game-name');
    expect(gameCard).toBeInTheDocument();
    expect(gameImg).toHaveAccessibleName(game.name);
    expect(gameImg).toHaveAttribute('src', game.image);
    expect(gameName).toHaveTextContent(game.name);
  });

  it('opens a detailed card component by clicking on a card and change search', () => {
    const router = renderWithRouter(<GameCard game={game} />);
    const gameCard = screen.getByTestId('game-card');
    fireEvent.click(gameCard);
    const searchParams = new URLSearchParams(router.state.location.search);
    expect(searchParams.has(SEARCH_PARAMS.DETAILS)).toBeTruthy();
    expect(searchParams.get(SEARCH_PARAMS.DETAILS)).toBe(String(game.id));
  });
});
