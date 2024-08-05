import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe('Pruebas a <CounterApp/>', () => {
    
    const initialValue = 100;

    test('Snapshot para counter app', () => {
        const { container } = render( <CounterApp value={initialValue}/> )

        expect( container ).toMatchSnapshot()
    });

    test('debe mostrar valor inicial de 100', () => {
        render( <CounterApp value={initialValue}/> )
        
        expect( parseInt( screen.getByRole('heading', { level: 2 }).innerHTML ) ).toBe( initialValue )

    });

    test('debe de incrementar con el boton +1', () => {

        render( <CounterApp value={initialValue}/> )
        fireEvent.click( screen.getByText("+1") )

        expect( screen.getByText('101') ).toBeTruthy()

    });

    test('debe de decrementar con el boton -1', () => {

        render( <CounterApp value={initialValue}/> )
        fireEvent.click( screen.getByText("-1") )
        screen.debug()
        expect( screen.getByText('99') ).toBeTruthy()

    });

    test('debe de funcionar el reset', () => {

        render( <CounterApp value={initialValue}/> )
        fireEvent.click( screen.getByText("+1") )

        expect( screen.getByText('101') ).toBeTruthy()

    });

});