class Math{
  constructor(valor) {
    this.resultado = valor;
  };

};

const somar = (value01, value02) => {
  return new Math(value01 + value02);
};

const subtrair = (value01, value02) => {
  return new Math(value01 - value02);
};

const multiplicar = (value01, value02) => {
  return new Math(value01 * value02);
};

const dividir = (value01, value02) => {
  return new Math(value01 / value02);
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};

