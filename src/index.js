import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CalcAge from "./js/calcAge.js";

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
    $("#earth").append(`Years lived on Earth: ${earth}`);
    $("#mercury").append(`Years lived on Mercury: ${mercury}`);
    $("#venus").append(`Years lived on Venus: ${venus}`);
    $("#mars").append(`Years lived on Mars: ${mars}`);
    $("#jupiter").append(`Years lived on Jupiter: ${jupiter}`);
});

//UI to determine what's left to live
$("#years-left-form").submit(function (event) {
  event.preventDefault();
  const expectLifeYears = parseInt($("#age").val());
  const yearsLeftOut = new CalcAge(expectLifeYears);
  const lifeExpectancy = parseInt($("#life-left").val());
  const yearsLeft = yearsLeftOut.getUserYearsLeft(
    lifeExpectancy,
    expectLifeYears
  );
  console.log(yearsLeft);
  $("#years").append(`${yearsLeft}`);
});
