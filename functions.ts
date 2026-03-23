
// function sum
function sum(a: number, b: number): number {
    return a + b;
}
// check func sum
console.log (sum (5,7));


// function multiply
function multiply(a: number, b: number): number {
    return a * b;
}
// check func multiply
console.log (multiply(2,8));

// function greet
function greet(
    name: string,
    role: string = "Guest"
): void {
    console.log(`Hello ${name}, your role is ${role}`)  
}

// check func greet
greet("Thach")
greet("Ngoc Thach", "Admin");