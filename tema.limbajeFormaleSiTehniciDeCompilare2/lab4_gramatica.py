class Gramatica:
    def __init__(self):
        self.__terminale = None
        self.__nonTerminale = None
        self.__stareInitiala = None
        self.__productii = None

    def __str__(self) -> str:
        return f"{self.__terminale}\n" \
               f"{self.__nonTerminale}\n" \
               f"{self.__stareInitiala}\n" \
               f"{self.__productii}\n"

    @property
    def terminale(self):
        return self.__terminale

    @terminale.setter
    def terminale(self, value):
        self.__terminale = value

    @property
    def nonTerminale(self):
        return self.__nonTerminale

    @nonTerminale.setter
    def nonTerminale(self, value):
        self.__nonTerminale = value

    @property
    def stareInitiala(self):
        return self.__stareInitiala

    @stareInitiala.setter
    def stareInitiala(self, value):
        self.__stareInitiala = value

    @property
    def productii(self):
        return self.__productii

    @productii.setter
    def productii(self, value):
        self.__productii = value

    def verificaGramatica(self):
        productii = self.__productii
        nonTerminale = self.__nonTerminale
        terminale = self.__terminale
        adev = 0
        epsilon = 0
        for i in productii:
            if i not in nonTerminale:
                return  False
            for j in productii[i]:
                if len(j) == 2:
                    t = j[0]
                    nt = j[1]
                    if nt is self.__stareInitiala:
                        adev =1
                    if t not in terminale and nt not in nonTerminale:
                        return False
                elif len(j) == 1:
                    if j not in terminale:
                        return False
            if 'eps' in productii[i]:
                if i is not self.__stareInitiala:
                    return False
                epsilon = 1
        if epsilon == 1 and adev == 1:
            return False

        return True

    # def toAutomat(self, automat):




