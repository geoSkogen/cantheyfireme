'use strict'

window.addEventListener("load", initModals)

function initModals() {
  var app = document.getElementById("app")
  var test1 = document.getElementById("one")
  var test2 = document.getElementById("two")

  var butts = document.getElementsByClassName("modalButton")
  var modals = document.getElementsByClassName("modal")
  var xs = document.getElementsByClassName("x")
  var closes = document.getElementsByClassName("close")

  var hides = document.getElementsByClassName("closeHide")

  var showlist = document.getElementsByClassName("showMore")[0]
  var hiddenlist = document.getElementsByClassName("hiddenList")[0]

  var toggleSwitches = document.getElementsByClassName("toggle")
  var toggleObjects = []
  var toggleNest = toggleSwitches[0].parentElement.parentElement
  var toggleIcons = document.getElementsByClassName("toggleIcon")
  var toggleHides = document.getElementsByClassName("toggleHide")


  for (let i = 0; i < toggleHides.length; i++) {
  //  test2.innerHTML += toggleHides[i].parentElement.parentElement.className + " "
  }

 //an attempt to make the script a little more data-agnostic
  for (let i = 0; i < toggleNest.childNodes.length; i++) {
    if (toggleNest.childNodes[i].className &&
      toggleNest.childNodes[i].className.indexOf("toggle") != -1) {
      toggleObjects.push(toggleNest.childNodes[i])
      //test1.innerHTML += toggleNest.childNodes[i].className + " "
    }
  }

  for (let i = 0; i < toggleSwitches.length; i++) {
    assignToggle(i)
  }

  function assignToggle(index) {
    toggleSwitches[index].addEventListener("click", function () {
      var thisStyle = window.getComputedStyle(toggleObjects[index])
      var thisDisp = thisStyle.getPropertyValue('display')
     if (thisDisp == "none") {
       toggleObjects[index].style.display = "block"
       toggleIcons[index].innerHTML = "&ndash;"
     } else {
       toggleObjects[index].style.display = "none"
       toggleIcons[index].innerHTML = "+"
     }
    })
  }

  showlist.addEventListener("click", function () {
    hiddenlist.style.display = "block";
    showlist.style.display = "none";
  })

  hides[0].addEventListener("click", hideList)
  hides[1].addEventListener("click", hideList)

  for (let i = 0; i < butts.length; i++) {
    assignOpenModal(i)
    assignCloseModal(i)
  }

  function hideList() {
    hiddenlist.style.display = "none";
    showlist.style.display = "inline";
  }

  function assignOpenModal(index) {
   butts[index].addEventListener("click", function () {
     var thisStyle = window.getComputedStyle(modals[index])
     var thisDisp = thisStyle.getPropertyValue('display')
    if (thisDisp == "none") {
      modals[index].style.display = "block"
      }
    })
  }

  function assignCloseModal(index) {
    xs[index].addEventListener("click", function () { closeModal(index) })
    closes[index].addEventListener("click", function () { closeModal(index) })
  }

  function closeModal(index) {
    var thisStyle = window.getComputedStyle(modals[index])
    var thisDisp = thisStyle.getPropertyValue('display')
   if (thisDisp != "none") {
     modals[index].style.display = "none"
     }
  }

}
