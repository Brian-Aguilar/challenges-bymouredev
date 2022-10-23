function fizzbuzzTS(numero: number) {
    let temp: string = ""

    if (numero % 3 == 0) temp += "fizz"
    if (numero % 5 == 0) temp += "buzz"

    console.log(temp == "" ? numero : temp)
}


for (let index: number = 0; index <= 100; index++) {
    fizzbuzzTS(index)
}
