var React = require('react');
var GameHeader = require('./GameHeader');
var NewGame = require('./NewGame');

var Main = React.createClass({

  getInitialState: function(){
    return {characters: []};
  },

  loadCharactersFromServer: function(){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://hp-api.herokuapp.com/api/characters/students');
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState({characters: data})
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function(){
    this.loadCharactersFromServer();
  },

  render: function(){
    return(
      <div>
      <GameHeader />
      <NewGame characters={this.state.characters}/>
      </div>
    )
  }

})

module.exports = Main;