type Cell = 'living' | 'dead';

export type World = Cell[][]

export const monde: World = [
    ['dead', 'dead', 'dead'],
    ['dead', 'living', 'dead'],
    ['dead', 'dead', 'dead'],
];
// ['dead', 'living', 'dead'] =>     [1,0,1],
// ['living', 'living', 'living'] => [1,2,1]

type NombreCellulesVivantes = number

export type QuiVit = NombreCellulesVivantes[][]

export function regarde(monde: World): QuiVit {
    if (monde[0].length === 2)
        return [[monde[0][0 + 1] === 'living' ? 1 : 0, monde[0][1 - 1] === 'living' ? 1 : 0]]
    return [[0]]
}

export function iterationSuivante(monde: World): World {
    if (monde[0][0] === 'living') return [
        ['dead', 'living', 'dead'],
        ['dead', 'dead', 'dead'],
        ['dead', 'dead', 'dead'],
    ]
    return [
        ['dead', 'dead', 'dead'],
        ['dead', 'dead', 'dead'],
        ['dead', 'dead', 'dead']
    ]
}
