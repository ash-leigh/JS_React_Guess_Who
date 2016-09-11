var assert = require('chai').assert;
var CharacterFilter = require('../models/CharacterFilter');
var sampleCharacters = require('../db/sample_characters');

describe('Guess Who Character filter', function(){ 

  beforeEach(function(){
    characterFilter = new CharacterFilter(sampleCharacters);
  })

  it('should contain characters at start', function(){
    assert.equal(characterFilter.characters.length, 11);
  })

  it('should filter by male', function(){
    males = characterFilter.filterByGender('male');
    assert.equal(males.length, 7);
  })

  it('should filter by female', function(){
    females = characterFilter.filterByGender('female');
    assert.equal(females.length, 4);
  })

  it('should filter by blonde hair', function(){
    blondes = characterFilter.filterByHairColour('blonde');
    assert.equal(blondes.length, 3);
  })

  it('should filter by brown hair', function(){
    brunettes = characterFilter.filterByHairColour('brown');
    assert.equal(brunettes.length, 3);
  })

  it('should filter by red hair', function(){
    redheads = characterFilter.filterByHairColour('red');
    assert.equal(redheads.length, 2);
  })

  it('should filter by black hair', function(){
    blackhair = characterFilter.filterByHairColour('black');
    assert.equal(blackhair.length, 3);
  })

  it('should filter by blue eyes', function(){
    blueeyes = characterFilter.filterByEyeColour('blue');
    assert.equal(blueeyes.length, 1);
  })

  it('should filter by grey eyes', function(){
    greyeyes = characterFilter.filterByEyeColour('grey');
    assert.equal(greyeyes.length, 3);
  })

  it('should filter to winner if first question was grey eyes', function(){
    greyeyes = characterFilter.filterByEyeColour('grey');
    males = new CharacterFilter(greyeyes);
    filteredMales = males.filterByGender('male');
    brunettes = new CharacterFilter(filteredMales);
    filteredBrunettes = brunettes.filterByHairColour('brown');
    assert.equal(filteredBrunettes.length, 1);
  })

  it('should filter by green eyes', function(){
    greeneyes = characterFilter.filterByEyeColour('green');
    assert.equal(greeneyes.length, 1);
  }) 

  it('should filter by brown eyes', function(){
    browneyes = characterFilter.filterByEyeColour('brown');
    assert.equal(browneyes.length, 3);
  })

  it('should filter by black eyes', function(){
    blackeyes = characterFilter.filterByEyeColour('black');
    assert.equal(blackeyes.length, 1);
  })

  it('should filter by Gryffindor', function(){
    gryffindor = characterFilter.filterByHouse('Gryffindor');
    assert.equal(gryffindor.length, 5);
  })

  it('should filter by Slytherin', function(){
    slytherin = characterFilter.filterByHouse('Slytherin');
    assert.equal(slytherin.length, 3);
  })

  it('should filter by Hufflepuff', function(){
    hufflepuff = characterFilter.filterByHouse('Hufflepuff');
    assert.equal(hufflepuff.length, 1);
  })

  it('should filter by Ravenclaw', function(){
    ravenclaw = characterFilter.filterByHouse('Ravenclaw');
    assert.equal(ravenclaw.length, 2);
  })

})