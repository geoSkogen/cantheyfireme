'use strict'

window.addEventListener("load", initModals)

function initModals() {
  var app = document.getElementById("app")
  var test1 = document.getElementById("one")

  var butts = document.getElementsByClassName("modalButton")
  var modals = document.getElementsByClassName("modal")
  var xs = document.getElementsByClassName("x")
  var closes = document.getElementsByClassName("close")

  var hides = document.getElementsByClassName("closeHide")

  var showlist = document.getElementsByClassName("showMore")[0]
  var hiddenlist = document.getElementsByClassName("hiddenList")[0]

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
