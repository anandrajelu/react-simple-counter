import counter from "./";

describe("Counter Reducer", () => {
  it("INCREMENT", () => {
    const state = 9;
    const action = { type: "INCREMENT" };
    const result = counter(state, action);
    expect(result).toEqual(10);
  });

  it("DECREMENT", () => {
    const result = counter(8, { type: "DECREMENT" });
    expect(result).toEqual(7);
  });

  it("INVALID_ACTION", () => {
    const result = counter(6, { type: "SQUARE" });
    expect(result).toEqual(6);
  });
});
