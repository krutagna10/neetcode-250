function fibonacci(n: number) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
}

function fib(n: number, memo: Record<string, number> = {}): number {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n <= 1) {
      return n;
  }

  const result = fib(n - 1) + fib(n - 2);
  memo[n] = result;
  return result;
};