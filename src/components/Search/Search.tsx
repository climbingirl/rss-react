import React from 'react';
import './Search.scss';

interface SearchProps {
  value: string;
  onValueChange: (value: string) => void;
  isLoading: boolean;
}

interface SearchState {
  value: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.onValueChange(this.state.value);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <section className="search">
        <div className="container">
          <form
            className="search__form"
            role="search"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <input
              className="search__input"
              value={this.state.value}
              placeholder="Enter character name"
              type="text"
              onChange={this.handleChange.bind(this)}
            />
            <button
              className="search__btn"
              type="submit"
              disabled={this.props.isLoading}
            >
              Search
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Search;
