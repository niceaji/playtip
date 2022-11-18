function chunk(arr, size) {
  const c = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    c.push(chunk);
  }
  return c;
}

export { chunk };
