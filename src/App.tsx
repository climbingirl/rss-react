import { PureComponent } from 'react';
import Search from './components/Search/Search';
import Characters from './components/Characters/Characters';
import { Character } from './api/models';
import { charactersAPI } from './api/charactersApi';
import Loader from './components/Loader/Loader';
import ErrorBoundaryBtn from './components/ErrorBoundary/ErrorBoundaryBtn/ErrorBoundaryBtn';
import { EmptyProps } from './types';

interface AppState {
  characters: Character[];
  searchValue: string;
  isLoading: boolean;
}

class App extends PureComponent<EmptyProps, AppState> {
  SEARCH_VALUE_KEY = 'rssReactIvanovaSearchValue';

  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      characters: [],
      searchValue: localStorage.getItem(this.SEARCH_VALUE_KEY) || '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleCharactersRequest();
  }

  componentDidUpdate(
    prevProps: Readonly<EmptyProps>,
    prevState: Readonly<AppState>
  ) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.handleCharactersRequest();
    }
  }

  async handleCharactersRequest() {
    this.setState({ isLoading: true });
    const characters = await charactersAPI.getCharacters(
      this.state.searchValue
    );
    this.setState({ characters, isLoading: false });
  }

  handleSearchValueChange(value: string) {
    localStorage.setItem(this.SEARCH_VALUE_KEY, value);
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <main className="main">
        <Search
          value={this.state.searchValue}
          onValueChange={this.handleSearchValueChange.bind(this)}
          isLoading={this.state.isLoading}
        />
        <ErrorBoundaryBtn />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Characters characters={this.state.characters} />
        )}
      </main>
    );
  }
}

export default App;
