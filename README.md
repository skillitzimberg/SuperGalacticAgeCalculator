# Super Galactic Age Calculator

#### By Scott Bergler

## Table of contents

**[Description](#description)**<br>
**[Installation Instructions](#setup/installation)**<br>
**[Resources](#resources)**<br>
**[Planning](#planning)**<br>
**[Specifications](#specifications)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>

## Description
Super Galactic Age Calculator takes a person’s age in Earth years and returns their age in Mercury years, Venus years, Mars years, and Jupiter years.

It also determines how many years a user has left to live on each planet assuming their bodies would last that long on that planet.

If a user has already surpassed the average Earth life expectancy, it will determine how long they have lived past their life expectancy.

## Setup/Installation
Clone the code from [GitHub](https://github.com/skillitzimberg/SuperGalacticAgeCalculator).

## Resources
[ABOUTTEMPLATEJS](./ABOUTTEMPLATE.md)  

## Planning
### The Assignment:
Write an application that determines a user’s age based on a planet’s solar years.  

Take a person’s age in Earth years and create a class that does the following:  

Returns their age in Mercury years. (A Mercury year is .24 Earth years.)  

Returns their age in Venus years. (A Venus year is .62 Earth years.)  

Returns their age in Mars years. (A Mars year is 1.88 Earth years.)  

Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)  

Determines how many years a user has left to live on each planet.  
- The application will have to calculate the user’s life expectancy.  

You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.  

If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.  

### Breaking down the project  
- Classes:
* What classes will be needed?
* Does each planet have it's own class or is there a single Planet class with each planet's solar period as a property?
* Is there a User class?
* Is there a life expectancy class or is this a User method?

- Methods
* What methods will be needed?
* Does each planet have it's own method for age calculation or is there a single method that takes a given planet's relative year as an argument?
* Is there a life expectancy method? To which class does it belong?

### To Do
* get user's birth year, month, and day as integers
* get user's sex
* if they are not already integers, convert user's birth year, month, and day to integers
* assign new Date(year, month, day) as user's birthday
* assign new Date() as today
* subtract user's birthday from today to get their age in milliseconds
* multiply user's age in milliseconds by 3.154e+10 to convert age in milliseconds into age in years
* get a planet's year coefficient
* divide age in years by a planet's year coefficient to get the user's age on that planet.
* create a life expectancy array associating sex with life expectancy
* use sex to find life expectancy
* divide life expectancy in years by the planet's year coefficient to get the user's life expectancy on that planet.
* if the user's age is greater than their life expectancy:
 - subtract the user's life expectancy from their age
 - divide the difference by the planet's year coefficient  to find how long they have lived past their expire date

* Create Planet class
* Create User class
* Create Calculator class

2. Specifications:
### Specifications for User:
* Spec 1: instantiate a user:
- [x] **Expect:**  
Input: birthday: [1910, 8, 3], sex: 'male';  
Output: a user with properties: birthday: [1910, 8, 3], sex: 'male';

* Spec 7: use the user's sex to find life expectancy:
- [x] **Expect:**  
Input: male;  
Output: 70;

* Spec 2: set user's life expectancy:
- [x] **Expect:**  
Input: user.setLifeExpectancy('male');  
Output: None;

* Spec 3: set user's age:
- [x] **Expect:**  
Input: birthday: [1910, 8, 3];  
Output: 108.41751068715917;

* Spec 4: get user's age:
- [x] **Expect:**  
Input: user.getAge();  
Output: 108.41751068715917;

* Spec 5: get user's sex:
- [ ] **Expect:**  
Input: user.getSex();  
Output: male;

* Spec 6: get user's life expectancy:
- [x] **Expect:**  
Input: user.getLifeExpectancy();  
Output: 70;

* Spec 1: assign new Date(year, month, day) as user's birthday:
- [ ] **Expect:**  
Input: 1910, 8, 3;  
Output: Sat Sep 03 1910 00:00:00 GMT-0800 (Pacific Daylight Time);

* Spec 2: assign new Date() as today:
- [x] **Expect:**  
Input: new Date();  
Output: Fri Jan 11 2019 09:51:27 GMT-0800;

* Spec 3: subtract user's birthday from today to get their age in milliseconds:
- [x] **Expect:**  
Input: today, birthday;  
Output: 3419488287073;

* Spec 4: divide user's age in milliseconds by 3.154e+10 to convert age in milliseconds into age in years:
- [x] **Expect:**  
Input: 3419488287073, 3.154e+10;  
Output: 108.41751068715917;

### Specifications for Planet:
* Spec 5: get a planet's year coefficient:
- [x] **Expect:**  
Input: Mercury;  
Output: 0.24;

* Spec 6: divide the user's age in years by a planet's year coefficient to get the user's age on that planet:
- [x] **Expect:**  
Input: 108.41751068715917, 0.24;  
Output: 451.7396278631632;

* Spec 8: divide life expectancy in years by the planet's year coefficient to get the user's life expectancy on that planet:
- [x] **Expect:**  
Input: 70, 0.24;  
Output: 291.6666666666667;

#### if the user's age is greater than their life expectancy:
* Spec 9: subtract the user's life expectancy from their age to find how long they have lived past their expire date:
- [x] **Expect:**  
Input: 108.41751068715917, 70;  
Output: 38.417510687159165;

* Spec 10: divide the difference by the planet's year coefficient to find how long they have lived past their expire date on that planet:
- [x] **Expect:**  
Input: 38.417510687159165, 0.24;  
Output: 160.07296119649652;

* Spec 11: divide the difference by the planet's year coefficient to find how long they have lived past their expire date on that planet:
- [x] **Expect:**  
Input: 38.417510687159165, 0.24;  
Output: 160.07296119649652;

1. Configuration/dependencies
 - Babel: defined in package.json devDependencies
 - ESLint: defined in package.json devDependencies
 - Jasmine: defined in package.json devDependencies
 - Karma: defined in package.json devDependencies
 - Webpack: defined in package.json devDependencies
 - Bootstrap: defined in package.json devDependencies
 - jQuery: defined in package.json devDependencies
 - Popper: defined in package.json devDependencies

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used

HTML, CSS, Json, dotnet.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler **
