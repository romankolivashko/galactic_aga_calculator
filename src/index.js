import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CalcAge from "./js/calcAge.js";
//import calcAge from "./js/calcAge.js";

//UI for planetary age calculation
$("#calculate-age-form").submit(function (event) {
  event.preventDefault();
  const inputYear = parseInt($("#age").val());
  const ageOut = new CalcAge(inputYear);
  const earth = inputYear;
  const mercury = ageOut.getMercuryAge(inputYear);
  const venus = ageOut.getVenusAge(inputYear);
  const mars = ageOut.getMarsAge(inputYear);
  const jupiter = ageOut.getJupiterAge(inputYear);
  $("#earth").html(`Years lived on Earth: ${earth}`);
  $("#mercury").html(`Years lived on Mercury: ${mercury}`);
  $("#venus").html(`Years lived on Venus: ${venus}`);
  $("#mars").html(`Years lived on Mars: ${mars}`);
  $("#jupiter").html(`Years lived on Jupiter: ${jupiter}`);
});

//UI to determine what's left to live
$("#years-left-form").submit(function (event) {
  event.preventDefault();
  const ageExpect = parseInt($("select#inputGroupSelect04").val());
  const expectLifeYears = parseInt($("#age").val());
  const yearsLeftOut = new CalcAge(expectLifeYears);
  const yearsLeft = yearsLeftOut.getUserYearsLeft(ageExpect, expectLifeYears);
  $("#years").html(`${yearsLeft}`);
});
