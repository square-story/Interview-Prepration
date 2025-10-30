function heapSort(students, key) {
    const n = students.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(students, n, i, key);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [students[0], students[i]] = [students[i], students[0]]; // swap
        heapify(students, i, 0, key);
    }

    return students;
}

function heapify(arr, n, i, key) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left][key] > arr[largest][key]) {
        largest = left;
    }

    if (right < n && arr[right][key] > arr[largest][key]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest, key);
    }
}

// Example usage:
const students = [
    { name: "Alice", score: 88 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 82 }
];

console.log(heapSort(students, "score"));
