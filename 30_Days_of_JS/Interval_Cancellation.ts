export {};

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type Fn = (...args: JSONValue[]) => void;

// Algorithm Analysis
//      Time Complexity:     Ο(1) Ω(1) Θ(1)
//      Space Complexity:    Ο(1) Ω(1) Θ(1)

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);
  let id;

  const runFn = () => {
    fn(...args);
  };

  const cancelFn = () => {
    clearInterval(id);
  };

  id = setInterval(runFn, t);
  return cancelFn;
}
