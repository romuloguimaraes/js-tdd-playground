const { describe, it } = require('mocha');
const { expect } = require('chai');
const calc = require('../src/main');

describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('should exists the Calculator lib', () => {
      expect(calc).to.exist;
    });

    context('should have the arithmetic functions', () => {
      it('should have the add function', () => {
        expect(calc.add).to.exist;
        expect(calc.add).to.be.a('function');
      });

      it('should have the sub function', () => {
        expect(calc.sub).to.exist;
        expect(calc.sub).to.be.a('function');
      });

      it('should have the mult function', () => {
        expect(calc.mult).to.exist;
        expect(calc.mult).to.be.a('function');
      });

      it('should have the div function', () => {
        expect(calc.div).to.exist;
        expect(calc.div).to.be.a('function');
      });
    });
  });

  describe('Add', () => {
    it('should return 6 when `add(3,3)`', () => {
      expect(calc.add(3, 3)).to.be.equal(6);
    });
  });

  describe('Sub', () => {
    it('should return 3 when `sub(6,3)`', () => {
      expect(calc.sub(6, 3)).to.be.equal(3);
    });
  });

  describe('Mult', () => {
    it('should return 9 when `mult(3,3)`', () => {
      expect(calc.mult(3, 3)).to.be.equal(9);
    });
  });

  describe('Div', () => {
    it('should return 3 when `div(9,3)`', () => {
      expect(calc.div(9, 3)).to.be.equal(3);
    });

    it('should return `Não é possível divisão por 0` when `div(3, 0)`', () => {
      expect(calc.div(3, 0)).to.be.a('string');
    });
  });
});
