// Yell real loud
const yellButton = document.getElementById('yell')
yellButton.addEventListener('click', () => {
  yell()
})

const yell = () => {
  // your code here
  // replace the text in the header containing your name with the same text, but in ALL CAPS.
  // access the h1 element
  const header = document.getElementsByTagName("h1")[0]
  // change the text content to JANE LAUNCHER
  header.textContent = "JANE LAUNCHER"
}

// Make me fierce
const fierceButton = document.getElementById('fierceify')
fierceButton.addEventListener('click', () => {
  fierceify()
})

const fierceify = () => {
  // your code here
  // access the image
  const image = document.getElementById("my-picture")
  // change it to an image of our favorite superhero
  image.src = "https://upload.wikimedia.org/wikipedia/en/9/93/Wonder_Woman.jpg"
}

// Reveal an Easter egg
const easterEggButton = document.getElementById('easter-egg')
easterEggButton.addEventListener('click', () => {
  eggify()
})

const eggify = () => {
  // your code here
  // Create an image tag with an image of an easter egg
  const newImage = document.createElement("img")
  newImage.src = "https://content.presentermedia.com/files/clipart/00026000/26395/single_easter_egg_800_wht.jpg"

  // As the last element in my body
  const body = document.getElementsByTagName("body")[0]
  body.appendChild(newImage)
}

// Select the first paragraph in the document
const selectMeButton = document.getElementById('select-me')
selectMeButton.addEventListener('click', () => {
  selectFirstParagraph()
})

const selectFirstParagraph = () => {
  // your code here
}

// Deselect the first paragraph in the document
const deselectMeButton = document.getElementById('deselect-me')
deselectMeButton.addEventListener('click', () => {
  deselectFirstParagraph()
})

const deselectFirstParagraph = () => {
  // your code here
}

// Toggle the visibility of the image of your face
const toggleFaceButton = document.getElementById('toggle-my-face')
toggleFaceButton.addEventListener('click', () => {
  toggleMyFace()
})

const toggleMyFace = () => {
  // your code here
}

// Reload page when reload button is clicked -- no need to modify anything here!
const reloadButton = document.getElementById('reload')

reloadButton.addEventListener('click', () => {
  location.reload()
})
