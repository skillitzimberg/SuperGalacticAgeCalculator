import { User } from './../src/User';
// import { Calculator } from './../src/Calculator';

describe('User', function() {
  var testUser;

  beforeEach(function() {
    testUser = new User([1910, 8, 3], 'male');
  });

  it('construcotr should instantiate a user', function() {
    let newUser = new User([1910, 8, 3], 'male');
    expect(newUser.sex).toEqual(testUser.sex);
  });

  it('getLifeExpectancy() should return lifeExpectancy', function() {
    let newUser = new User([1910, 8, 3], 'male');
    expect(newUser.getLifeExpectancy()).toEqual(70);
  });
});
