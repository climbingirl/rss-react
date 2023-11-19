import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test/renderWithRouter';
import PaginationPages from './PaginationPages';
import { SEARCH_PARAMS } from '../../../router/searchParams';
import * as reduxHooks from '../../../hooks/redux';

describe('PaginationPages', () => {
  const useAppSelectorSpy = vi.spyOn(reduxHooks, 'useAppSelector');

  it('component updates URL query parameter when page changes', () => {
    useAppSelectorSpy.mockReturnValue(20);
    const router = renderWithRouter(<PaginationPages gamesCount={100} />);
    const nextPageBtn = screen.getByTestId('next-page');
    fireEvent.click(nextPageBtn);
    const searchParams = new URLSearchParams(router.state.location.search);
    expect(searchParams.has(SEARCH_PARAMS.PAGE)).toBeTruthy();
    expect(searchParams.get(SEARCH_PARAMS.PAGE)).toBe('2');
  });
});
