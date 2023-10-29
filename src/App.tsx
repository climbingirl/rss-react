import { PureComponent } from 'react';
import Search from './components/Search/Search';
import Characters from './components/Characters/Characters';
import { Character } from './api/models';
import { charactersAPI } from './api/charactersApi';
import Loader from './components/Loader/Loader';

interface AppState {
  characters: Character[];
  searchValue: string;
  isLoading: boolean;
}

type AppProps = Record<string, never>;

class App extends PureComponent<AppProps, AppState> {
  SEARCH_VALUE_KEY = 'rssReactIvanovaSearchValue';

  constructor(props: AppProps) {
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
    prevProps: Readonly<AppProps>,
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
