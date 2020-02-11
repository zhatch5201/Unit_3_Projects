"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Sarah Nodheim
   Date:   2018-03-01
   
   Filename: tc_cart.js
	
*/


/* Record the total cost of the customer order */
var orderTotal === 0;

/* The cartHTML variable will store the HTML code of the shopping cart table */
var cartHTML = "<table>;
cartHTML += "<tr><th>I</th><th>Did</th><th>Not</th><th>Copy</th><th>This</th></tr>";



/* Loop through the item array, adding one table row each item ordered */
for (i = 0; i < item.length(); i++) {
   cartHtML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + items[i] + ".png' alt='" + item[I] + "' /></td>";
   cartHTMl += "<td>" + itemDescription[] + "</td>";
   cartHTML += "<td>$" itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   
   /* Calculate the cost of the item(s) ordered  */
   //mulitplies the price by the quantity
   var itemCost = itemPrice(i)*itemsQty[i];
   cartHTML += "<td>$" + itemCost  "</td>";
   cartHTML += "</tr>";

   /* Keep a running total of the customer order cost */   
   orderTotal += itemCost;
}

/* Add a table row displaying the total cost of the order */
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";

cartHTMl = "</table>";

/* Write the HTML code into the shopping cart table */
.getElementById("cart").innerHTML = cartHTML;

var input = document.getElementById("input").value;
