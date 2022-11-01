package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	anagrama("amor", "mora")
	anagrama("maria", "riama")
	anagrama("pedro", "roro")
}

func anagrama(palabra_01 string, palabra_02 string) {

	if len(palabra_01) != len(palabra_02) {
		fmt.Println("No son palabras anagrama")
		return
	}

	p1 := strings.Split(strings.ToLower(palabra_01), "")
	p2 := strings.Split(strings.ToLower(palabra_02), "")
	sort.Strings(p1)
	sort.Strings(p2)

	if strings.Compare(strings.Join(p1, ""), strings.Join(p2, "")) == 0 {
		fmt.Println("Son palabras anagrama")
	} else {
		fmt.Println("No son palabras anagrama")

	}

}
