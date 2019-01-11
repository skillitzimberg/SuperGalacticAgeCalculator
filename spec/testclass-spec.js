import { User } from './../src/User';
import { Calculator } from './../src/Calculator';

describe('TestClass', function() {
  it('getMessage should return message', function() {
    let testClass = new TestClass();
    expect(testClass.getMessage()).toEqual('SuperGalacticAgeCalculator is working.');
  });
});
