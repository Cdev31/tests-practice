import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";



describe('Pruebas en <FirstApp />', () => {

    const title = "Hola soy vegeta"
    const subTitle = "Soy un subtitulo"

    test(' debe de hacer match con el snapshot', ()=>{

        const { container } = render( <FirstApp title={title}/> )

        expect( container ).toMatchSnapshot( );
    })

    test('Debe mostrar un titulo', () => {

        render( <FirstApp title={title} /> )

        expect( screen.getByText(title) ).toBeTruthy()

        expect( screen.getByTestId('test-title').innerHTML ).toContain( title )

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        render( <FirstApp title={title} subTitle={subTitle} /> )

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title)

        expect( screen.getAllByText( subTitle ).length ).toBe( 2 )

    });

});