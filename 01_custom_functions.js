// Here, you can define all custom functions, you want to use and initialize some variables

// Variables

const coin = _.sample(["head", "tail"]); // You can flip a coin for your experiment here
// Declare your variables here
var stimulus = [];
const trial_number = 5;


/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here
// var numb = _.sample(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"])
// var rotation = _.sample(["50","150"]);
// var same_or_different = _.sample(["same", "different"]);
// var file_name = numb+"_"+rotation+"_"same_or_different+".jpg";

// function buildStimulus(){
//   var numb = _.sample(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"])
//   var rotation = _.sample(["50","150"]);
//   var same_or_different = _.sample(["same", "different"]);
//   var file_name = numb+"_"+rotation+"_"same_or_different+".jpg";
//
//   return[ {
//     question: "How is the connection betwenn these shapes?",
//     picture: "mental_rotation_images/"+file_name,
//     key1: 's',
//     key2: 'd',
//     s: 'same',
//     d: 'different',
//     expected: same_or_different,
//     rotation: rotation
//
//   }];
// }

// fills a list in disered length with objetcs that contain the info needed for a keyPress Exp
for (var i = 0; i < trial_number; i++) {
  var numb = _.sample(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"])
  var rotation = _.sample(["50","150"]);
  var same_or_different = _.sample(["same", "different"]);
  stimulus.push({
    question: "How is the connection between these shapes?",
    picture: "mental_rotation_images/"+numb+"_"+rotation+"_"+same_or_different+".jpg",
    key1: 's',
    key2: 'd',
    s: 'same',
    d: 'different',
    expected: same_or_different,
    rotation: rotation,
    picture_id: numb
  });
}

/* Hooks
*
*
*/

//Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};
// Declare your hooks here
