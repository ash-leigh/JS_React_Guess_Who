var assert = require('chai').assert;
var CharacterSelection = require('../models/CharacterSelection');
var Character = require('../models/Character');
var sampleCharacters = require('../db/sample_characters');

describe('Guess Who Character select', function(){

  beforeEach(function(){
    characterSelection = new CharacterSelection(sampleCharacters);
    character = new Character({
      name: 'Harry Potter',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      gender: 'male',
      hairColour: 'black',
      eyeColour: 'green',
      house: 'Gryffindor'
    })
  })

  it('should allow a user to select a character', function(){
    var chooseCharacter = characterSelection.userChoice(sampleCharacters, character)
    assert.equal(chooseCharacter.name, 'Harry Potter');
  })

  it('should allow the computer to select a random character', function(){
    assert.notEqual(characterSelection.gamesChoice(sampleCharacters), null);
  })

}) 