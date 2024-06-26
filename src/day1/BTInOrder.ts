function walk(head: BinaryNode<number> | null, path: number[]): number[] {
    if (!head) {
        return path;
    }

    walk(head.left, path);
    path.push(head.value);
    walk(head.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}