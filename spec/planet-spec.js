import { Planet } from './../src/Planet';
import { User } from './../src/User';

describe('Planet', function() {
  let testPlanet;
  let testUser;

  beforeEach(function() {
    testPlanet = new Planet('Mercury');
    testUser = new User([1910, 8, 3], 'male');
    testUser.setAge();
  });

  it('constructor(planet) should instantiate a planet', function() {
    expect(testPlanet.planetName).toEqual('Mercury');
  });
  
  // it('getAgeOnPlanet(planet, userAge) should return the users age on a given planet', function() {
  //
  //   let birthday = new Date(1910, 8, 3);
  //   let today = new Date();
  //   let age = today - birthday;
  //   age = age / 3.154e+10;
  //   let ageOnPlanet = Math.round(age / testPlanet.mercury);
  //
  //   expect(testPlanet.getAgeOnPlanet('mercury', testUser.age)).toEqual(ageOnPlanet);
  // });
  //
  // it('getLifeExpectancyOnPlanet(planet, userAge) should return the users life expectancy on a given planet', function() {
  //   let testLifeExpectancy = testUser.getLifeExpectancy();
  //   let exoPlanetLifeExpectancy = Math.round(testLifeExpectancy / 0.24);
  //
  //   expect(testPlanet.getLifeExpectancyOnPlanet('mercury', testUser.age)).toEqual(exoPlanetLifeExpectancy);
  // });
});
