const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Numbers = function () {
  this.number = number;

}

Numbers.prototype.bindEvent() = function () {

PubSub.subscribe('NumberFormView:submit', (event) => {
  console.log(event);
  });

Numbers.prototype.getData = function () {
  const request = new Request('http://numbersapi.com/1?json');

  request.get((numberFactData) => {
    this.number = numberFactData.text;
    console.log(this.number);
    PubSub.publish('numbers:number-fact-data', this.number);
  })

};
};

module.exports = Numbers;
