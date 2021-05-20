# Proyecto de Herramientas
# ADN a Matriz
# Proyecto/modules/dnaToMatrix
# Majo Gil - 20337
# 17/05/2021

import numpy as np


def dnaToList(dna):
    dnaNum = dna.replace("A", "1").replace("G", "2").replace("C", "3").replace("T", "4")

    dnaNum = [int(a) for a in dnaNum]

    shape = (14, 13)
    dnaArray = np.array(dnaNum).reshape(shape)

    return dnaArray


def sampleToList(sample):
    sampleNum = sample.replace("A", "1").replace("G", "2").replace("C", "3").replace("T", "4")

    sampleNum = [float(a) for a in sampleNum]

    for i in range(0, len(sampleNum)):
        if sampleNum[i] != 0:
            sampleNum[i] = 1/sampleNum[i]

    shape = (14, 13)
    sampleArray = np.array(sampleNum).reshape(shape)

    return sampleArray
