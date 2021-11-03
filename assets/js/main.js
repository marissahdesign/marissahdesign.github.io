


$(document).ready(function () {
    console.log ("Ready!");



    const container = document.querySelector(".typetext");
    const slider = document.querySelectorAll(".slider2");
    const size = document.querySelectorAll(".slider1");



    slider.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      container.style.setProperty(`--${this.id}`, this.value);
      console.log("hello");
    };
  });

  size.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      container.style.setProperty(`--${this.id}`, this.value + "em");
      console.log("hello");
    };
  });




});