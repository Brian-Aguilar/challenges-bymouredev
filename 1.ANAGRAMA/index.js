
function sorted(a, b) {
    if (a > b) { return 1 }
    if (a < b) { return -1 }
    return 0
}

function anagrama(palabra_01, palabra_02) {
    if (typeof (palabra_01) != "string" && typeof (palabra_02) != "string") {
        console.log("Tipo no aceptado.");
        return;
    }

    p_01 = palabra_01.toLowerCase().split('').sort(sorted)
    p_02 = palabra_02.toLowerCase().split('').sort(sorted)

    if (p_01.toString() === p_02.toString()) {
        console.log("Son palabras anagrama")
    } else {
        console.log("No son palabras anagrama")
    }

}


anagrama("amor", "mora")
anagrama("maria", "riama")
anagrama("pedro", "roro")
