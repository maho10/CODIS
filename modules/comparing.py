# Proyecto de Herramientas
# Comparar muestras de ADN
# Proyecto/modules/compareSamples
# Majo Gil - 20337
# 19/05/2021

import numpy as np

def dnaToNum(dna):
    dnaNum = dna.replace("A", "1").replace("G", "2").replace("C", "3").replace("T", "4")

    return dnaNum


def sampleToNum(sample):
    sampleNum = sample.replace("A", "1").replace("G", "2").replace("C", "3").replace("T", "4")

    return sampleNum


def dnaToMatrix(dna):
    dnaNum = [int(a) for a in dna]

    shape = (14, 13)
    dnaArray = np.array(dnaNum).reshape(shape)

    return dnaArray


def sampleToList(sample):
    sampleNum_str = sample.replace("A", "1").replace("G", "2").replace("C", "3").replace("T", "4")

    sampleNum = [float(a) for a in sampleNum_str]

    for i in range(0, len(sampleNum)):
        if sampleNum[i] != 0:
            sampleNum[i] = 1 / sampleNum[i]

    shape = (14, 13)
    sampleArray = np.array(sampleNum).reshape(shape)

    return sampleArray

def compareDna(dna_str, sample_str):
    dna = dnaToMatrix(dna_str)
    sample = sampleToList(sample_str)
    listTP0X = np.array([dna[0].dot(sample[0]), dna[0].dot(sample[1]), dna[1].dot(sample[0]), dna[1].dot(sample[1])])
    listFGA = np.array([dna[2].dot(sample[2]), dna[2].dot(sample[3]), dna[3].dot(sample[2]), dna[3].dot(sample[3])])
    listTH01 = np.array([dna[4].dot(sample[4]), dna[4].dot(sample[5]), dna[5].dot(sample[4]), dna[5].dot(sample[5])])
    listVWA = np.array([dna[6].dot(sample[6]), dna[6].dot(sample[7]), dna[7].dot(sample[6]), dna[7].dot(sample[7])])
    listD13S317 = np.array([dna[8].dot(sample[8]), dna[8].dot(sample[9]), dna[9].dot(sample[8]), dna[9].dot(sample[9])])
    listD21S11 = np.array([dna[10].dot(sample[10]), dna[10].dot(sample[11]), dna[11].dot(sample[10]),
                           dna[11].dot(sample[11])])
    listAMEL = np.array([dna[12].dot(sample[12]), dna[12].dot(sample[13]), dna[13].dot(sample[12]),
                         dna[13].dot(sample[13])])

    dotTP0X = dotFGA = dotTH01 = dotVWA = dotD13S317 = dotD21S11 = dotAMEL = []
    num = 0

    for i in range(0, len(listTP0X)):
        dotTP0X.append(abs(listTP0X[i] - 13))
        dotTP0X.sort()
        dotFGA.append(abs(listFGA[i] - 13))
        dotFGA.sort()
        dotTH01.append(abs(listTH01 - 13))
        dotTH01.sort()
        dotVWA.append(abs(listVWA[i] - 13))
        dotVWA.sort()
        dotD13S317.append(abs(listD13S317[i] - 13))
        dotD13S317.sort()
        dotD21S11.append(abs(listD21S11[i] - 13))
        dotD21S11.sort()
        dotAMEL.append(abs(listAMEL[i] - 13))
        dotAMEL.sort()

    for i in range(0, 2):
        num += (dotTP0X[i] + dotFGA[i] + dotTH01[i] + dotVWA[i] + dotD13S317[i] + dotD21S11[i] + dotAMEL[i])

    percentage: float = 100 - ((num / 182) * 100)

    return percentage
