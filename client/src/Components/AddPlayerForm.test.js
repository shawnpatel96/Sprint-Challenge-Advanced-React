import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import AddPlayerForm from "./AddPlayerForm"
import ReactDOM from "react-dom"

afterEach(cleanup);

test("Testing test",()=>{
    expect(true).toBeTruthy();
  })

  test('renders wihtout crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AddPlayerForm/>, div)
    ReactDOM.unmountComponentAtNode(div)
})

test("renders button correctly", ()=>{
    const {getByTestId} = render(<AddPlayerForm/>)
   expect(getByTestId('button')).toHaveTextContent("Submit")
})
test('Form Text', () => {
    const { getByText } = render(<AddPlayerForm />);
    getByText(/Add/i);
});

test('Fill out form', () => {
    const { getByLabelText } = render(<AddPlayerForm />);
    const player = getByLabelText(/Add New Player/i);
    fireEvent.change(player, {target: {value: "Test Player Name"}});
    expect(player.value).toBe("Test Player Name");
 });
  
  