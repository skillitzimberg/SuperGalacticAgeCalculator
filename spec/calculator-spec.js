import { Calculator } from './../src/Calculator';
import { User } from './../src/User';

describe('Calculator', function() {
  let testCalculator;
  let testUser;

  beforeEach(function() {
    testCalculator = new Calculator();
    testUser = new User([1910, 8, 3], 'male');
  });

  it('construcotr should instantiate a calculator', function() {
    let newCalculator = new Calculator();
    expect(newCalculator.mercury).toEqual(0.24);
  });

  it('getAgeOnPlanet(planet, userAge) should return the user age on a given planet', function() {
    let newCalculator = new Calculator();

    let birthday = new Date(1910, 8, 3);
    let today = new Date();
    let age = today - birthday;
    age = age / 3.154e+10;
    let ageOnPlanet = Math.round(age / newCalculator.mercury);

    expect(newCalculator.getAgeOnPlanet('mercury', testUser.age)).toEqual(ageOnPlanet);
  });
});
