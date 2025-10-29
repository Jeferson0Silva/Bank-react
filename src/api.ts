const conta = {
    email: "jeff@basic.bank",
    password: "123456",
    name: "Jeferson Silva"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})