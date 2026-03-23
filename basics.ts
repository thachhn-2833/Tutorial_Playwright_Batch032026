// Khai báo biến
const username: string = "Ngoc Thach";
let age: number = 30;
const isActive: boolean = true;
const roles: string[] = ["Admin"];

// Object user
const user = {
    name: "Thach",
    email: "huynh.ngoc.thach@sun-asterisk.com",
    isAdmin: true
}

// In thông tin user theo format
console.log (
    `User: ${user.name} (email: ${user.email}), Roles: ${roles}, Active: ${isActive}`
);

// Function check tuổi
function checkAge (age: number): void {
    if (age > 18) {
        console.log ("Adult");
    } else {
        console.log ("Under 18");
    }
    }

// Gọi function
checkAge(age);