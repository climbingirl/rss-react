import React from 'react';
import { Character } from '../../api/models';
import './Character.scss';

interface CharactersProps {
  character: Character;
}

class CharacterItem extends React.Component<CharactersProps> {
  character = this.props.character;

  render() {
    return (
      <div className="character">
        <div className="character__name">{this.character.name}</div>
        <div className="character__info">
          <div className="character__gender">
            <span className="character__info-title">Gender: </span>
            {this.character.gender}
          </div>
          <div className="character__birth">
            <span className="character__info-title">Birth year: </span>
            {this.character.birth_year}
          </div>
          <div className="character__height">
            <span className="character__info-title">Height: </span>
            {this.character.height}
          </div>
          <div className="character__hair">
            <span className="character__info-title">Hair color: </span>
            {this.character.hair_color}
          </div>
          <div className="character__eye">
            <span className="character__info-title">Eye color: </span>
            {this.character.eye_color}
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterItem;
