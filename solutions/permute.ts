// Heap's algorithm!
function permute(nums: number[]): number[][] {
  const answer: number[][] = [];

  const swapElements = (arr: number[], a: number, b: number) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  const generate = (n: number, currElements: number[]) => {
    if (n === 1) {
      answer.push([...currElements])
      return;    
    }

    generate(n - 1, currElements)

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapElements(currElements, i, n - 1)
      } else {
        swapElements(currElements, 0, n - 1)
      }

      generate(n - 1, currElements)
    }
  }

  generate(nums.length, [...nums]);
  return answer;
};