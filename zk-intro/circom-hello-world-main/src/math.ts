import * as galois from '@guildofweavers/galois';

export const p = 21888242871839275222246405745257275088548364400416034343698204186575808495617n
export const base = [
    5299619240641551281634865583518297030282874472190772894086521144482721001553,
    16950150798460657717958625567821834550301663161624707787222815936182638968203
];


export const field = galois.createPrimeField(p)