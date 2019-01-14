class User {
  constructor(birthday, sex) {
    this.birthYear = birthday[0];
    this.birthMonth = birthday[1];
    this.birthDay = birthday[2];
    this.sex = sex;
    this.age;
    this.lifeExpectancy;

    if(sex === 'female') {
      this.lifeExpectancy = 74;
    }
    else {
      this.lifeExpectancy = 70;
    }
  }

  getLifeExpectancy() {
    return this.lifeExpectancy;
  }

  setAge() {
    let birthday = new Date(this.birthYear, this.birthMonth, this.birthDay);
    let today = new Date();

    let age = today - birthday;
    age = age / 3.154e+10;
    this.age = age;
  }
}

export { User };
