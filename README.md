# Bamazon

Basic Amazon like shopping cart

## Description

This app is a basic Amazon like shopping cart that list products for sale, takes the users order, and updates the quanity. 

## Getting Started

### Dependencies

* node.js, npm install inquirer, npm install mysql


### Executing program
![Alt Text](/execute.gif)

* How to run the program

1. The above gif shows how the program works. The first step is to execute the command: node bamazonCustomer.js
1. A list of all the items in the table with a description, department, price, and quanity appear.
1. The prompt then asks, "What is the item_id you would like to buy?"
1. The user responds by entering the item_id number of the item they would like to purchase.
1. The prompt then asks, "What is the quanity you would like to buy?"
1. The user responds by entering the quanity of units for purchase.
1. A response is returned that says, "Product Purchased!"
1. The stock_quanity is then reduced by the amount of the items purchased.

1. The prompt then asks, "What is the item_id you would like to buy?"
1. The user responds by entering the item_id number of the item they would like to purchase.
1. The prompt then asks, "What is the quanity you would like to buy?"
1. The user responds by entering the quanity of units for purchase.
1. If the stock_quanity is less than the amount requested, then the response returned will be "Insufficient quanity"

1. The prompt then asks, "What is the item_id you would like to buy?"
1. The user responds by entering the item_id number of the item they would like to purchase.
1. If the item_id is not an item_id in the table, then the response will be "Invalid Selection"

1. The prompt then asks, "What is the item_id you would like to buy?"
1. An option to exit the the program appears whenever this question is asked.
1. If the user types the letter X, then the app terminates

## Authors

Contributors names and contact info

Lehi Granados  
[@lehiGranados](https://twitter.com/lehigranados)