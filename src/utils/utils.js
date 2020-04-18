export function safeAccess(object, keyArray, defaultValue) {
  let aux = object;
  for (const key of keyArray) {
    if (typeof aux !== 'object') {
      return defaultValue;
    }
    aux = aux[key];
  }
  if (aux === undefined) {
    return defaultValue;
  }
  return aux;
}

export function elvisOperator(test, resp1, resp2){
  return (test)?resp1:resp2;
}
