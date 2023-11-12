import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test/renderWithRouter';
import PaginationPages from './PaginationPages';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import { useAppContext } from '../../../context/AppContext';
import { Mock } from 'vitest';

describe('PaginationPages', () => {
  vi.mock('../../../context/AppContext');

  beforeEach(() => {
    (useAppContext as Mock).mockImplementation(() => {
      return {
        gamesCount: 100,
        pageSize: 20,
      };
    });
  });

  it('component updates URL query parameter when page changes', () => {
    const router = renderWithRouter(<PaginationPages />);
    const nextPageBtn = screen.getByTestId('next-page');
    fireEvent.click(nextPageBtn);
    const searchParams = new URLSearchParams(router.state.location.search);
    expect(searchParams.has(SEARCH_PARAMS.PAGE)).toBeTruthy();
    expect(searchParams.get(SEARCH_PARAMS.PAGE)).toBe('2');
  });
});
