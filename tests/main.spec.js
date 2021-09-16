import { describe, it } from 'mocha';
import { expect } from 'chai';
import { add, sub, mult, div } from '../src/main';

describe('Calculator', () => {
  describe('Smoke tests', () => {
    context('should have the arithmetic functions', () => {
      it('should have the add function', () => {
        expect(add).to.exist;
        expect(add).to.be.a('function');
      });

      it('should have the sub function', () => {
        expect(sub).to.exist;
        expect(sub).to.be.a('function');
      });

      it('should have the mult function', () => {
        expect(mult).to.exist;
        expect(mult).to.be.a('function');
      });

      it('should have the div function', () => {
        expect(div).to.exist;
        expect(div).to.be.a('function');
      });
    });
  });

  describe('Add', () => {
    it('should return 6 when `add(3,3)`', () => {
      expect(add(3, 3)).to.be.equal(6);
    });
  });

  describe('Sub', () => {
    it('should return 3 when `sub(6,3)`', () => {
      expect(sub(6, 3)).to.be.equal(3);
    });
  });

  describe('Mult', () => {
    it('should return 9 when `mult(3,3)`', () => {
      expect(mult(3, 3)).to.be.equal(9);
    });
  });

  describe('Div', () => {
    it('should return 3 when `div(9,3)`', () => {
      expect(div(9, 3)).to.be.equal(3);
    });

    it('should return `Não é possível divisão por 0` when `div(3, 0)`', () => {
      expect(div(3, 0)).to.be.a('string');
    });
  });
});
