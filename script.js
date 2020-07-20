var name = "Brielle Robinson", String;
var age = "27", Number;
var birthday = "July 28", String;
var heyGirl = false, Boolean;
var lifeEvents = ["I was Born in Detroit, Michigan",
                  "I went to SVSU and Grand Circus",
                  "I love puppies and margaritas",
                  "I miss travelling",
                  "I am a plant mom"];

if (heyGirl === true) {
    console.log ("my name is " + name + "and I am trying to practice Javascript" + "I am"
     + age + "years old, and its almost my birthday");
} else {
    console.log ("my name is " + name + "and I am trying to practice Javascript"
     + "my birthday is " + birthday + " and I will be 28 years old");
};

for (let i = 0; i < lifeEvents.length; i++) {
    console.log (lifeEvents[i]);    
};

var counter = 0;
while (true) {
   var randomNumber = Math.floor(Math.random() * 11);  
if (randomNumber !== 5) {
    counter++;
    console.log (randomNumber !==5)
} else {
    counter ++;
    console.log ("5 === 5. It took" + counter + "iterations to randomly generate the number 5.");
    break;
}
}
                


