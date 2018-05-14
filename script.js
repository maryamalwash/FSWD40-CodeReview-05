var Persons = [{
        name: 'John',
        surname: 'Doe',
        favoritePerformers: ["Justin Timberlake", "<br>", "Ed Sheeran", "<br>", "Emma Watson"],
        age: 25,
        myPhoto: "CR5/boy1.800x1000.jpg",
        likes: 5
    },

    {
        name: 'Maxina',
        surname: 'Musterman',
        favoritePerformers: ["Matt Damon", "<br>", "Ed Sheeran", "<br>", "Tom Cruise"],
        age: 25,
        myPhoto: "CR5/girl1.800x1000.jpg",
        likes: 0
    },

    {
        name: 'Jane',
        surname: 'Doe',
        favoritePerformers: ["Natalie Portman", "<br>", "Tom hanks", "<br>", "Emma stone"],
        age: 25,
        myPhoto: "CR5/girl2.800x1000.jpg",
        likes: 0
    },

    {
        name: 'Max',
        surname: 'Musterman',
        favoritePerformers: ["Reese Witherapoon ", "<br>", "Tom Hanks", "<br>", "Beyonce"],
        age: 25,
        myPhoto: "CR5/boy2.800x1000.jpg",
        likes: 0
    },

];

for (var i = 0; i < Persons.length; i++) {
    document.getElementById("cont").innerHTML +=
        "<div>" + " <img src = \" " + Persons[i].myPhoto + " \" > " +
        "<p>" + " Name: " + "<b>" + Persons[i].name + "</b>" + "<br>" + "<br>" +
        " surname: " + "<b>" + Persons[i].surname + '</b>' + "<br>" + "<br>" +
        " Age: " + "<b>" + Persons[i].age + "</b>" + "</p>" +
        " <input class=\"" + i + "-" + i + "\" type=\"submit\" value=\"Like\">" +
        "<h1 class = \" " + i + "\" class =\"heading\">" + Persons[i].likes + "</h1>" +
        "<img class=\"imgg\" src=\"CR5/like.png\">" +
        "</div>";
};


$(document).ready(function() {

    //var n0 = 0;

    $(".0-0").click(function() {
        
        Persons[0].likes = Persons[0].likes +1;

        $(".0").text(Persons[0].likes);
    });


    $(".1-1").click(function() {
        
        Persons[1].likes = Persons[1].likes +1;

        $(".1").text(Persons[1].likes);
    });


    $(".2-2").click(function() {
        
        Persons[2].likes = Persons[2].likes +1;

        $(".2").text(Persons[2].likes);
    });


    $(".3-3").click(function() {
        
        Persons[3].likes = Persons[3].likes +1;

        $(".3").text(Persons[3].likes);
    });


    
});