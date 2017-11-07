function Person(attr) { //"initialize" Person
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function() { //instance of a person object, run calculate_bmi to test method
  calculator = new BMICalculator(); // initialize method and store it in a variable
  if (metric_bmi == true) {
    calculator.metric_bmi(this); //call variable and run metric_bmi on the object itself / "self"
  }
  else (metric_bmi == false) {
    calculator.imperial_bmi(this); //call variable and run imperial_bmi on the object itself / "self"
  }
};
