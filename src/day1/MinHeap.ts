export default class MinHeap {
    public length: number;
    private data: number[];    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.bubbleUp(this.length);
        this.length++;
    }

    delete(): number {   
        const deleteValue = this.data[0];

        this.length--;
        this.data[0] = this.data[this.length];

        this.bubbleDown(0);

        return deleteValue;
    }

    private bubbleUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parentIdx(idx);
        const parentValue = this.data[parentIdx];
        const currentValue = this.data[idx];

        if (parentValue > currentValue) {
            this.data[parentIdx] = currentValue;
            this.data[idx] = parentValue;
            this.bubbleUp(parentIdx);
        }
    }

    private bubbleDown(idx: number): void {
        const leftIdx = this.leftChildIdx(idx);
        const rightIdx = this.rightChildIdx(idx);

        if (idx >= this.length || leftIdx >= this.length) return;

        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const currentValue = this.data[idx];        

        if (leftValue < rightValue && currentValue > leftValue) {
            this.data[leftIdx] = currentValue;
            this.data[idx] = leftValue;
            this.bubbleDown(leftIdx);
        } else if (leftValue > rightValue && currentValue > rightValue) {
            this.data[rightIdx] = currentValue;
            this.data[idx] = rightValue;
            this.bubbleDown(rightIdx);
        }
    }

    private parentIdx(idx:number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChildIdx(idx:number): number {
        return 2 * idx + 1;
    }

    private rightChildIdx(idx:number): number {
        return 2 * idx + 2;
    }
}
