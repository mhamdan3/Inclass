var inquirer = require("inquirer");

function Player(name, position, offence, defense) {
  this.name = name;
  this.position = position;
  this.offence = offence;
  this.defense = defense;
}

Programmer.prototype.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffence: " + this.offence + "\nDefense: " + this.defense);
  };
  
  var count = 0;
  
  var askQuestion = function() {
    if (count < 5) {
      inquirer.prompt([
        {
          name: "name",
          message: "What is your name?"
        }, {
          name: "position",
          message: "What is your current position?"
        }, {
          name: "offence",
          message: "How good are you on offence?"
        }, {
          name: "defense",
          message: "How good are you on defense?"
        }
      ]).then(function(answers) {
        var newGuy = new Player(
          answers.name,
          answers.position,
          answers.offence,
          answers.defense);
        newGuy.printInfo();
        count++;
        askQuestion();
      });
    }
    else {
      console.log("All questions asked");
    }
  };
  
  askQuestion();