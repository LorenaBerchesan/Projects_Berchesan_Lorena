class Automat:
    def __init__(self):
        self.__stareInitiala = None
        self.__stareFinala = None
        self.__stari = None
        self.__tranzitii = None
        self.__alfabet = None

    @property
    def stari(self):
        return self.__stari

    @stari.setter
    def stari(self, value):
        self.__stari = value

    @property
    def stareInitiala(self):
        return self.__stareInitiala

    @stareInitiala.setter
    def stareInitiala(self, value):
        self.__stareInitiala = value

    @property
    def stareFinala(self):
        return self.__stareFinala

    @stareFinala.setter
    def stareFinala(self, value):
        self.__stareFinala = value\

    @property
    def tranzitii(self):
        return self.__tranzitii

    @tranzitii.setter
    def tranzitii(self, value):
        self.__tranzitii = value

    @property
    def alfabet(self):
        return self.__alfabet

    @alfabet.setter
    def alfabet(self, value):
        self.__alfabet = value

    def __str__(self) -> str:
        return f"{self.__stari}\n"\
        f"{self.__stareInitiala}\n"\
        f"{self.__stareFinala}\n"\

        f"{self.__tranzitii}\n"\
        f"{self.__alfabet}\n"

    def verificaSecventa(self, secventa):
        stareCurenta = self.__stareInitiala
        #il imparte intr-o lista
        secventa = list(secventa)
        for i in secventa:
            if i not in self.tranzitii[stareCurenta]:
                return False
            stareCurenta = self.__tranzitii[stareCurenta][i]
        if stareCurenta != self.__stareFinala:
            return False


        return True

    def verficaStarea(self, stare, simbol):
        rezultat = self.__tranzitii[stare][simbol]
        return rezultat



