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

var inputEl = document.querySelector("#add-guest-bonus input")

var guestList = document.querySelector("#add-guest-bonus ul")

var removeGuest = function() {
	this.parentNode.parentNode.removeChild(this.parentNode)
} 

var addItem = function(keyEvent) {
  var inputEl = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi = document.createElement('li')
      	newLi.style.display = "hidden"
      var redButton = document.createElement("button")
			redButton.innerHTML = "X"
			redButton.addEventListener("click", removeGuest)
      newLi.textContent = userInput
      guestList.appendChild(newLi)
	  newLi.classList.add("guest")
	  newLi.appendChild(redButton)
      inputEl.value = ''
  	} 
  }
  
inputEl.addEventListener('keydown',addItem)






