# 🔢 Second Largest Unique Number

## 🧩 Task
- Find the second largest unique number in an array.
- Return `-1` if it doesn’t exist.

## 🧠 Problem Statement

- Given an array of integers, return the second largest distinct (unique) number.
- If there are fewer than 2 unique numbers, return -1.


---

## 🧾 Examples

```js
secondLargestUnique([3, 5, 2, 5, 6, 6, 1]) // → 5
secondLargestUnique([7, 7, 7])             // → -1
secondLargestUnique([1])                   // → -1
secondLargestUnique([10, 5, 10])           // → 5
secondLargestUnique([1, 3])                // → 1
secondLargestUnique([])                    // → -1
```
---

## Approach

1. 🧮 **Use a `Set`** to track seen numbers → skip duplicates.
2. 🏁 **Track two variables**:
   - `first`: current largest unique number
   - `second`: current second largest unique number
3. 🔁**For each unique number**:
   - If it's larger than `first` → shift `first` to `second`, update `first`
   - Else if it's between `second` and `first` → update `second`
4. ✅ **Initialize both to `-Infinity`** to detect "not found"
5. 🚫**Return `-1` if `second` is still `-Infinity`**, otherwise return `second`

---

## ⏱️  Complexity Analysis

| Metric        | Value           |
|-------------|-----------------|
| 🕒 Time        | **O(n)**        |
| 💾 Space       | **O(n)**        |
| ⚙️ Extra Space | Set for uniques |

> ✅ **No sorting** → faster than O(n log n)  
> ✅ **Single pass** → optimal

---

## 🧰 When to Use

- 🚀 You need **O(n) time**
- ✅ Extra space is acceptable
- 🔁 Input has **duplicates**
- 🧼  You want **clean, readable code**

---

## ⚡Edge Cases Handled

| Case         | Output | Reason               |
| ------------ | ------ | -------------------- |
| Empty array `[]`         | `-1`   | No elements          |
| One element `[1]`        | `-1`   | Only one number      |
| All duplicates `[7,7,7]`    | `-1`   | No unique elements   |
| Two unique numbers`[10,5,10]`  | `5`    | Two unique numbers   |
| Negative numbers `[-5,-1,-3]` | `-3`   | Works with negatives |

---

#🧪 Test It Out

```js
console.log(secondLargestUnique([3,5,2,5,6,6,1])); // 5
console.log(secondLargestUnique([7,7,7]));         // -1
console.log(secondLargestUnique([1]));             // -1
console.log(secondLargestUnique([10,5,10]));       // 5
console.log(secondLargestUnique([1,3]));           // 1
console.log(secondLargestUnique([]));              // -1

```

---

## ⚙️ Alternative (No Set – O(n log n))

If **no extra space** is allowed:

```js
function secondLargestUniqueNoSet(arr) {
    if (arr.length < 2) return -1;
    arr.sort((a,b) => b - a);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) return arr[i];
    }
    return -1;
}
```

>🐢 **Trade-off**: Slower, but O(1) extra space

---
