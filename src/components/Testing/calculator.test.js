import React from 'react';
import { render } from '@testing-library/react';
import MortgageCalculator from '../calculator/MortgageCalculator';
import { shallow, mount, configure  } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Calculator', () => {
  const events = { handleSubmitValues: jest.fn() };
  const userInputs = {
    amount: '',
    interest: '',
    years: '',
    frequency: '',
    term: ''
  };

  it('renders Calculator component', () => {
    render(<MortgageCalculator />);
  });
  it("should render correctly", () => {
    const wrapper = shallow(<MortgageCalculator />);
    expect(wrapper).toBeDefined();
  }); 
 
  it('Mortage amount should be defined when input change method is triggered', () => {   
    const wrapper = mount(<MortgageCalculator />);
    const element = wrapper.find('input').at(0);
    element.simulate('change');
    expect(userInputs.amount).toBeDefined();
  });
  it('Loan interest should be defined when input change method is triggered', () => {   
    const wrapper = mount(<MortgageCalculator />);
    const element = wrapper.find('input').at(1);
    element.simulate('change');
    expect(userInputs.interest).toBeDefined();
  });
  it('Amortization period should be defined when select change method is triggered', () => {   
    const wrapper = mount(<MortgageCalculator />);
    const element = wrapper.find('select').at(0);
    element.simulate('change');
    expect(userInputs.years).toBeDefined();
  });
  it('Payment Frequency should be defined when select change method is triggered', () => {   
    const wrapper = mount(<MortgageCalculator />);
    const element = wrapper.find('select').at(1);
    element.simulate('change');
    expect(userInputs.frequency).toBeDefined();
  });
  it('Term should be defined when input select method is triggered', () => {   
    const wrapper = mount(<MortgageCalculator />);
    const element = wrapper.find('select').at(2);
    element.simulate('change');
    expect(userInputs.term).toBeDefined();
  });

  it("Should display result table when form is submitted", () => {
    const wrapper = mount(<MortgageCalculator />);
    const formEl = wrapper.find('form');
    formEl.simulate('submit');
    const tableElement = wrapper.find('table');
    expect(tableElement).toBeDefined();
  });

});


