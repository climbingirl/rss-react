import { screen } from '@testing-library/react';
import GameDetailsCard from './GameDetailsCard';
import { renderWithRouter } from '../../../test/renderWithRouter';
import { gameDetails } from '../../../test/data/gamesData';

describe('GameDetailsCard', () => {
  const game = gameDetails;
  it('component correctly displays the detailed card data', () => {
    renderWithRouter(<GameDetailsCard game={gameDetails} />);
    const gameDetailsCard = screen.getByTestId('game-details-card');
    const gameDetailsName = screen.getByRole('heading');
    const gameDetailsImg = screen.getByRole('img');
    const gameDetailsDesc = screen.getByTestId('game-details__desc');
    expect(gameDetailsCard).toBeInTheDocument();
    expect(gameDetailsName).toHaveTextContent(game.name);
    expect(gameDetailsImg).toHaveAttribute('src', game.background_image);
    expect(gameDetailsImg).toHaveAccessibleName(game.name);
    expect(gameDetailsDesc).toHaveTextContent(game.description_raw);
  });
});
