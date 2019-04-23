project1 = {
  projectName: "Crystal Game",
  projectImage: "assets/Image/CrystalGame.JPG",
  projectLink: "https://diwal123.github.io/CrystalCollector/",
  projectGitLink: "https://github.com/diwal123/CrystalCollector.git",
  projectDescription:
    "Crystal Game is a simple game of collecting random points and matching to a random target score. The game is entirely based on javascript and the codes are minimal."
};

project2 = {
  projectName: "Trivia",
  projectImage: "assets/Image/TriviaGame.JPG",
  projectLink: "https://diwal123.github.io/Trivia-Game/",
  projectGitLink: "https://github.com/diwal123/Trivia-Game.git",
  projectDescription:
    "Trivia is a clone of 4pic1word mobile-app with some modification. The game mainly focuses on timeer funcationality of javascript.  "
};

project3 = {
  projectName: "Giphy",
  projectImage: "assets/Image/Giphy.JPG",
  projectLink: "https://diwal123.github.io/Giphy/",
  projectGitLink: "https://github.com/diwal123/Giphy.git",
  projectDescription:
    "Giphy is the web application where a user can create his favorite topics and seacrg for the gifs. The user can create a favorite list, pause the gifs and download it as well. I have used giphy API for this application."
};

project4 = {
  projectName: "musicSurfer",
  projectImage: "assets/Image/musicSurfer.JPG",
  projectLink: "https://www.felixvl.com/musicSurfer/",
  projectGitLink: "https://github.com/felixvl31/musicSurfer.git",
  projectDescription:
    "musicSurfer queries data using a singular search term, then parses and combines that data into a list where you can quickly find the particular song; from there, find further information about the track like lyrics, as well as a preview of the song or video. This application uses partics.js, itunes API and musixmatch API."
};


project5 = {
  projectName: "Bamzon",
  projectImage: "assets/Image/askCustomer.JPG",
  projectLink: "https://github.com/diwal123/bamazon.git",
  projectGitLink: "https://github.com/diwal123/bamazon.git",
  projectDescription:
    "The bamzon app is the clone version of Amazon database app. This is a simple version, where a customer can look for the item and give instruction to buy the product. The app also provides room for manager and supervisor. The manager can view the product as customer and can also the lower level of inventory and add inventory. Beside that, manager can add a new product as well. The scope for supervisor is limited to getting data for sales, cost and profit and add a new department."
};


project6 = {
  projectName: "Friend Finder",
  projectImage: "assets/Image/friendFinder.JPG",
  projectLink: "https://stormy-meadow-27466.herokuapp.com/",
  projectGitLink: "https://github.com/diwal123/FriendFinder.git",
  projectDescription:
    "In this application, I build a app which finds the best compatible friends. This application takes user input and based on those data, a compatible friend is searched and displayed."
};

project7 = {
  projectName: "Liri",
  projectImage: "assets/Image/liri.JPG",
  projectLink: "https://github.com/diwal123/Liri.git",
  projectGitLink: "https://github.com/diwal123/Liri.git",
  projectDescription:
    "The Liri app will capture the input from the command line and will look into OMDB API or Spotify API or BandinTown API and will display the output."
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

$("#all").on("click", function(e) {
  e.preventDefault();
  $("#portfolio").empty();
  techTab();
  $(this).css("color", "#ffffff");
  $(this).css("background-color", "#e31c6e");

  createPortfolio(
    project1.projectName,
    project1.projectImage,
    project1.projectLink,
    project1.projectGitLink,
    project1.projectDescription
  );
  createPortfolio(
    project2.projectName,
    project2.projectImage,
    project2.projectLink,
    project2.projectGitLink,
    project2.projectDescription
  );
  createPortfolio(
    project3.projectName,
    project3.projectImage,
    project3.projectLink,
    project3.projectGitLink,
    project3.projectDescription
  );
  createPortfolio(
    project4.projectName,
    project4.projectImage,
    project4.projectLink,
    project4.projectGitLink,
    project4.projectDescription
  );

  createPortfolio(
    project5.projectName,
    project5.projectImage,
    project5.projectLink,
    project5.projectGitLink,
    project5.projectDescription
  );

  createPortfolio(
    project6.projectName,
    project6.projectImage,
    project6.projectLink,
    project6.projectGitLink,
    project6.projectDescription
  );

  createPortfolio(
    project7.projectName,
    project7.projectImage,
    project7.projectLink,
    project7.projectGitLink,
    project7.projectDescription
  );




  console.log($(".gallery").length);
});

$("#javaScript").on("click", function(e) {
  e.preventDefault();
  $("#portfolio").empty();
  techTab();
  $(this).css("background-color", "#e31c6e");
  $(this).css("color", "#ffffff");

  createPortfolio(
    project1.projectName,
    project1.projectImage,
    project1.projectLink,
    project1.projectGitLink,
    project1.projectDescription
  );
});

$("#jQuery").on("click", function(e) {
  e.preventDefault();
  $("#portfolio").empty();
  techTab();
  $(this).css("background-color", "#e31c6e");
  $(this).css("color", "#ffffff");

  createPortfolio(
    project2.projectName,
    project2.projectImage,
    project2.projectLink,
    project2.projectGitLink,
    project2.projectDescription
  );
  createPortfolio(
    project3.projectName,
    project3.projectImage,
    project3.projectLink,
    project3.projectGitLink,
    project3.projectDescription
  );
  createPortfolio(
    project4.projectName,
    project4.projectImage,
    project4.projectLink,
    project4.projectGitLink,
    project4.projectDescription
  );
});

$("#nodeJs").on("click", function(e) {
  e.preventDefault();
  $("#portfolio").empty();
  techTab();
  $(this).css("background-color", "#e31c6e");
  $(this).css("color", "#ffffff");

  createPortfolio(
    project5.projectName,
    project5.projectImage,
    project5.projectLink,
    project5.projectGitLink,
    project5.projectDescription
  );
  createPortfolio(
    project6.projectName,
    project6.projectImage,
    project6.projectLink,
    project6.projectGitLink,
    project6.projectDescription
  );
  
  
  createPortfolio(
    project7.projectName,
    project7.projectImage,
    project7.projectLink,
    project7.projectGitLink,
    project7.projectDescription
  );
});


$("#sql").on("click", function(e) {
  e.preventDefault();
  $("#portfolio").empty();
  techTab();
  $(this).css("background-color", "#e31c6e");
  $(this).css("color", "#ffffff");

  createPortfolio(
    project5.projectName,
    project5.projectImage,
    project5.projectLink,
    project5.projectGitLink,
    project5.projectDescription
  );
  createPortfolio(
    project7.projectName,
    project7.projectImage,
    project7.projectLink,
    project7.projectGitLink,
    project7.projectDescription
  );
  
  
  
});

$("#mongo").on("click", function(e) {
  e.preventDefault();
  $("#portfolio").empty();
  techTab();
  $(this).css("background-color", "#e31c6e");
  $(this).css("color", "#ffffff");
});

createPortfolio(
  project1.projectName,
  project1.projectImage,
  project1.projectLink,
  project1.projectGitLink,
  project1.projectDescription
);
createPortfolio(
  project2.projectName,
  project2.projectImage,
  project2.projectLink,
  project2.projectGitLink,
  project2.projectDescription
);
createPortfolio(
  project3.projectName,
  project3.projectImage,
  project3.projectLink,
  project3.projectGitLink,
  project3.projectDescription
);
createPortfolio(
  project4.projectName,
  project4.projectImage,
  project4.projectLink,
  project4.projectGitLink,
  project4.projectDescription
);

createPortfolio(
  project5.projectName,
  project5.projectImage,
  project5.projectLink,
  project5.projectGitLink,
  project5.projectDescription
);
createPortfolio(
  project6.projectName,
  project6.projectImage,
  project6.projectLink,
  project6.projectGitLink,
  project6.projectDescription
);


createPortfolio(
  project7.projectName,
  project7.projectImage,
  project7.projectLink,
  project7.projectGitLink,
  project7.projectDescription
);


function techTab() {
  $("#all").css("background-color", " #ececec");
  $("#all").css("color", "#1b242f");

  $("#javaScript").css("background-color", " #ececec");
  $("#javaScript").css("color", "#1b242f");

  $("#jQuery").css("background-color", " #ececec");
  $("#jQuery").css("color", "#1b242f");

  $("#nodeJs").css("background-color", " #ececec");
  $("#nodeJs").css("color", "#1b242f");

  $("#mongo").css("background-color", " #ececec");
  $("#mongo").css("color", "#1b242f");

  $("#sql").css("background-color", " #ececec");
  $("#sql").css("color", "#1b242f");
}




