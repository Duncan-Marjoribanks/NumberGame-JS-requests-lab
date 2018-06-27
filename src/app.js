const NumberFormView = require('./views/number_form_view');
const DisplayNumberView = require('./views/display_number_view');
const Numbers = require('./models/numbers');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const factContainer = document.querySelector('#number-fact');
  const displayNumberView = new DisplayNumberView(factContainer);
  displayNumberView.bindEvents();


});
