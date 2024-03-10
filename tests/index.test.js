
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toBeUndefined();
    });

    test("boolean", async () => {
        expect(testFunc(true)).toBeUndefined();
    });

    test("a number", async () => {
        expect(testFunc(123)).toBeUndefined();
    });

    test("not a css colour string", async () => {
        expect(testFunc("foo")).toBeUndefined();
    });
});

describe("convert some colours", () => {
    test("black", () => {
        expect(testFunc("#000000")).toEqual([0, 0, 0, 1]);
    });

    test("black shorthand", () => {
        expect(testFunc("#000")).toEqual([0, 0, 0, 1]);
    });

    test("cornflowerblue", () => {
        expect(testFunc("#6495ed")).toEqual([100, 149, 237, 1]);
    });

    test("cornflowerblue with 50% transparency", () => {
        expect(testFunc("#6495ed7f")).toEqual([100, 149, 237, 0.5]);
    });
});
