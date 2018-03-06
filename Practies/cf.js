function person(fname, lname, birthYear, year, city, age) {
  this.fname=fname;
  this.lname=lname;
  this.birthYear=birthYear;
  this.year= year;
  this.city=city;
  this.age=age;
  this.currentage = function() {
      this.age = this.year - this.birthYear;
  }  
}

var kp = new person("kishan", "patel", 1992, 2017, "ahmedabad");
kp.currentage();

console.log(kp.fname, kp.lname, kp.birthYear, kp.city, kp.age);





/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:5
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:5
*/