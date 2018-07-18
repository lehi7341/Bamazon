var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root",
    database:"bamazon"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connection successful");
    displayProducts();
})

// takes all the items from the products table and prints them to the screen
var displayProducts = function(){
    connection.query("SELECT * FROM products", function(err, res){
        for(var i = 0; i < res.length; i++){
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+
            res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quanity+"\n");
        }
        customerPrompt(res);
    })
}

// allows the customer to make a selection from the produts table (res) passed in from connection.query
var customerPrompt = function(res){
    inquirer.prompt([{
        type:'input',
        name:'choice',
        message:"What is the item id you would you like to buy?  [Type X to quit]"
    }]).then(function(answer){
        var correct = false;
    
        // if the user enters the letter X, it exits the application
        if(answer.choice.toUpperCase()=="X"){
            process.exit();
        }
        for(var i = 0; i < res.length; i++){
            if(res[i].item_id==answer.choice){
                correct=true;
                var product=answer.choice;
                var id = i;
                
                // allows the customer to select how much of each item they would like to buy
                inquirer.prompt({
                    type:"input",
                    name:"quanity",
                    message:"What is the quanity you would like to buy?",
                    
                    // checks to see that it's a number
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }

                
                // checks to see if there's enough item in stock, if yes, allows transaction and updates quanity    
                }).then(function(answer){
                    if((res[id].stock_quanity-answer.quanity)>0){
                        connection.query("UPDATE products SET stock_quanity='"+(res[id].stock_quanity-answer.quanity)
                        +"' WHERE item_id='"+product+"'", function(err,res2){
                            console.log("Product Purchased!");
                            displayProducts();
                        })
                    } else {
                        console.log("Insufficient quanity!");
                        customerPrompt(res);
                    }
                })
            }
        }
        if(i==res.length && correct==false){
            console.log("Invalid Selection!");
            customerPrompt(res);
        }
    })
}