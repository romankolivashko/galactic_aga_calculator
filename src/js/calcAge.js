//import { arguments } from "file-loader";

export default class calcAge {
  constructor(dob) {
    this.dob = dob;
  }

  getYearFromDob(dob){
    let inputYear = 0;
    let date = new Date(dob);
    return inputYear = date.getFullYear();
  }
  
  getEarthAge(inputYear) {
    let ageOnEarth;
    let year = new Date();
    let currYear = year.getFullYear();
    return ageOnEarth = currYear - inputYear;
  }

  getMercuryAge(ageOnEarth) {
    let ageOnMercury = 0;
    ageOnMercury = ageOnEarth / 0.24;
    return parseInt(ageOnMercury).toFixed();
  }

  getVenusAge(ageOnEarth) {
    let ageOnVenus = 0;
    ageOnVenus = ageOnEarth / 0.62;
    return parseInt(ageOnVenus).toFixed();
  }

  getMarsAge(ageOnEarth) {
    let ageOnMars = 0;
    ageOnMars = ageOnEarth / 1.88;
    return parseInt(ageOnMars).toFixed();
  }

  getJupiterAge(ageOnEarth) {
    let ageOnJupiter = 0;
    ageOnJupiter = ageOnEarth / 11.86;
    return parseInt(ageOnJupiter).toFixed();
  }

}

