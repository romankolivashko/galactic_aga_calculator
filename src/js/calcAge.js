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
  
  getEartAge() {

  }

}

