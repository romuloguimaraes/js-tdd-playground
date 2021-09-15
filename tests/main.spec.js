const { describe, it, beforeEach } = require('mocha');

const { expect } = require('chai');

describe('Teste Main', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3];
  });

  // Testa tipos ou se existe é Smoke Test
  it('should be an array', () => {
    expect(array).to.be.an('array');
  });

  describe('Method A', () => {
    context('Case 1', () => {
      it('should have a length of 4 after push new value to the array', () => {
        array.push(4);
        expect(array).to.have.lengthOf(4);
      });
    });

    context('Case 2', () => {
      it('should have a length of 2 after pop a value from the array', () => {
        array.pop();
        expect(array).to.have.lengthOf(2);
      });

      it('should have a new array with length of 5 after concat new values with the old array', () => {
        const newArray = array.concat([13, 91]);
        expect(newArray).to.have.lengthOf(5);
      });
    });
  });

  describe('Method B', () => {
    context('Case 3', () => {
      it('should remove the value 3 from the array', () => {
        array.pop();
        expect(array).to.not.include(3);
      });
    });
  });
});
