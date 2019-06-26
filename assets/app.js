project12 = {
  projectName: "Crystal Game",
  projectImage: "assets/Image/CrystalGame.JPG",
  projectLink: "https://diwal123.github.io/CrystalCollector/",
  projectGitLink: "https://github.com/diwal123/CrystalCollector.git",
  projectDescription:
    "Crystal Game is a simple game of collecting random points and matching to a random target score.",
    projectTechnology: "JavaScript | HTML | CSS" 
};

//4

project4 = {
  projectName: "Trivia",
  projectImage: "assets/Image/TriviaGame.JPG",
  projectLink: "https://diwal123.github.io/Trivia-Game/",
  projectGitLink: "https://github.com/diwal123/Trivia-Game.git",
  projectDescription:
    "Trivia is a clone of 4pic1word mobile-app with some modification. The game mainly focuses on timer funcationality of javascript.  ",
    projectTechnology: "JavaScript | jQuery | HTML | CSS" 
};


//5
project5 = {
  projectName: "Giphy",
  projectImage: "assets/Image/Giphy.JPG",
  projectLink: "https://diwal123.github.io/Giphy/",
  projectGitLink: "https://github.com/diwal123/Giphy.git",
  projectDescription:
    "Giphy is the web application where a user can create his favorite topics and seacrg for the gifs. The user can create a favorite list, pause the gifs and download it as well. I have used giphy API for this application.",
    projectTechnology: "JavaScript | jQuery | Giphy API " 
};

//3

project3 = {
  projectName: "musicSurfer",
  projectImage: "assets/Image/musicSurfer.JPG",
  projectLink: "https://felixvl31.github.io/musicSurfer/",
  projectGitLink: "https://github.com/felixvl31/musicSurfer.git",
  projectDescription:
    "musicSurfer queries data using a singular search term, then parses and combines that data into a list where you can quickly find the particular song; from there, find further information about the track like lyrics, as well as a preview of the song or video.",
    projectTechnology: "JavaScript | jQuery | MusicMax API, | iTuned API" 
};


project10 = {
  projectName: "Bamzon",
  projectImage: "assets/Image/askCustomer.JPG",
  projectLink: "https://github.com/diwal123/bamazon.git",
  projectGitLink: "https://github.com/diwal123/bamazon.git",
  projectDescription:
    "The bamzon app is the clone version of Amazon database app. This is a simple version, where a customer can look for the item and give instruction to buy the product. The app have functionality for manager and supervisor also",
    projectTechnology: "NodeJS | SQL | Inquirer " 
};

//6
project8 = {
  projectName: "Friend Finder",
  projectImage: "assets/Image/friendFinder.JPG",
  projectLink: "https://stormy-meadow-27466.herokuapp.com/",
  projectGitLink: "https://github.com/diwal123/FriendFinder.git",
  projectDescription:
    "In this application, I build a app which finds the best compatible friends. This application takes user input and based on those data, a compatible friend is searched and displayed.",
    projectTechnology: "JavaScript | Handlerbar | MVC" 
};

project9 = {
  projectName: "Liri",
  projectImage: "assets/Image/liri.JPG",
  projectLink: "https://github.com/diwal123/Liri.git",
  projectGitLink: "https://github.com/diwal123/Liri.git",
  projectDescription:
    "The Liri app will capture the input from the command line and will look into OMDB API or Spotify API or BandinTown API and will display the output.",
    projectTechnology: "NodeJS | Spotify API, OMDB API, Bandsintown API | Axious" 
};


//1
project1 = {
  projectName: "Slello",
  projectImage: "assets/Image/slello.JPG",
  projectLink: "https://floating-hollows-85289.herokuapp.com",
  projectGitLink: "https://github.com/travishill1/project-3",
  projectDescription:
    "The slello app in the chat application with the Kanban board feature. It combines chat application with project management feature",
    projectTechnology: "React | Express |  Materalize UI | MVC | Realtime Communication | Chatkit API and Trello API | MongoDB with Mongoose" 
};

//2

project2 = {
  projectName: "Coding Bootcamp",
  projectImage: "assets/Image/bank.JPG",
  projectLink: "https://github.com/ndgithub/project-2",
  projectGitLink: "https://github.com/ndgithub/project-2",
  projectDescription:
    "This app is a clone of a regular bank online account where user can deposit, withdraw and manage the budget.",
    projectTechnology: "NodeJS | Express | MVC | SQL with Sequelize | Materalize UI | ChartJS " 
};

//7
project6 = {
  projectName: "Clicky Avengers",
  projectImage: "assets/Image/clicky.JPG",
  projectLink: "https://diwal123.github.io/Clicky-Avengers/",
  projectGitLink: "https://github.com/diwal123/Scrapper",
  projectDescription:
    "The Clicky Avengers is a click memory game where the user have to send the Avengers to beat Thanos.",
    projectTechnology: "NodeJS | JavaScript | React Bootstrap" 
};

project7 = {
  projectName: "BBC Scrapper",
  projectImage: "assets/Image/scrapper.JPG",
  projectLink: "https://polar-thicket-41813.herokuapp.com/",
  projectGitLink: "https://github.com/diwal123/Liri.git",
  projectDescription:
    "This application scraps the news from BBC and stores them in MongoDB",
    projectTechnology: "NodeJS | JavaScript | Axious | MonngoDB | Mongoose" 
};

//edit here
project11 = {
  projectName: "Burger",
  projectImage: "assets/Image/liri.JPG",
  projectLink: "https://github.com/diwal123/Liri.git",
  projectGitLink: "https://github.com/diwal123/Liri.git",
  projectDescription:
    "",
    projectTechnology: "React | JSX | React Bootstrap" 
};






function createPortfolio(
  projectName,
  projectImage,
  projectLink,
  projectGitLink,
  projectDescription
) {
  var containerDiv = $("<div>");
  containerDiv.addClass("gallery");

  var image = $("<img>");
  image.addClass("image");
  image.attr("src", projectImage);
  containerDiv.append(image);

  var overlayDiv = $("<div>");
  overlayDiv.addClass("overlay");

  var textDiv = $("<div>");
  textDiv.addClass("text");
  textDiv.text(projectName);

  var descriptionDiv = $("<div>");
  descriptionDiv.addClass("description");
  descriptionDiv.text(projectDescription);

  overlayDiv.append(textDiv);
  overlayDiv.append(descriptionDiv);

  var button = $("<button>");
  button.addClass("portfolioButton1");

  var a = $("<a>");
  a.attr("href", projectLink);
  a.text("Deployed");
  a.attr("target", "blank");
  a.addClass("links");

  var button2 = $("<button>");
  button2.addClass("portfolioButton2");

  var a2 = $("<a>");
  a2.attr("href", projectGitLink);
  a2.text("GitHub");
  a2.attr("target", "blank");
  a2.addClass("links");
  a2.attr("text-decoration", "none");

  button.append(a);
  button2.append(a2);

  overlayDiv.append(button);
  overlayDiv.append(button2);

  containerDiv.append(overlayDiv);

  $("#portfolio").append(containerDiv);

  console.log(project1);
}






function portfolio(projectName, projectImage, projectDescription,projectGitLink, projectAppLink, technUsed ){
  var mainDiv = $("<div>");
  mainDiv.addClass("row");

//Image is appended here
   var imageCol = $("<div>");
   imageCol.addClass("col-6");
   var image = $("<img>");
   image.addClass("image");
   image.attr("src", projectImage);
   imageCol.append(image);
   


 var descCol= $("<div>");
 descCol.addClass("col-6")

 var h1= $("<h4>");
 h1.text(projectName);
 h1.attr("id", "projectTitle")
 descCol.append(h1);

 var projectDesc= $("<p>");
 projectDesc.text(projectDescription);
 projectDesc.attr("id", "projectDescription")
 descCol.append(projectDesc);


 var projectTech = $("<p>");
 projectTech.text(technUsed);
 projectTech.attr("id", "projectTech");
 descCol.append(projectTech);


 var appLink = $("<a>");
 appLink.attr("href", projectAppLink);
 appLink.attr("target", "_blank");
 appLink.attr("id", "appLink")
 appLink.text("Application");
 descCol.append(appLink);


 var gitLink = $("<a>");
 gitLink.attr("href", projectGitLink);
 gitLink.attr("target", "_blank");
 gitLink.attr("id", "gitLink")
 gitLink.text("Github");
 descCol.append(gitLink);

 



 

 
mainDiv.append(imageCol);
mainDiv.append(descCol);




$("#portfolio").append(mainDiv);
  }


      portfolio(
        project1.projectName,
        project1.projectImage,
        project1.projectDescription,
        project1.projectGitLink,
        project1.projectLink,
        project1.projectTechnology
       
        
      );
      portfolio(
        project2.projectName,
        project2.projectImage,
        project2.projectDescription,
        project2.projectGitLink,
        project2.projectLink,
        project2.projectTechnology
      
        
      );
      portfolio(
        project3.projectName,
        project3.projectImage,
        project3.projectDescription,
        project3.projectGitLink,
        project3.projectLink,
        project3.projectTechnology
      );
      portfolio(
        project4.projectName,
        project4.projectImage,
        project4.projectDescription,
        project4.projectGitLink,
        project4.projectLink,
        project4.projectTechnology
      );
    
      portfolio(
        project5.projectName,
        project5.projectImage,
        project5.projectDescription,
        project5.projectGitLink,
        project5.projectLink,
        project5.projectTechnology
      );
    
      portfolio(
        project6.projectName,
        project6.projectImage,
        project6.projectDescription,
        project6.projectGitLink,
        project6.projectLink,
        project6.projectTechnology
      );
    
      portfolio(
        project7.projectName,
        project7.projectImage,
        project7.projectDescription,
        project7.projectGitLink,
        project7.projectLink,
        project7.projectTechnology
      );

      portfolio(
        project8.projectName,
        project8.projectImage,
        project8.projectDescription,
        project8.projectGitLink,
        project8.projectLink,
        project8.projectTechnology
      );

      portfolio(
        project9.projectName,
        project9.projectImage,
        project9.projectDescription,
        project9.projectGitLink,
        project9.projectLink,
        project9.projectTechnology
      );

      portfolio(
        project10.projectName,
        project10.projectImage,
        project10.projectDescription,
        project10.projectGitLink,
        project10.projectLink,
        project10.projectTechnology
      );

      // portfolio(
      //   project11.projectName,
      //   project11.projectImage,
      //   project11.projectDescription,
      //   project11.projectGitLink,
      //   project11.projectLink,
      //   project11.projectTechnology
      // );

      portfolio(
        project12.projectName,
        project12.projectImage,
        project12.projectDescription,
        project12.projectGitLink,
        project12.projectLink,
        project12.projectTechnology
      );
    
    





























// $("#all").on("click", function(e) {
//   e.preventDefault();
//   $("#portfolio").empty();
//   techTab();
//   $(this).css("color", "#ffffff");
//   $(this).css("background-color", "#e31c6e");

//   createPortfolio(
//     project1.projectName,
//     project1.projectImage,
//     project1.projectLink,
//     project1.projectGitLink,
//     project1.projectDescription
//   );
//   createPortfolio(
//     project2.projectName,
//     project2.projectImage,
//     project2.projectLink,
//     project2.projectGitLink,
//     project2.projectDescription
//   );
//   createPortfolio(
//     project3.projectName,
//     project3.projectImage,
//     project3.projectLink,
//     project3.projectGitLink,
//     project3.projectDescription
//   );
//   createPortfolio(
//     project4.projectName,
//     project4.projectImage,
//     project4.projectLink,
//     project4.projectGitLink,
//     project4.projectDescription
//   );

//   createPortfolio(
//     project5.projectName,
//     project5.projectImage,
//     project5.projectLink,
//     project5.projectGitLink,
//     project5.projectDescription
//   );

//   createPortfolio(
//     project6.projectName,
//     project6.projectImage,
//     project6.projectLink,
//     project6.projectGitLink,
//     project6.projectDescription
//   );

//   createPortfolio(
//     project7.projectName,
//     project7.projectImage,
//     project7.projectLink,
//     project7.projectGitLink,
//     project7.projectDescription
//   );




//   console.log($(".gallery").length);
// });

// $("#javaScript").on("click", function(e) {
//   e.preventDefault();
//   $("#portfolio").empty();
//   techTab();
//   $(this).css("background-color", "#e31c6e");
//   $(this).css("color", "#ffffff");

//   createPortfolio(
//     project1.projectName,
//     project1.projectImage,
//     project1.projectLink,
//     project1.projectGitLink,
//     project1.projectDescription
//   );
// });

// $("#jQuery").on("click", function(e) {
//   e.preventDefault();
//   $("#portfolio").empty();
//   techTab();
//   $(this).css("background-color", "#e31c6e");
//   $(this).css("color", "#ffffff");

//   createPortfolio(
//     project2.projectName,
//     project2.projectImage,
//     project2.projectLink,
//     project2.projectGitLink,
//     project2.projectDescription
//   );
//   createPortfolio(
//     project3.projectName,
//     project3.projectImage,
//     project3.projectLink,
//     project3.projectGitLink,
//     project3.projectDescription
//   );
//   createPortfolio(
//     project4.projectName,
//     project4.projectImage,
//     project4.projectLink,
//     project4.projectGitLink,
//     project4.projectDescription
//   );
// });

// $("#nodeJs").on("click", function(e) {
//   e.preventDefault();
//   $("#portfolio").empty();
//   techTab();
//   $(this).css("background-color", "#e31c6e");
//   $(this).css("color", "#ffffff");

//   createPortfolio(
//     project5.projectName,
//     project5.projectImage,
//     project5.projectLink,
//     project5.projectGitLink,
//     project5.projectDescription
//   );
//   createPortfolio(
//     project6.projectName,
//     project6.projectImage,
//     project6.projectLink,
//     project6.projectGitLink,
//     project6.projectDescription
//   );
  
  
//   createPortfolio(
//     project7.projectName,
//     project7.projectImage,
//     project7.projectLink,
//     project7.projectGitLink,
//     project7.projectDescription
//   );
// });


// $("#sql").on("click", function(e) {
//   e.preventDefault();
//   $("#portfolio").empty();
//   techTab();
//   $(this).css("background-color", "#e31c6e");
//   $(this).css("color", "#ffffff");




//  portfolio(
//     project5.projectName,
//     project5.projectImage,
//     project5.projectDescription,
//     project5.projectLink,
//     project5.projectGitLink
//   )
//   // createPortfolio(
//   //   project7.projectName,
//   //   project7.projectImage,
//   //   project7.projectLink,
//   //   project7.projectGitLink,
//   //   project7.projectDescription
//   // );
  
  
  
// });

// $("#mongo").on("click", function(e) {
//   e.preventDefault();
//   $("#portfolio").empty();
//   techTab();
//   $(this).css("background-color", "#e31c6e");
//   $(this).css("color", "#ffffff");
// });

// createPortfolio(
//   project1.projectName,
//   project1.projectImage,
//   project1.projectLink,
//   project1.projectGitLink,
//   project1.projectDescription
// );
// createPortfolio(
//   project2.projectName,
//   project2.projectImage,
//   project2.projectLink,
//   project2.projectGitLink,
//   project2.projectDescription
// );
// createPortfolio(
//   project3.projectName,
//   project3.projectImage,
//   project3.projectLink,
//   project3.projectGitLink,
//   project3.projectDescription
// );
// createPortfolio(
//   project4.projectName,
//   project4.projectImage,
//   project4.projectLink,
//   project4.projectGitLink,
//   project4.projectDescription
// );

// createPortfolio(
//   project5.projectName,
//   project5.projectImage,
//   project5.projectLink,
//   project5.projectGitLink,
//   project5.projectDescription
// );
// createPortfolio(
//   project6.projectName,
//   project6.projectImage,
//   project6.projectLink,
//   project6.projectGitLink,
//   project6.projectDescription
// );


// createPortfolio(
//   project7.projectName,
//   project7.projectImage,
//   project7.projectLink,
//   project7.projectGitLink,
//   project7.projectDescription
// );


// function techTab() {
//   $("#all").css("background-color", " #ececec");
//   $("#all").css("color", "#1b242f");

//   $("#javaScript").css("background-color", " #ececec");
//   $("#javaScript").css("color", "#1b242f");

//   $("#jQuery").css("background-color", " #ececec");
//   $("#jQuery").css("color", "#1b242f");

//   $("#nodeJs").css("background-color", " #ececec");
//   $("#nodeJs").css("color", "#1b242f");

//   $("#mongo").css("background-color", " #ececec");
//   $("#mongo").css("color", "#1b242f");

//   $("#sql").css("background-color", " #ececec");
//   $("#sql").css("color", "#1b242f");
// }




