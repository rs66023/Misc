"use strict";

var wrapper = document.querySelector(".cards-wrapper");
var dots = document.querySelectorAll(".dot");
var activeDotNum = 0;
dots.forEach(function (dot, idx) {
  dot.setAttribute("data-num", idx);
  dot.addEventListener("click", function (e) {
    var clickedDotNum = e.target.dataset.num;

    if (clickedDotNum == activeDotNum) {
      return;
    } else {
      var displayArea = wrapper.parentElement.clientWidth; // let pixels = -wrapper.clientWidth * clickedDotNum;

      var pixels = -displayArea * clickedDotNum;
      wrapper.style.transform = "translateX(" + pixels + "px)"; //       remove the active class from the active dot

      dots[activeDotNum].classList.remove("active"); //       add the active class to the clicked dot

      dots[clickedDotNum].classList.add("active"); //       now set the active dot number to the clicked dot;

      activeDotNum = clickedDotNum;
    }
  });
});