		var Persons = [
                       {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake","<br>", "Ed Sheeran","<br>", "Emma Watson"],
			age: 25,
   			myPhoto: "CR5/boy1.800x1000.jpg",	
			likes: 0    
			},
			
             {
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Matt Damon","<br>","Ed Sheeran","<br>", "Tom Cruise"],
			age: 25,
   			myPhoto: "CR5/girl1.800x1000.jpg",	
			likes: 0 
			},

            {
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Natalie Portman","<br>", "Tom hanks","<br>","Emma stone"],
			age: 25,
   			myPhoto: "CR5/girl2.800x1000.jpg",	
			likes: 0
			},

            {
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Reese Witherapoon ","<br>", "Tom Hanks","<br>", "Beyonce"],
			age: 25,
   			myPhoto: "CR5/boy2.800x1000.jpg",	
			likes: 0    
			},
			
];

var i = 0;
for (i = 0; i < Persons.length; i++){
document.getElementById("cont").innerHTML += "<div>" + " <img src = \" "+Persons[i].myPhoto +" \" > " +"<p>"+" Name: "+"<b>"+ Persons[i].name +"</b>"+"<br>"+"<br>"+" surname: "+"<b>"+ Persons[i].surname +'</b>' + "<br>" +"<br>"+" Age: "+"<b>"+ Persons[i].age +"</b>"+ "</p>" + " <input class=\""+i+"-"+i+"\" type=\"submit\" value=\"Like\">" +"<h1 class = \" "+ i +"\" class =\"heading\">"+ Persons[i].likes +"</h1>"+ "<img class=\"imgg\" src=\"CR5/like.png\">" + "</div>" ;
// only one time 
		$(document).ready(function(){
		var n = 0;
	 	$(".0-0").click(function(){
	 	var m = n + 1 ;
	 
		$(".0").text(m);
})		
 		$(".1-1").click(function(){
 		var n = 0;
 		n++ 
 		$(".1").text(n);
}) 
 		//as much as the user click
 		$(".2-2").click(function(){
 		//var n = 0;
 		n++ 
 		$(".2").text(n);
})
		$(".3-3").click(function(){
		var n = 0;
		n++
 		$(".3").text(n);
})

});};


