const PubSub = require('../helpers/pub_sub.js');

const DisplayNumberView = function (container) {
  this.container = container;
};

DisplayNumberView.prototype.bindEvents = function () {
  PubSub.subscribe('numbers:number-fact-data', (event) => {
    this.display(event.detail);
  });
};

DisplayNumberView.prototype.display = function (fact) {
  const p = document.createElement('p');
  p.textContent = fact;
  this.container.appendChild(p);

};

module.exports = DisplayNumberView;
