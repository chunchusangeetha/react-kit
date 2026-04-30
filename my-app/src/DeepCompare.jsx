export default function DeepCompare() {
    function deepEqual(a, b) {
        if (a === b) {
            return true;
        }
        if (a == null || typeof a !== "object" || b == null || typeof b !== "object") {
            return false;
        }
        if (Number.isNaN(a) && Number.isNaN(b)) return true;
        if (Array.isArray(a) !== Array.isArray(b)) {
            return false;
        }
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) return false;

        for (let key of keysA) {
            if (!(key in b) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;

    }

    const check1 = deepEqual({ name: "Alice", age: 30 }, { name: "Alice", age: 30 });
    const check2 = deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true
    const check3 = deepEqual({ a: 1 }, { a: 2 }); // false
    const check4 = deepEqual([1, 2], [1, 2]); // true
    const check5 = deepEqual([1, 2], [2, 1]); // false
    console.log("deepEqual::::1", check1); // Output: true
    console.log("deepEqual::::2", check2); // Output: true
    console.log("deepEqual::::3", check3); // Output: false
    console.log("deepEqual::::4", check4); // Output: true
    console.log("deepEqual::::5", check5); // Output: false

    return (
        <div>
            <h2>Deep Compare</h2>
        </div>
    )
}