function merge(collection1: number[], collection2: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let y = 0;

  while (i < collection1.length && y < collection2.length) {
    if (collection1[i] < collection2[y]) {
      result.push(collection1[i]);
      i++;
    } else {
      result.push(collection2[y]);
      y++;
    }
  }

  while (i < collection1.length) {
    result.push(collection1[i]);
    i++;
  }

  while (y < collection2.length) {
    result.push(collection2[y]);
    y++;
  }

  return result;
}

export default merge;
