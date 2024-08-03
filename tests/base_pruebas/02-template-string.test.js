import { getSaludo } from "../../src/base-pruebas/02-template-string"



describe(" Pruebas a templates strings ", ()=>{

    test( "getSaludo", ()=>{ 
        const name = "Kalet"
        const message = getSaludo( name  )

        expect( message ).toBe( `Hola ${ name }` )
    })

})