// class Employee { 
//     name; 
//     age; 
//     salary; 
//     power(){ 
//         return `bomb`
//     } 

// } 
// let demon = new Employee 
// demon.name = `demon `
// demon.age = `3000`
// demon.salary = `0 ` 
 
// let pipirka = new Employee 
// pipirka.name = `pipirka`
// pipirka.age = `100 `
// pipirka.salary = `228666` 
 
// let topchelik = new Employee 
// topchelik.name = `topchelik` 
// topchelik.age = `1734812 `
// topchelik.salary = `1337 `
 
// document.write( demon.name, " ", demon.age, " ", demon.salary) 
// let sum =  +topchelik.salary +  +pipirka.salary +  +demon.salary + `Psi blades `
// console.log(sum) 
// console.log(demon.power())

// class Employee{
//     show(name, salary){
//         return name + ` ` + salary
//     }
// }
// let user = new Employee;
// console.log(user.show(`demon`, `236 `))

// class Employee{
//     show(){
//         console.log(this.name)
//         console.log(this.salari)
//     }
// }
// let user = new Employee;
// user.name = `demon`;
// user.salari = `236 `;
// user.show()

// class User {
// 	show() {
// 		return this.cape(this.name);
// 	}	
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new User
// user.name = `demon`
// console.log(user.show())

// class Student{
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
//     ins()
// }

// let user = new Student;
// user.name = `demon`;
// user.surn = `Tolya787`;
// console.log(user.names())
// console.log(user.surns())

// class Student{
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase();
// 	}
// }
// let user = new Student;
// user.name = `demon`;
// user.surn = `Tolya787`;
// console.log(user.names() + user.surns())

// class Student{
//     name = 'demon';
//     surn = `pop`;
//     names(){
//         return this.cape(this.name);
//     }
//     surns(){
//         return this.cape(this.surn);
//     }
//     cape(str) {
// 		return str[0].toUpperCase() + str.slice(1);
// 	}
// }
// let user = new Student;
// console.log(user.names())
// console.log(user.surns())

// class Employee{
//     constructor(){
//         console.log(`Сергей Нечаев`)
//     }
// }
// new Employee;