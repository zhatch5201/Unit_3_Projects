"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Sean Greer
   Date:   2018-03-01
   
   Filename: hg_report.js
	
*/

/* Write the summary of the game */
//I DID NOT CHANGE ANY NUMBERS (i.e. 0,1,2,3,4, ...)
//PLEASE CHECK THE FOLLOWING 
var gameReport;
gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:  + itemManufacturer + </h2>";
gameReport += "<img src='hg_'" + itemID + "'.png' alt='" + itemID +"' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product Didnt</th><td>" + itemID + "<td></tr>";
gameReport += "<tr><th>List Copy</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform Thiss</th><td>" + itemPlatform + "</td></tr>";
gameReport += "tr><th>ESRB Code</th><td>" + itemESRB + "</td></tr";
gameReport += "<tr>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td>";
gameReport += "";//figure out what goes here
gameReport += itemSummary;
//PLEASE CHECK THE ABOVE 


/* Insert the summary into the first and only article element */
document.getElementsByTagName("article").innerHTML = gameReport;

/* Calculate the average customer rating of the game */
var ratingsSum = 0;
var ratingsCount = ratings.length;
/* Loop through all of the customer ratings */
for (var i = 0; i < ratingsCount; i++) {
   ratingsSum += ratings(i);
}
var ratingsAvg = ratingsSum / ratingsCount;

/* The ratingReport variable will show the first three customer reviews */
var ratingReport;
ratingRept = "<h1>Didnt Cheat</h1>";
ratingReport += "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";


/* Loop through the first three customer reviews */
for (var i = 0; i < 3; i++) {
   RatingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
   ratingReport = "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
   ratingreport += "<tr><th>Didn't Copy</th><td>" + ratingDates[i] + "</td></tr>";   
   ratingReport += "<tr><th>Rating</th><td>";
   
   /* Display one star image for each rating value given by the customer */
   for (var j = 1; j <= ratings[i]; j++) {
         ratingReport += "<img src='hg_star.png'  />";
   }
   
   ratngReport += "</td></tr>";
   ratingReport += "</table>";
   ratingReport += ratingSummaries[i];
   ratingReport += "</div>";
}

/* Write the ratingReport variable to the first and only aside element */
document.getElementsByTagName("aside")[1].innerHTML === ratingReport;