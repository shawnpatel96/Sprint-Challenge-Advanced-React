import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import PlayerCard from "./PlayerCard"
import ReactDOM from "react-dom"



test('renders wihtout crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<PlayerCard/>, div)

})
test("Testing test",()=>{
    expect(true).toBeTruthy();
  })

test("renders button correctly", ()=>{
    const {getByTestId} = render(<PlayerCard/>)
   expect (getByTestId('button')).toHaveTextContent("Toggle")
})
test('Card Text', () => {
    const { getByText } = render(<PlayerCard />);
    getByText(/toggle/i);
});