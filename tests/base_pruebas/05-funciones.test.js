import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe( "Pruebas a archivo de funciones", ()=>{ 

    test("getUser debe retornar un objeto", ()=>{

        const testUser = {
            uid: 'ABC123',
            username: "Kal31"
        }
        const user = getUser( );

        expect( user ).toEqual( testUser )

    })

    test("getUsuarioActivo retornar un usuario activo", ()=>{
        
        const name = "Kalet"

        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const activeUser = getUsuarioActivo( name )

        expect( activeUser ).toStrictEqual( testUser )
    })

})