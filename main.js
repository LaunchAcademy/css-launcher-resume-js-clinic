// Yell real loud
let yellButton = document.getElementById("yell");
yellButton.addEventListener("click", () => {
  yell();
});

let yell = () => {
  document.querySelector(".page-header").textContent = "MY NAME IS GEORGE!!!!!";
};

// Make me fierce
let fierceButton = document.getElementById("fierceify");
fierceButton.addEventListener("click", () => {
  fierceify();
});

let fierceify = () => {
  document
    .getElementsByTagName("img")[0]
    .setAttribute(
      "src",
      "https://pbs.twimg.com/profile_images/1340495732885737479/HB9D5kGs_400x400.jpg"
    );
  // document.querySelector(".headshot").src = "https://pbs.twimg.com/profile_images/1340495732885737479/HB9D5kGs_400x400.jpg"
};

// Reveal an Easter egg
let easterEggButton = document.getElementById("easter-egg");
easterEggButton.addEventListener("click", () => {
  eggify();
});

let eggify = () => {
  let easterEggImage = document.createElement("img");
  easterEggImage.setAttribute(
    "src",
    "https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/t/800/two-toned-easter-eggs.jpg"
  );
  easterEggImage.style.width = "200px";
  // easterEggImage.style.border = "2px solid red";
  let parent = document.getElementsByTagName("body")[0];
  // let parent = document.querySelector("body")
  parent.appendChild(easterEggImage);
};

// Select the first paragraph in the document
let selectMeButton = document.getElementById("select-me");
selectMeButton.addEventListener("click", () => {
  selectFirstParagraph();
});

let selectFirstParagraph = () => {
  document.querySelector("p").classList += "selected";
};

// Deselect the first paragraph in the document
let deselectMeButton = document.getElementById("deselect-me");
deselectMeButton.addEventListener("click", () => {
  deselectFirstParagraph();
});

let deselectFirstParagraph = () => {
  document.querySelector("p").classList.remove("selected");
  // document.querySelector("p").className = ""
};

// Toggle the visibility of the image of your face
let toggleFaceButton = document.getElementById("toggle-my-face");
toggleFaceButton.addEventListener("click", () => {
  toggleMyFace();
});

let toggleMyFace = () => {
  let headshot = document.querySelector(".headshot");
  // headshot.classList.toggle("hidden")
  if (headshot.classList.contains("hidden")) {
    headshot.classList.remove("hidden");
  } else {
    headshot.classList.add("hidden");
  }
};

// Reload page when reload button is clicked -- no need to modify anything here!
let reloadButton = document.getElementById("reload");

reloadButton.addEventListener("click", () => {
  location.reload();
});
