fun main() {
    for (index in 1..100) {
        FizzBuzz(index)
    }
}

fun FizzBuzz(numero: Int) {
    var temp = ""

    if (numero % 3 == 0) temp += "fizz"
    if (numero % 5 == 0) temp += "buzz"

    println(if (temp == "") numero else temp)
}