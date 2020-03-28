import data from './data';

const handleInput = (input) => {
  const pasta = data[input.toLowerCase()];

  return pasta || data.default;
};

export default handleInput;
