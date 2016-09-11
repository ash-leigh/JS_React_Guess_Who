_ = require('lodash');

var CharacterSelection = function(){

}

CharacterSelection.prototype = {
  userChoice: function(characters, choosenCharacter){
    for(character of characters){
      if(character.name === choosenCharacter.name)
        return character;
    }
  },
  gamesChoice: function(characters){
    var randomCharacter = characters[Math.floor(Math.random() * characters.length)]
    return randomCharacter;
  }
}

module.exports = CharacterSelection;