let score = 0;

function gießen() {
  if (score < 25) {
    score++;
    document.getElementsByClassName("score")[0].innerHTML = score;
    if (score == 5) {
      document.getElementsByClassName("total")[0].innerHTML = "10";
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "Pflanze1.png");
    }

    if (score == 10) {
      document.getElementsByClassName("total")[0].innerHTML = "15";
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "Pflanze2.png");
    }

    if (score == 15) {
      document.getElementsByClassName("total")[0].innerHTML = "20";
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "Pflanze3.png");
    }

    if (score == 20) {
      document.getElementsByClassName("total")[0].innerHTML = "25";
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "Pflanze4.png");
    }

    if (score == 25) {
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "Pflanze5.png");
    }
  } else {
    document.getElementById("out").innerHTML =
      "Glückwunsch, du hast gewonnen." + "<br>" + "Das Spiel ist vorbei.";
  }
}
