class MyHashMap {
    cnt: number[] = new Array(1000001);
    constructor() {
    }

    put(key: number, value: number): void {
        this.cnt[key] = value;
    }

    get(key: number): number {
        let val = this.cnt[key];
        return val === undefined ? -1: val;
    }

    remove(key: number): void {
        delete this.cnt[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */