var countdown = new Date("May 14, 2023 08:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countdown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("days").style.color = "red";
  document.getElementById("hours").style.color = "blue";
  document.getElementById("minutes").style.color = "green";
  document.getElementById("seconds").style.color = "purple";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("title").innerHTML = "<p class='red-bg'>Zamanı geldi. Oy kullan!!</p>";
    document.getElementById("title").style.textAlign = "center";
    document.getElementById("title").style.marginTop = "200px";
    document.getElementById("left").style.display = "none";
    document.getElementById("countdown-container").style.display = "none";
  }

}, 1000);
