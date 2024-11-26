/*
    daily-grind.js

    Here are instructions copied from the assignment:
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Here are the items we need for each coffee:
    name - Bubble Tea for example
    pic - An image of Bubble tea
    day - For example, Wednesday. 
    color - a color to match the coffee
    desc - A description of the coffee
*/
let myDate = new Date();
let myDay = myDate.getDay();
let today = '';

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('day')) {
  //from querystring
  myDay = urlParams.get('day');
}

myDay = parseInt(myDay);

//myDay = 3; //Testing only

switch (myDay) {
  case 0:
    today = 'Sunday';
    coffee = {
      name: 'Black Velvet',
      pic: 'images/sunday.avif',
      day: 'Sunday',
      alt: 'A pic of Black Velvet',
      color: '#958d6b',
      desc: `a rich, bold espresso layered with creamy chocolate syrup and steamed milk, topped with a hint of whipped cream and cocoa dust.`,
    };
    break;

  case 1:
    today = 'Monday';
    coffee = {
      name: 'Whispering Woods',
      pic: 'images/monday.avif',
      day: 'Monday',
      alt: 'A pic of Whispering Woods',
      color: '#75623a',
      desc: `a forest-inspired blend of espresso, hazelnut, and cedarwood-infused syrup, served with a sprinkle of nutmeg and a dash of vanilla.`,
    };
    break;

  case 2:
    today = 'Tuesday';
    coffee = {
      name: 'Midnight Mist',
      pic: 'images/tuesday.avif',
      day: 'Tuesday',
      alt: 'A pic of Midnight Mist',
      color: '#e8dfd3',
      desc: `a dark roast espresso mixed with blackberry syrup, activated charcoal, and a splash of steamed milk for a mysterious, inky finish.`,
    };
    break;

  case 3:
    today = 'Wednesday';
    coffee = {
      name: 'Autumn Ember',
      pic: 'images/wednesday.avif',
      day: 'Wednesday',
      alt: 'A pic of Autumn Ember',
      color: '#e6ceae',
      desc: `a Pumpkin spice latte elevated with a dash of smoky maple syrup and cinnamon stick garnish for a cozy seasonal feel.`,
    };
    break;

  case 4:
    today = 'Thursday';
    coffee = {
      name: 'Velvet Fog',
      pic: 'images/thursday.avif',
      day: 'Thursday',
      alt: 'A pic of Velvet Fog',
      color: '#4f5178',
      desc: `a London Fog-inspired coffee with lavender-infused espresso, steamed milk, and a touch of bergamot.`,
    };
    break;

  case 5:
    today = 'Friday';
    coffee = {
      name: 'Maple Cascade',
      pic: 'images/friday.avif',
      day: 'Friday',
      alt: 'A pic of Maple Cascade',
      color: '#99635a',
      desc: `a velvety latte sweetened with pure maple syrup and finished with a drizzle of caramel and a sprinkle of pecan dust.`,
    };
    break;

  case 6:
    today = 'Saturday';
    coffee = {
      name: 'Spiced Galaxy',
      pic: 'images/saturday.avif',
      day: 'Saturday',
      alt: 'A pic of Spiced Galaxy',
      color: '#7a5d28',
      desc: `espresso blended with cardamom, star anise, and ginger, topped with a frothy milk swirl that mimics a celestial spiral.`,
    };
    break;

  default:
    today = 'something went wrong';
}

//alert(today);
console.log(coffee);

document.getElementById('coffee-cup').innerHTML = coffeeTemplate(coffee);
document.querySelector('html').style.backgroundColor = coffee.color;

function coffeeTemplate(coffee) {
  let myReturn = `
            <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;

  return myReturn;
}
