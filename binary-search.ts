export function find(arr: number[], elem: number): number {
  const err = new Error('Value not in array');
  if (arr.length === 0) throw err;
  let start: number = 0;
  let end: number = arr.length - 1;
  let key: number = Math.floor(end / 2);

  while (start !== end) {
    if (arr[key] === elem) return key;
    if (elem > arr[key]) {
      start = key === arr.length - 1 ? key : key + 1;
      key = Math.floor((end - start) / 2) + start;
    }
    if (elem < arr[key]) {
      end = key === 0 ? key : key - 1;
      key = Math.floor((end - start) / 2) + start;
    }
    
  }
  if (arr[start] === elem) return start;
  else throw err;
}