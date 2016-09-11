var React = require('react');
var Character = require('./Character');

var CharacterList = React.createClass({

  render: function(){
    var characterNodes = this.props.characters.map(function(character){
      return(
        <Character image={character.image}></Character>
      )
    })
    return(
      <div>
        {characterNodes}
      </div>
    )
  }

})


module.exports = CharacterList
