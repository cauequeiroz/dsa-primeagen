type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    
    private head?: Node<T>;
    private tail?: Node<T>;    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item, next: undefined };

        if (!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;

        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const node = this.head;

        this.head = this.head.next;
        this.length--;
        
        node.next = undefined;

        if (!this.head) {
            this.tail = undefined;
        }

        return node.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
}