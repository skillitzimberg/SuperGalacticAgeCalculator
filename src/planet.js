import { User } from './../src/User';

class Planet {
  constructor(planet) {
    this.planetName = planet;
    this.conversionCoefficient;
  }

  setConversionCoefficient() {
    if(this.planetName === 'Mercury') {
      this.conversionCoefficient = 0.24;
    } else if (this.planetName === 'Venus') {
      this.conversionCoefficient = 0.62;
    } else if (this.planetName === 'Mars') {
      this.conversionCoefficient = 1.88;
    } else if (this.planetName === 'Jupiter') {
      this.conversionCoefficient = 11.86;
    }
  }

  getAgeOnPlanet(userAge) {
    let ageOnPlanet = Math.round(userAge / this.conversionCoefficient);
    return ageOnPlanet;
  }

  getLifeExpectancyOnPlanet(userLifeExpectancy) {
    debugger;
    let exoPlanetLifeExpectancy = Math.round(userLifeExpectancy / this.conversionCoefficient);
    return exoPlanetLifeExpectancy;
  }

  pastExpirationDate() {
    return 9;
  }

}

export { Planet };
