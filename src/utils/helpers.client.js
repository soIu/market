import React from 'react';

const utils = {};

utils.useCache = function useCache(originalValue, modifiers) {
  //Cache a value in a component
  const [value, setValue] = React.useState(originalValue);
  if (!modifiers) return value;
  React.useEffect(() => {
    if (typeof originalValue === 'function') setValue((previousValue) => {
      if (typeof previousValue === 'string' && previousValue.startsWith('blob:http')) URL.revokeObjectURL(previousValue);
      return originalValue();
    });
    return () => {
      if (typeof value === 'string' && value.startsWith('blob:http')) URL.revokeObjectURL(value);
    };
  }, modifiers);
  return value;
}

export default utils;
