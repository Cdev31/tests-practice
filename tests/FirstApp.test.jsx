import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";



describe('Pruebas en <FirstApp />', () => {

    test(' debe de hacer match con el snapshot', ()=>{

        const { container } = render( <FirstApp/> )

        expect( container ).toMatchSnapshot( );
    })

    test('Debe mostrar un titulo', () => {
        const title = "Hola soy vegeta"
        const { container, getByText } = render( <FirstApp title={title} /> )

        expect( getByText(title) ).toBeTruthy()

        const h2 = container.querySelector('h1')

        expect( h2.innerHTML).toContain( title)

    });

});