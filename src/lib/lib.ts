export function* count({ length }: { length: number }) {
  let n = 0;
  for (let i = 0; i < length; ++i) {
    yield n++;
  }
}
export function* countReverse({ length }: { length: number }) {
  let n = length - 1;
  for (let i = 0; i < length; ++i) {
    yield n--;
  }
}
export function* range(from: number, to: number, step = 1) {
  if (from <= to) {
    let n = from;
    for (let i = from; i <= to; i += step) {
      yield n;
      n += step;
    }
  } else {
    let n = from;
    for (let i = to; i <= from; i += step) {
      yield n;
      n -= step;
    }
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('count', () => {
    expect([...count({ length: 0 })]).toStrictEqual([]);
    expect([...count({ length: 1 })]).toStrictEqual([0]);
    expect([...count({ length: 2 })]).toStrictEqual([0, 1]);
    expect([...count({ length: 3 })]).toStrictEqual([0, 1, 2]);
  });
  it('countReverse', () => {
    expect([...countReverse({ length: 0 })]).toStrictEqual([]);
    expect([...countReverse({ length: 1 })]).toStrictEqual([0]);
    expect([...countReverse({ length: 2 })]).toStrictEqual([1, 0]);
    expect([...countReverse({ length: 3 })]).toStrictEqual([2, 1, 0]);
  });
  it('range', () => {
    expect([...range(0, 0)]).toStrictEqual([0]);
    expect([...range(0, 1)]).toStrictEqual([0, 1]);
    expect([...range(0, 2)]).toStrictEqual([0, 1, 2]);
    expect([...range(0, 3)]).toStrictEqual([0, 1, 2, 3]);
    expect([...range(3, 3)]).toStrictEqual([3]);
    expect([...range(3, 2)]).toStrictEqual([3, 2]);
    expect([...range(3, 1)]).toStrictEqual([3, 2, 1]);
    expect([...range(3, 0)]).toStrictEqual([3, 2, 1, 0]);
  });
  it('range with step', () => {
    expect([...range(0, 0, 2)]).toStrictEqual([0]);
    expect([...range(0, 1, 2)]).toStrictEqual([0]);
    expect([...range(0, 2, 2)]).toStrictEqual([0, 2]);
    expect([...range(0, 3, 2)]).toStrictEqual([0, 2]);
    expect([...range(0, 4, 2)]).toStrictEqual([0, 2, 4]);
    expect([...range(4, 4, 2)]).toStrictEqual([4]);
    expect([...range(4, 3, 2)]).toStrictEqual([4]);
    expect([...range(4, 2, 2)]).toStrictEqual([4, 2]);
    expect([...range(4, 1, 2)]).toStrictEqual([4, 2]);
    expect([...range(4, 0, 2)]).toStrictEqual([4, 2, 0]);
  });
}
