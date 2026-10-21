
const myMap = new Map();
const numberMap = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

numberMap.set("four", 4);

for(let key of numberMap.keys()) {
    console.log(key); // 1, 2, 3, 'four'
}