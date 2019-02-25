project1 = {
  projectName: "Crystal Game",
  projectImage: "assets/Image/CrystalGame.JPG",
  projectLink: "https://diwal123.github.io/Crystal--Games/",
  projectGitLink: "https://github.com/diwal123/Crystal--Games",
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
  projectLink: "https://github.com/felixvl31/musicSurfer.git",
  projectGitLink: "https://github.com/felixvl31/musicSurfer.git",
  projectDescription:
    "musicSurfer queries data using a singular search term, then parses and combines that data into a list where you can quickly find the particular song; from there, find further information about the track like lyrics, as well as a preview of the song or video. This application uses partics.js, itunes API and musixmatch API."
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

function techTab() {
  $("#all").css("background-color", " #ececec");
  $("#all").css("color", "#1b242f");

  $("#javaScript").css("background-color", " #ececec");
  $("#javaScript").css("color", "#1b242f");

  $("#jQuery").css("background-color", " #ececec");
  $("#jQuery").css("color", "#1b242f");

  $("#nodeJs").css("background-color", " #ececec");
  $("#nodeJs").css("color", "#1b242f");
}
