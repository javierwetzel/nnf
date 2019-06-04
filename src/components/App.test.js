import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Pruebas componente App', () => {

  it('Debe tener propiedad glitch para mostrar el efecto', () => {
    const component = shallow(<App />);
    const wrapper = component.find(`[className='glitch']`);

    expect(wrapper.length).toBe(1);
  })


})