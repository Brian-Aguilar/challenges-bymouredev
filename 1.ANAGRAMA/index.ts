
function sorted(n_old: string, n_new: string) {
    if (n_old > n_new) { return 1 }
    if (n_old < n_new) { return -1 }
    return 0
}

function anagrama(palabra_01: string, palabra_02: string) {
    const p1: string[] = palabra_01.toLowerCase().split('').sort(sorted)
    const p2: string[] = palabra_02.toLowerCase().split('').sort(sorted)

    if (p1.toString() === p2.toString()) {
        console.log("Son palabras anagrama")
    } else {
        console.log("No son palabras anagrama")
    }
}

anagrama("amor", "mora")
anagrama("maria", "riama")
anagrama("pedro", "roro")