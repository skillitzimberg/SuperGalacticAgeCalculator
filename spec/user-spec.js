import { User } from './../src/User';

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

  it('setAge() should set age', function() {
    let newUser = new User([1910, 8, 3], 'male');

    let birthday = new Date(1910, 8, 3);
    let today = new Date();
    let age = today - birthday;
    age = age / 3.154e+10;

    newUser.setAge();
    expect(newUser.age).toEqual(age);
  });
});
