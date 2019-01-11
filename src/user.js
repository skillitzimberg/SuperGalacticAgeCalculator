class User {
  constructor(birthday, sex) {
    this.birthYear = birthday[0];
    this.birthMonth = birthday[1];
    this.birthDay = birthday[2];
    this.sex = sex;
    this.age;
    this.lifeExpectancy;

    if(sex === 'male') {
      this.lifeExpectancy = 70;
    }
    else {
      this.lifeExpectancy = 74;
    }
  }

  getLifeExpectancy() {
    return this.lifeExpectancy;
  }

  setAge() {
    debugger;
    let birthday = new Date(this.birthYear, this.birthMonth, this.birthDay);
    let today = new Date();

    let age = today - birthday;
    age = age / 3.154e+10;
    this.age = 1;
  }
}

export { User };
