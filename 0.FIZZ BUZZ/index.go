package main

import (
	"fmt"
	"strconv"
)

func main() {
	for index := range [101]int{} {
		fizzBuzz(index)
	}
}

func fizzBuzz(numero int) {
	var temp string = ""

	if numero%3 == 0 {
		temp += "fizz"
	}
	if numero%5 == 0 {
		temp += "buzz"
	}

	if temp == "" {
		temp = strconv.Itoa(numero)
	}

	fmt.Println(temp)

}
