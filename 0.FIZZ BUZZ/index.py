def fizz_buzz(numero: int):
    temp: str = ""

    if numero % 3 == 0:
        temp += "fizz"
    if numero % 5 == 0:
        temp += "buzz"

    print(numero if temp == "" else temp)


for i in range(0, 101):
    fizz_buzz(i)
