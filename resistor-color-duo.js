export const decodedValue = (bands) => {
  return +bands.map(band => COLORS.indexOf(band)).join('').substring(0,2);
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
