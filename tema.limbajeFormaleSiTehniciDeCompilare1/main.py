import json

from lab3 import Automat


def meniu():
    print("1.Afiseaza starile")
    print("2.Afiseaza tranzitiile")
    print("3.Afiseaza alfabetul")
    print("4.Afiseaza starea finala si initiala")
    print("5.Afiseaza tot")
    print("6.Load automat")
    print("7.Afisare automat 'identificatori' limbaj propriu")
    print("8.Verifica secventa")
    print("9.Verifica starea")
    print("X.Stop")


def load_json(file, automat):
    data = json.load(file)
    automat.stari = list(data["stari"].values())
    automat.stareFinala = data["stari"]["sFinal"]
    automat.stareInitiala = data["stari"]["sInitial"]
    automat.alfabet = list(data["alfabet"])
    automat.tranzitii = data["tranzitii"]




if __name__ == '__main__':
    automat = Automat()
    while True:
        print(meniu())
        i = input("Insereaza comanda")
        if i == "X":
            break
        elif i == "1":
            print(automat.stari)
        elif i == "2":
            print(automat.tranzitii)
        elif i == "3":
            print(automat.alfabet)
        elif i == "4":
            print(automat.stareInitiala)
            print(automat.stareFinala)
        elif i == "5":
            print(automat)
        elif i == "6":
            file = open("automat.json")
            load_json(file, automat)
            file.close()
        elif i == "7":
            file = open("automat2.json")
            load_json(file, automat)
            file.close()
        elif i == "8":
            secventa = input("Introdu secventa: ")
            if automat.verificaSecventa(secventa):
                print("Secventa e buna")
            else:
                print("Secventa nu e buna")
        elif i == "9":
            stare = input("Starea este:")
            simbol = input("Simbolul este: ")
            print(automat.verficaStarea(stare, simbol))




