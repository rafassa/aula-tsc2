
//ESTENDENDO INTERFACES EXTERNAS AULA-05
// declare global{
//     interface  Console{
//         sayHello(): void
//     }
// }


// Object.assign(console, {
//     sayHello(){
//         console.log("hello")
//     }
// })


// console.sayHello()






//INTERFACES AULA-05
// interface UserWallet{
//     coins?: number;
//     credits?: number; 

// }

// interface User{
//     name:string,
//     createdAt:Date;
//     wallet?: UserWallet
// }

// interface User{
//     talk(): void
// }

// function createUser(name: string):User {
//     return{ name, createdAt: new Date(), 
// talk(){
// console.log("Eu sou", name)
// }
//     }
// }


// function updateWallet(user: User, wallet: UserWallet){
//     user.wallet = { ...user.wallet, ...wallet }
// }


// const objetoCriarRafael = createUser("rafael")

// objetoCriarRafael.talk()
// updateWallet(objetoCriarRafael, {coins: 10})


// interface Admin extends User{

//     ban(user: User):void;
//     kick(user: User): void;
// }


// function promoteUser(user: User):Admin{
//     return{
//         ...user,
//         ban(userToBan){
//             console.log(userToBan, "foi banido por", this.name)
//         },
//         kick(userToKick){
//             console.log(userToKick, "foi expulso por", this.name)
//         }
//     }
// }

// const adminrafael = promoteUser(objetoCriarRafael);

// function adminAction(admin: Admin){

// }

// adminAction(adminrafael)













//TYPES AULA-06


interface cao{
    name: string;
    breed: string;
    bark(): string;
}

interface gato{
    name:string;
    color:string;
    meow():string;
}
