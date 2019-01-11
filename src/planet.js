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
    debugger;
    let ageOnPlanet = Math.round(userAge / this.conversionCoefficient);
    return ageOnPlanet;
  }

  // getLifeExpectancyOnPlanet(planet, userAge) {
  //
  // }

}

export { Planet };
