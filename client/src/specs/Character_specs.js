var assert = require('chai').assert;
var Character = require('../models/Character');

describe('Guess Who Character', function(){ 

  beforeEach(function(){
    character = new Character({
      name: 'Harry Potter',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      gender: 'male',
      hairColour: 'black',
      eyeColour: 'green',
      house: 'Gryffindor'
    })
  })

  it('should have name', function(){
    assert.equal(character.name, 'Harry Potter')
  })

  it('should have image', function(){
    assert.equal(character.image, 'http://hp-api.herokuapp.com/images/harry.jpg')
  })

  it('should have gender', function(){
    assert.equal(character.gender, 'male')
  })

  it('should have hair colour', function(){
    assert.equal(character.hairColour, 'black')
  })

  it('should have eye colour', function(){
    assert.equal(character.eyeColour, 'green')
  })

  it('should have house', function(){
    assert.equal(character.house, 'Gryffindor')
  })

})