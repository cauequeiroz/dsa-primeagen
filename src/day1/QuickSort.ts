
function sort(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) return;

    const pivotIndex = partition(arr, lo, hi);

    sort(arr, lo, pivotIndex - 1);
    sort(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let saveIndex = lo - 1;

    for (let i=lo; i<hi; i++) {
        if (arr[i] <= pivot) {
            saveIndex++;

            const tmp = arr[saveIndex];
            arr[saveIndex] = arr[i];
            arr[i] = tmp;
        }
    }

    saveIndex++;
    arr[hi] = arr[saveIndex];
    arr[saveIndex] = pivot;

    return saveIndex;
}

export default function quick_sort(arr: number[]): void {
    sort(arr, 0, arr.length-1);
}