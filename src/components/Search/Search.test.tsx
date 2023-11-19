import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../test/renderWithRouter';
import Search from './Search';
import * as reduxHooks from '../../hooks/redux';
import { gamesSlice } from '../../store/gamesSlice/gamesSlice';

describe('Search', () => {
  let input: HTMLInputElement;
  let button: HTMLButtonElement;
  const initialValue = 'initial value';
  const dispatchSpy = vi.spyOn(reduxHooks, 'useAppDispatch');
  const setSearchValueSpy = vi.spyOn(gamesSlice.actions, 'setSearchValue');
  dispatchSpy.mockReturnValue(vi.fn);

  beforeEach(() => {
    renderWithRouter(
      <Search searchValue={initialValue} isGamesLoading={false} />
    );
    input = screen.getByRole('textbox');
    button = screen.getByRole('button', { name: 'Search' });
  });

  it('renders an input and Search button', () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('clicking the Search button saves the entered value to the Redux store', () => {
    const newValue = 'new value';
    expect(input).toHaveValue(initialValue);
    fireEvent.change(input, { target: { value: newValue } });
    waitFor(() => {
      expect(dispatchSpy).toHaveBeenCalled();
      expect(setSearchValueSpy).toHaveBeenCalledWith(newValue);
    });
  });
});
