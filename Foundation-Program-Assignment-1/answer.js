//questions1 answer 
function describeValue(value) {
  const type = typeof value;

  if (value) {
    return `${type} | truthy`;
  } else {
    return `${type} | falsy`;
  }
}
