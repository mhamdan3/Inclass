var mysql = require('mysql');
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    database: "Great Bay",
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock" 
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    start();
});

// function which prompts the user for what action they should take
var start = function() {
    inquirer.prompt({
        name: "postOrBid",
        type: "list",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
    }).then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid.toUpperCase() === "POST") {
            postAuction();
        }
        else {
            bidAuction();
        }
    });
};

// function to handle posting new items up for auction
var postAuction = function() {
    // prompt for info about the item being put up for auction
    inquirer.prompt([{
        name: "item",
        type: "input",
        message: "What is the item you would like to submit?"
    }, {
        name: "category",
        type: "input",
        message: "What category would you like to place your auction in?"
    }, {
        name: "startingBid",
        type: "input",
        message: "What would you like your starting bid to be?",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }]).then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query("INSERT INTO auctions SET ?", {
            itemname: answer.item,
            category: answer.category,
            startingbid: answer.startingBid,
            highestbid: answer.startingBid
        }, function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
        });
    });
};

// function to get all items available for bidding, and allow you to place a bid
var bidAuction = function () {
    connection.query("SELECT * FROM auctions", function (err,res) {
    console.log(res);
    inquirer.prompt({
        name: "choice",
        type: "rawlist",
        choices: function (value) {
            var choiceArray = [];
            for(var i = 0; i< res.length; i ++){
                choiceArray.push(res[i].itemname);
            }return choiceArray;
        },
        message: "What auction would you like to place a bid on?"
    }).then (function (answer) {
        for (var i  = 0;i<res.length; i++){
            if(res[i].itemname ==answer.choice){
                var chosenItem = res[i];
                inquirer.prompt({
                    name:"bid",
                    type:"input",
                    message:"How much you want to bid?",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }).then (function (answer) {
                    if(chosenItem.highestbid < parseInt(answer.bid)){
                        connection.query("UPDATE auctions SET ? WHEre ?",[{
                            highestbid: answer.bid
                        },{
                            id:chosenItem.id
                        }], function (err,res){
                            console.log("Bid successfully placed!");
                            start();

                        });
                    }else {
                        console.log("\n============================\nToo low.Try again!");
                        // bidAuction();

                    }
                })
            }
        }

    })
    })
};
