class Counter {
    count: number = 0; // mặc định = 0

    increment(): void {
        this.count++; // tăng lên 1
        console.log(`Count is now: ${this.count}`);
    }

    reset(): void {
        this.count = 0; // reset về 0
        console.log("Counter reset");
    }
}

// tạo instance và gọi method
const counter = new Counter();

counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // 0