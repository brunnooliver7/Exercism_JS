export const proverb = (...items) => {

  if (!items.length) return '';
  
  let qualifierExists = false;
  
  if (typeof items[items.length -1] === 'object') {
    qualifierExists = true;
  }

  let lines = [];

  for (let i = 1; i < items.length; i++) {
    lines.push(`For want of a ${items[i-1]} the ${items[i]} was lost.`);
  }

  if (qualifierExists) {
    lines.pop();
    lines.push(`And all for the want of a ${items[items.length-1].qualifier} ${items[0]}.`);
  } else {
    lines.push(`And all for the want of a ${items[0]}.`);
  }

  let text = '';
  
  for (let i = 0; i < lines.length; i++) {
    text += lines[i];
    if (lines[i+1]) text += `\n`;
  }

  return text;
};
