class Gramatica:
    def __init__(self):
        self.__terminale = None
        self.__nonTerminale = None
        self.__stareInitiala = None
        self.__productii = None
        self.__first = None
        self.__follow = None
        self.__llTable = None

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

    @property
    def first(self):
        return self.__first

    @first.setter
    def first(self, value):
        self.__first = value

    @property
    def follow(self):
        return self.__follow

    @follow.setter
    def follow(self, value):
        self.__follow = value

    @property
    def llTable(self):
        return self.__llTable

    @llTable.setter
    def llTable(self, value):
        self.__llTable = value

    def verificareGIC(self):
        productii = self.__productii
        nonTerminale = self.__nonTerminale
        terminale = self.__terminale


        for nonTerminal in productii:
            if nonTerminal not in nonTerminale:
                return False
            for dreapta in productii[nonTerminal]:
                if dreapta == "eps":
                    continue
                for element in dreapta:
                    if element not in (nonTerminale + terminale) :
                        return False
        return True

    def First(self, nT):
        lista = []
        if nT in self.__terminale:
            return nT
        for element in self.__productii[nT]:
            if element == "eps":
                lista.append(element)
            if element[0] in self.__terminale:
                lista.append(element[0])
            if element[0] in self.__nonTerminale:
                temp = self.First(element[0])
                if "eps" not in temp:
                    lista.extend(temp)
                    continue
                elif len(element) > 1:
                    temp.remove("eps")
                    #daca primul e nonTerminal ajunge sa verifice si restul elementelor
                    for p in element[1:]:#parcurge lista de la indexul 1
                        temp2 = self.First(p)
                        if "eps" in temp2:
                            temp2.remove("eps")
                        temp.extend(temp2)
                    lista.extend(temp)
                if self.__productii[nT][-1] == element:
                    lista.append("eps")

        return list(set(lista))

    def handle_first(self):
        f = {}
        for terminal in self.__terminale:
            f[terminal] = self.First(terminal)

        for nt in self.__productii:
            f[nt] = self.First(nt)
#salveaza in memorie in gramatica
        self.first = f

    def print_first(self):
        result = ""
        for element in self.__first:
            result += str(element) + ": " + str(self.first[element]) + "\n"
        return result