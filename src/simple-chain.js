const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  length: 0,
  links: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);
    this.length++;

    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.length || !Number.isInteger(position)) {
      this.links = [];
      this.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.links.splice(position - 1, 1);
    this.length--;

    return this;
  },
  reverseChain() {
    this.links.reverse();

    return this;
  },
  finishChain() {
    const result = this.links.join('~~');
    this.links = [];
    this.length = 0;
    return result;
  },
};

module.exports = {
  chainMaker,
};
