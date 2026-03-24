// 1. Tạo Interface IUser
interface IUser {
    name: string;
    email: string;
    isAdmin: boolean 
}
// 2. Tạo class User implement IUser
class User implements IUser {
    name: string;
    email: string;
    isAdmin: boolean
    
    // constructor nhận giá trị
    constructor(name : string, email: string, isAdmin: boolean)
    {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
    // method getInfo()
    getInfo (): string {
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`
    }
}

// 4. Tạo AdminUser kế thừa User, thêm method deleteUser
class Admin extends User {
    constructor (name: string, email: string) {
        super (name, email, true)
    }
    // method deleteUser
    deleteUser (user: User): void {
        console.log (`Admin ${this.name} deleted user ${user.name}`)
    }
} 
    // tạo instance
    const user1 = new User ("Thach1", "thach1@gmail.com", false)
    const user2 = new User ("Thach2", "thach2@gmail.com", false)
    const admin1 = new Admin ("Thach3", "thach3@gmail.com")

// 5. Tạo mảng users
    const users: User[] = [user1, user2, admin1]

// 6. Duyệt mảng và in info
    users.forEach ((user) => {
        console.log(user.getInfo());
    })

// 7. Gọi method deleteUser (test)
admin1.deleteUser(user1);
admin1.deleteUser(user2);
