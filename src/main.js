module.exports = {
  add: (n1, n2) => n1 + n2,
  sub: (n1, n2) => n1 - n2,
  mult: (n1, n2) => n1 * n2,
  div: (n1, n2) => ((n2 === 0) ? 'Não é possível divisão por 0' : n1 / n2),
};
