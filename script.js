function askPetName()
{
    let pokeChosen = sessionStorage.getItem('pokeChosen');
    var petName = prompt("Nice choice! Let's name your " + pokeChosen + "!", pokeChosen);


  if(petName != null)
    {
      document.getElementById("pN").innerHTML = petName +" "; //name for the top header
      document.getElementById("pN2").innerHTML = petName +" says: "; //name for the comment box
    }
  //console.log("petname is : " + petName);
  
  sessionStorage.setItem('saveName', petName); //store for the otherjs LOCALLY + Session so we dont use user's data
  
}

window.onload = choosePet(); //run onLoad


function preload()
{ //sets up scene, clears stuff
  document.getElementById('dblCheck').style.visibility='hidden';

  
  var arr = document.getElementsByClassName('hidden');
  var i;
  for(i = 0; i < arr.length; i++)
    {
      arr[i].style.visibility='visible';
    }
  
  arr = document.getElementsByClassName('allStarter');
  for(i = 0; i < arr.length; i++)
    {
      arr[i].remove();//.style.visibility='hidden';
    }
   
  var img = document.createElement("img");
  var testPet = sessionStorage.getItem('pokeChosen');
//console.log(testPet);
  
  if(testPet == "Squirtle")
  {
      img.src= "https://cdn.glitch.com/d8834e34-f73c-4d66-ab08-1e2dca09d3b5%2Fsquirtle%20nohighlight.jpg?v=1604192584138";
      img.alt="Your pet Squirtle!"
    
  }
  else if(testPet == "Bulbasaur")
  {
      img.src = "https://cdn.glitch.com/d8834e34-f73c-4d66-ab08-1e2dca09d3b5%2Fbulba%20nohighllight.jpg?v=1604192584138";
      img.alt="Your pet Bulbasaur!"

  }
  else if(testPet == "Charmander")
  {
      img.src="https://cdn.glitch.com/d8834e34-f73c-4d66-ab08-1e2dca09d3b5%2Fcharm%20nohighllight.jpg?v=1604192584138";
      img.alt="Your pet Charmander!"

  }
  else
  {
    img.src="https://cdn.glitch.com/d8834e34-f73c-4d66-ab08-1e2dca09d3b5%2FStarters.jpg?v=1604026585140";
    img.alt="Your pet [redacted]!"

  }
  
  img.height="200";
  img.width="200";
  var add = document.getElementById('petIMG');
  add.appendChild(img);
  
  askPetName();
}


function choosePet()
{


  document.getElementById('bulbaH').style.visibility='hidden';
  document.getElementById('squirtH').style.visibility='hidden';
  document.getElementById('charmH').style.visibility='hidden';
  
  document.getElementById('bulbaNH').style.visibility='visible';
  document.getElementById('charmNH').style.visibility='visible';
  document.getElementById('squirtNH').style.visibility='visible';


   const btn = document.querySelector('#btn');
      // handle click button
      btn.onclick = function () {
          const rbs = document.querySelectorAll('input[name="choice"]');
          let selectedValue;
          for (const rb of rbs) {
              if (rb.checked) {
                  selectedValue = rb.value;
                  sessionStorage.setItem('pokeChosen', selectedValue); //store which one user chose
                
                  document.getElementById('dblCheck').style.visibility='visible';
                  break;
              }
          }
          //alert(selectedValue);
        
        if(selectedValue == "Squirtle")
        {
            //alert("Bazinga");
          document.getElementById('squirtH').style.visibility='visible';
          document.getElementById('squirtNH').style.visibility='hidden';

          
          document.getElementById('bulbaH').style.visibility='hidden';
          document.getElementById('bulbaNH').style.visibility='visible';
          document.getElementById('charmH').style.visibility='hidden';
          document.getElementById('charmNH').style.visibility='visible';
         
        }
        else if(selectedValue == "Bulbasaur")
        {
          document.getElementById('bulbaH').style.visibility='visible';
          document.getElementById('bulbaNH').style.visibility='hidden';

          document.getElementById('squirtH').style.visibility='hidden';
          document.getElementById('squirtNH').style.visibility='visible';
          document.getElementById('charmH').style.visibility='hidden';
          document.getElementById('charmNH').style.visibility='visible';
          
        }
        else if(selectedValue == "Charmander")
        {
          document.getElementById('charmH').style.visibility='visible';
          document.getElementById('charmNH').style.visibility='hidden';

          document.getElementById('squirtH').style.visibility='hidden';
          document.getElementById('squirtNH').style.visibility='visible';
          document.getElementById('bulbaH').style.visibility='hidden';
          document.getElementById('bulbaNH').style.visibility='visible';
        }
        else
        {
          document.getElementById('bulbaNH').style.visibility='visible';
          document.getElementById('squirtNH').style.visibility='visible';
          document.getElementById('charmNH').style.visibility='visible';

          document.getElementById('bulbaH').style.visibility='hidden';
          document.getElementById('squirtH').style.visibility='hidden';
          document.getElementById('charmH').style.visibility='hidden';

        }
        
      }
}



function genRandoNum() 
{//the math functions picks a random number from 5 - 20 as a starting weight,then rounds it to the nearest integer (otherwise its a float with a large precision)
  return Math.round(Math.random() * (15) + 5);
}

function chooseSpeechOption()
{//using math random function picks a number from 1 - 4, each action/behavior has 4 possible dialogues, this picks a random speech
  return Math.round(Math.random() * (3) + 1);
}


//assumes poke has been chosen + named, thats how it got this far

$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.bathe-button').click(clickedBatheButton);

  })

//pet constructor
function pet(name,weight,happiness,cleanliness) //probabbly add image option here
{
  this.name = name;
  this.weight = weight;
  this.happiness = happiness;
  this.cleanliness = cleanliness;
}

//load the PetName from earlier
let PETNAME = sessionStorage.getItem('saveName');
document.getElementById("petTalk").innerHTML = "Hi I'm "+ PETNAME + ", nice to meet you! :)";

var speechBubble = 1; //reusable var for speech options


 //console.log("found: " + PETNAME);

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = new pet(PETNAME, genRandoNum(), 100, 40); /*= {name:"Joe", weight:20, happiness:100};*/

  
    function clickedTreatButton() {
      let H = genRandoNum(); //saving Happiness
      let W = genRandoNum(); //saving Weight
      
      // Increase pet happiness
      pet_info['happiness'] += H;
      
      // Increase pet weight
      pet_info['weight'] += W;
      
      //console.log(pet_info['weight'] + " " + pet_info['happiness']);
      speechBubble = chooseSpeechOption(); //treat speech
      
      if(speechBubble == 1)
      {
        document.getElementById("petTalk").innerHTML = "Yayy I love treats! > _ <"; 
      }
      else if(speechBubble == 2)
      {
        document.getElementById("petTalk").innerHTML = "Wow, my favorite flavor!"; 
      }
      else if(speechBubble == 3)
      {
        document.getElementById("petTalk").innerHTML = "Nom nom nom nom c:"; 
      }
      else if(speechBubble == 4)
      {
        document.getElementById("petTalk").innerHTML = "Yummy!"; 
      }
      
      document.getElementById("prevAction").innerHTML = "You gave a treat to your pet. [+"  + H + "H, +" + W +"W]"; 
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      let H = genRandoNum(); //saving Happiness
      let W = genRandoNum(); //saving Weight
      let C = genRandoNum(); //saving cleanliness
      
      // Increase pet happiness
      pet_info['happiness'] += genRandoNum();

      // Decrease pet weight
      pet_info['weight'] -= genRandoNum();
    
      
      //pet gets dirty when playing
      pet_info['cleanliness'] -= genRandoNum();
      
      speechBubble = chooseSpeechOption(); //play speech
      
      if(speechBubble == 1)
      {
        document.getElementById("petTalk").innerHTML = "I love playtime :D"; 
      }
      else if(speechBubble == 2)
      {
        document.getElementById("petTalk").innerHTML = "Pls throw! No Take!! Only throw >:("; 
      }
      else if(speechBubble == 3)
      {
        document.getElementById("petTalk").innerHTML = "weeeeeeeeeeeeeeeeeeeee"; 
      }
      else if(speechBubble == 4)
      {
        document.getElementById("petTalk").innerHTML = "*" + sessionStorage.getItem('pokeChosen') + " noises*"; 
      }
      
    document.getElementById("prevAction").innerHTML = "You played with your pet. [+" + H + "H, -" + W + "W, -" + C +"C]"; 

    checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      let H = genRandoNum(); //saving Happiness
      let W = genRandoNum(); //saving Weight
      let C = genRandoNum(); //saving cleanliness
      
      // Decrease pet happiness
      pet_info['happiness'] -= H;

      
      // Decrease pet weight
      pet_info['weight'] -= W;
      
     //pet gets dirty when playing
      pet_info['cleanliness'] -= C;
      
    speechBubble = chooseSpeechOption(); //exercise speech

    if(speechBubble == 1)
    {
      document.getElementById("petTalk").innerHTML = "Phew! That was great!"; 
    }
    else if(speechBubble == 2)
    {
      document.getElementById("petTalk").innerHTML = "Again ! :D"; 
    }
    else if(speechBubble == 3)
    {
      document.getElementById("petTalk").innerHTML = "weeeeeeeeeeeeeeeeeeeee"; 
    }
    else if(speechBubble == 4)
    {
      document.getElementById("petTalk").innerHTML = "Hey look at what I found!!"; 
    }
      
      document.getElementById("prevAction").innerHTML = "You exercised with your pet. [-" + H + "H, -" + W +"W, -" + C +"C]"; 
      
      checkAndUpdatePetInfoInHtml();

    }

    function clickedBatheButton() {
      let H = genRandoNum(); //saving Happiness
      let C = genRandoNum()*2; //saving cleanliness
      
      //reduces happiness, cleans pet! 
       pet_info['happiness'] -= H;
      
       pet_info['cleanliness'] += C;

      
      speechBubble = chooseSpeechOption(); //bath speech

      if(speechBubble == 1)
      {
         document.getElementById("petTalk").innerHTML = "I dont like baths.... :/"; 
      }
      else if(speechBubble == 2)
      {
        document.getElementById("petTalk").innerHTML = "Can I have a treat now??!"; 
      }
      else if(speechBubble == 3)
      {
        document.getElementById("petTalk").innerHTML = "I smell clean... :)"; 
      }
      else if(speechBubble == 4)
      {
        document.getElementById("petTalk").innerHTML = "Not another bath!! :("; 
      }
      
      document.getElementById("prevAction").innerHTML = "You bathed your pet. [-" + H +"H, +" + C +"C]"; 

      
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating(); 
      pet_info['name'] = sessionStorage.getItem('saveName');
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info['weight'] < 0)
      {
        pet_info['weight'] = 0;
        alert("Please give " + sessionStorage.getItem('saveName')+ " some treats!!");
        
        document.getElementById("petTalk").innerHTML = "I'm hungry... :/"; 
      }
      
      if(pet_info['weight'] > 200)
      {
         pet_info['weight'] = 200;
        alert("Please play or exercise with " + sessionStorage.getItem('saveName')+ "!!");
      document.getElementById("petTalk").innerHTML = "I'm gonna go lay down over there... :/"; 
      }
      
      //check if too dirty
      if(pet_info['cleanliness'] < 0)
        {
          pet_info['cleanliness'] = 0;
          alert("You might need to give " + sessionStorage.getItem('saveName')+ " a bath!!");
         document.getElementById("petTalk").innerHTML = "I hope that smell is not me... :/"; 

        }
      
      //check if pet is sad (no happiness)
      if(pet_info['happiness'] < 0)
      {
        pet_info['happiness'] = 0;
        alert("Please play or give " + sessionStorage.getItem('saveName')+ " some treats!!");
        
        document.getElementById("petTalk").innerHTML = "I'm bored... :/"; 
      }
      
      //check if too happy
      if(pet_info['happiness'] > 200)
      {
        pet_info['happiness'] = 200;
        alert("You need to exercise or bathe " + sessionStorage.getItem('saveName')+ "!!");
        
        document.getElementById("petTalk").innerHTML = "Too much excitement for one day, I'm tired... :/"; 

      }

    }
    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.cleanliness').text(pet_info['cleanliness']);
    }
  