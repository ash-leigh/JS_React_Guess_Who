_ = require('lodash');

var CharacterFilter = function(characters){
  this.characters = characters;
}

CharacterFilter.prototype = {
  filterByGender: function(gender){
    if(!gender) return this.characters;
    var filteredCharacters = [];
    _.forEach(this.characters, function(character){
      if(character.gender === gender)
        filteredCharacters.push(character);
    })
    return filteredCharacters;
  },
  filterByHairColour: function(colour){
    if(!colour) return this.characters;
    var filteredCharacters = [];
    _.forEach(this.characters, function(character){
      if(character.hairColour === colour)
        filteredCharacters.push(character);
    })
    return filteredCharacters;
  },
  filterByEyeColour: function(colour){
    if(!colour) return this.characters;
    var filteredCharacters = [];
    _.forEach(this.characters, function(character){
      if(character.eyeColour === colour)
        filteredCharacters.push(character)
    })
    return filteredCharacters;
  },
  filterByHouse: function(house){
    if(!house) return this.characters;
    var filteredCharacters = [];
    _.forEach(this.characters, function(character){
      if(character.house === house)
        filteredCharacters.push(character)
    })
    return filteredCharacters;
  }
}

module.exports = CharacterFilter;