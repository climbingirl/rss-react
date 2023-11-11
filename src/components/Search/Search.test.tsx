import {
  RenderResult,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Search from './Search';
import withRouter from '../../test/withRouter';
import { useAppContext } from '../../context/AppContext';
import { Mock } from 'vitest';
import LocalStorageMock from '../../test/mock/localStorageMock';
import { SEARCH_VALUE_KEY } from '../../global-vars';

describe('Search', () => {
  let input: HTMLInputElement;
  let button: HTMLButtonElement;
  let renderOption: RenderResult;
  vi.mock('../../context/AppContext');
  global.localStorage = new LocalStorageMock();
  const initialSearchValue = 'initial value';

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(SEARCH_VALUE_KEY, initialSearchValue);
    (useAppContext as Mock).mockImplementation(() => {
      return {
        searchValue: localStorage.getItem(SEARCH_VALUE_KEY) || '',
      };
    });
    renderOption = render(withRouter(<Search gamesLoading={false} />));
    input = screen.getByRole('textbox');
    button = screen.getByRole('button', { name: 'Search' });
  });

  it('renders an input and Search button', () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('changes the input value by entering text', () => {
    expect(input).toHaveValue(initialSearchValue);
    fireEvent.change(input, { target: { value: 'changed value' } });
    renderOption.rerender(withRouter(<Search gamesLoading={false} />));
    expect(input).toHaveValue('changed value');
  });

  it('clicking the Search button saves the entered value to the local storage', () => {
    const setItemSpy = vi.spyOn(localStorage, 'setItem');
    fireEvent.change(input, { target: { value: 'test setItem' } });
    fireEvent.click(button);
    waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith(SEARCH_VALUE_KEY, 'test setItem');
      expect(localStorage.getItem(SEARCH_VALUE_KEY)).toBe('test setItem');
    });
  });

  it('component retrieves the value from the local storage upon mounting', () => {
    expect(input.value).toBe(initialSearchValue);
  });
});
