describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
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
