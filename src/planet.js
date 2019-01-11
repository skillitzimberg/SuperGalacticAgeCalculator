class Planet {
  constructor(planet) {
    this.planetName = planet;
    this.conversionCoefficient;
    // this.mercury = 0.24;
    // this.venus = 0.62;
    // this.mars = 1.88;
    // this.jupiter = 11.86;


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

  // getAgeOnPlanet(userAge) {
  //
  //
  //   let ageOnPlanet = Math.round(userAge / this.conversionCoefficient);
  //   return 15;
  // }

  // getLifeExpectancyOnPlanet(planet, userAge) {
  //
  // }

}

export { Planet };
