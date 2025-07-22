function countAllItems(...arrays: any[]) {
  return arrays.reduce((total, arr) => total + arr.length, 0);
}

export { countAllItems };
