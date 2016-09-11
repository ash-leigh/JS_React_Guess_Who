var React = require('react');

var Character= function(props){
  return(
    <div>
      <img src={props.image}></img>
    </div>
  )
}

module.exports = Character;