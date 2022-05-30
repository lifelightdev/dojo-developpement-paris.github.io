import { describe, it, } from "https://deno.land/std@0.141.0/testing/bdd.ts";
import { expect } from 'https://deno.land/x/expect/mod.ts';
import { iterationSuivante, monde, regarde, World } from "./index.ts";


describe('world', () => {
    it('le monde est bien initialisé', () => {
        expect(monde).toEqual([
            ['dead', 'dead', 'dead'],
            ['dead', 'living', 'dead'],
            ['dead', 'dead', 'dead'],
        ]);
    });

    it('une cellule toute seule meurt', () => {
        const nextWorld = iterationSuivante(monde);

        expect(nextWorld).toEqual([
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead'],
        ])
    });

    it('une cellule qui survit', () => {
        const monde: World = [
            ['living', 'living', 'living'],
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead']
        ]

        const mondeSuivant = iterationSuivante(monde)

        expect(mondeSuivant).toEqual([
            ['dead', 'living', 'dead'],
            ['dead', 'dead', 'dead'],
            ['dead', 'dead', 'dead'],
        ])
    });
});

describe('regarde', () => {
    it('sur un monde avec une seule cellule', () => {
        const monde: World = [["living"]]

        const vivantAutour = regarde(monde)

        expect(vivantAutour).toEqual([[0]])
    });
    it('sur un monde avec deux cellules', () => {
        const monde: World = [["living", "dead"]]

        const vivantAutour = regarde(monde)

        expect(vivantAutour).toEqual([[0, 1]])
    });

    it('sur un monde avec deux cellules 2', () => {
        const monde: World = [["dead", "living"]]

        const vivantAutour = regarde(monde)

        expect(vivantAutour).toEqual([[1, 0]])
    });

    it('sur un monde avec deux cellules 3', () => {
        const monde: World = [["dead", "dead"]]

        const vivantAutour = regarde(monde)

        expect(vivantAutour).toEqual([[0, 0]])
    })
    it('sur un monde avec deux cellules 4', () => {
        const monde: World = [["living", "living"]]

        const vivantAutour = regarde(monde)

        expect(vivantAutour).toEqual([[1, 1]])
    });
})
