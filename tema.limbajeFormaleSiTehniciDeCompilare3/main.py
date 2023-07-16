import json


from gramatica import Gramatica


def meniu():
    print("1.Afiseaza terminale")
    print("2.Afiseaza nonTerminale")
    print("3.Afiseaza stareInitiala")
    print("4.Afiseaza productii")
    print("5.Afiseaza productii ale unui nonTerminal")
    print("6.Afiseaza tot")
    print("7.Load gramatica")
    print("8.Verificare GIC")
    print("9. First")
    print("X.Stop")


def load_json(file, gramatica):
    data = json.load(file)
    gramatica.terminale = data[ "terminale" ]
    gramatica.nonTerminale = data[ "nonTerminale" ]
    gramatica.stareInitiala = data[ "stareInitiala" ]
    gramatica.productii = data[ "productii" ]


if __name__ == '__main__':
    gramatica = Gramatica()
    while True:
        meniu()
        i = input("Insereaza comanda")
        if i == "X":
            break
        elif i == "1":
            print(gramatica.terminale)
        elif i == "2":
            print(gramatica.nonTerminale)
        elif i == "3":
            print(gramatica.stareInitiala)
        elif i == "4":
            print(gramatica.productii)
        elif i == "5":
            nonTerminal = input("Introdu un nonTerminal: ")
            print(gramatica.productii[nonTerminal])
        elif i == "6":
            print(gramatica)
        elif i == "7":
            file = open("gramatica.json")
            load_json(file, gramatica)
            file.close()
        elif i == "8":
            print(gramatica.verificareGIC())
        elif i == "9":
            print(gramatica.handle_first())
            print(gramatica.print_first())
        else:
            print("Alege o optiune corecta")

