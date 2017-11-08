describe('BMI_UI_metric - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('.tabs-title:contains("Metric")').click();
    $('#weight-metric').val('90');
    $('#height-metric').val('186');
    $('#calculate-metric').trigger('click');
  });

  it('displays BMI Value', function() {
    expect($('#display_metric_value').text()).toBe('Your BMI is 26.01');
  });

  it('displays BMI Message', function() {
    expect($('#display_metric_message').text()).toBe('and you are Overweight');
  });
});

describe('BMI_UI_imperial - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
    $('.tabs-title:contains("Imperial")').click();
    $('#weight-imperial').val('198.41');
    $('#height-imperial').val('73.22');
    $('#calculate-imperial').trigger('click');
  });

  it('displays BMI Value', function() {
    expect($('#display_imperial_value').text()).toBe('Your BMI is 26.02');
  });

  it('displays BMI Message', function() {
    expect($('#display_imperial_message').text()).toBe(
      'and you are Overweight'
    );
  });
});
