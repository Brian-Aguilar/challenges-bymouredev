
def anagrama(palabra_01: str, palabra_02: str):
    p_01 = sorted(list(palabra_01.lower()))
    p_02 = sorted(list(palabra_02.lower()))
    
    if p_01 == p_02:
        print("Son palabras anagrama")
    else :
        print("No son palabras anagrama")
    


anagrama("amor", "mora")
anagrama("maria", "riama")
anagrama("pedro", "roro")

