var inquirer = require("inquirer");

function Player(name, position, offence, defense) {
    this.name = name;
    this.position = position;
    this.offence = offence;
    this.defense = defense;
  }

  Player.prototype.goodGame = function() {
    function coinFlip() {
        if(Math.random() >= 0.5) {
        this.offence++;
        console.log( this.name +"'s offense has gone up")
        } else {
            this.defence++;
            console.log( this.name +"'s defense has gone up")
        }
    }
  };

  Player.prototype.badGame = function() {
    function coinFlip() {
        if(Math.random() < 0.5) {
        this.offence++;
        console.log( this.name +"'s offense has gone down")
        } else {
            this.defence++;
            console.log( this.name +"'s defense has gone down")
        }
    }
  };