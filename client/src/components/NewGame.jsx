var React = require('react');
var CharacterList = require('./CharacterList');

var NewGame = React.createClass({

  render: function(){
    return(
      <CharacterList characters={this.props.characters}></CharacterList>
    )
  }

})

module.exports = NewGame;