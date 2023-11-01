import { PureComponent } from 'react';
import { Character } from '../../api/models';
import CharacterItem from './Character/Character';
import './Characters.scss';

interface CharactersProps {
  characters: Character[];
}

class Characters extends PureComponent<CharactersProps> {
  render() {
    return (
      <section className="characters">
        <div className="container">
          {!this.props.characters.length ? (
            <div className="characters__empty">Nothing found!</div>
          ) : (
            <div className="characters__inner">
              {this.props.characters.map((character) => (
                <CharacterItem character={character} key={character.url} />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Characters;
