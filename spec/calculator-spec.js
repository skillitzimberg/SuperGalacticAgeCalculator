import { Calculator } from './../src/Calculator';
import { User } from './../src/User';

describe('Calculator', function() {
  let testCalculator;

  beforeEach(function() {
    testCalculator = new Calculator();
  });

  it('construcotr should instantiate a calculator', function() {
    let newCalculator = new Calculator();
    expect(newCalculator.mercury).toEqual(0.24);
  });
});
