import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById debe retornar un heroes por ID', () => {

        const id = 1;
        const hero = getHeroeById( id )

        expect( hero ).toEqual({ id:1, name: 'Batman', owner: 'DC' })

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id )

        expect( hero ).toBeFalsy();

    });

    test('Retornar arreglos de heroes de DC', () => {

        const dcHeroes = getHeroesByOwner( "DC" )

        expect( dcHeroes.length ).toEqual( 3 )

        expect( dcHeroes ).toStrictEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ])
        
    });

    test('retornar heroes de marvel', () => {

        const marvelHeroes = getHeroesByOwner("Marvel")

        expect( marvelHeroes.length ).toBe(2)
        expect( marvelHeroes ).toStrictEqual([
           
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ])

    });
});