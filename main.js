// GO!
// TASK #1

var navMenu = document.querySelector(".nav-menu")

var button = document.querySelector("button")

var navMenuState = {
	showing: true
 }

var toggleNavMenu = function() {
  if (navMenuState.showing) {
    navMenu.style.opacity = 0
    navMenuState.showing = false
    button.textContent = "show nav"
  }
  else {
    navMenu.style.opacity = 1
    navMenuState.showing = true
    button.textContent = "hide nav"
  }
}

button.addEventListener("click", toggleNavMenu)

// TASK #2

var inputBar = document.querySelector("#add-guest input")

var guestListUl = document.querySelector(".guest-list")

var addItem = function(keyEvent) {
  var inputBar = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputBar.value
      var newLi = document.createElement('li')
      newLi.textContent = userInput
      guestListUl.appendChild(newLi)
      newLi.classList.add("guest")
      inputBar.value = ''
  	} 
  }
inputBar.addEventListener('keydown',addItem)

// TASK 3: BONUS
