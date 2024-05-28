export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let middle = Math.floor(((hi - lo) / 2) + lo);

        if (haystack[middle] === needle) {
            return true;
        } else if (haystack[middle] < needle) {
            lo = middle + 1;
        } else {
            hi = middle;
        }
    }

    return false;
}