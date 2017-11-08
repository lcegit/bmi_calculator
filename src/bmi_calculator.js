function BMICalculator() {}

function setBMIMessage(obj) {
  //contidional function statement, it is used to compare the object's input
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = 'Underweight';
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = 'Normal';
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = 'Overweight';
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = 'Obese';
  }
}

BMICalculator.prototype.metric_bmi = function(obj) {
  //chains the function metric_bmi(obj) to BMICalculator throught the prototype property
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    //conditional statement to check for the validity of the input
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj); //run the function and return a message based on input
  }
};

BMICalculator.prototype.imperial_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight * 703 / (height * height);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};
