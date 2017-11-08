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

/*
BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height_val = $('#height-imperial').val();
  var regex_op = /^(\d{1,2})[\']?((\d)|([0-1][0-2]))?[\"]?$/g.exec(height_val);
  //very rare chance for someone to be of two digit feet height.
  //but i put it there, just in case.
  var feet = regex_op[1];
  var inches = regex_op[2];
  // converting to inches
  var height = (parseInt(feet) || 0) * 12 + (parseInt(inches) || 0);
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj); //run the function and return a message based on input
  }
};
*/

BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
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
