//1.

var json = [{
    "Name" : "Lokesh", 
    "Deg" : "Mech.Engg",
    "Place" : "Chennai",
    "Gender": "Male",
    "Language" : "Tamil & English",
    "Hobby" : "Cricket & Social Activities"

}];

// using for in loop
console.log("Using For in loop:");

for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log("Name: ",json[key].Name);
      console.log("Deg: ",json[key].Deg);
      console.log("Place: ",json[key].Place);
      console.log("Gender: ",json[key].Gender);
      console.log("Language: ",json[key].Language);
      console.log("Hobby: ",json[key].Hobby);

    }
    }

// Using for loop  
console.log("Using For loop:");

for(let i = 0; i < json.length; i++) {
    let item = json[i];
    console.log('Name: ', item.Name);
    console.log('Deg: ', item.Deg);
    console.log('Place: ', item.Place);
    console.log('Gender: ', item.Gender);
    console.log('Language: ', item.Language);
    console.log('Hobby: ', item.Hobby);
   
}

// Using forEach
console.log("Using ForEach loop:");

json.forEach((item) => {
    
    console.log('Name: ', item.Name);
    console.log('Deg: ', item.Deg);
    console.log('Place: ', item.Place);
    console.log('Gender: ', item.Gender);
    console.log('Language: ', item.Language);
    console.log('Hobby: ', item.Hobby);
   
})

// Using for of loop
console.log("Using For of loop:");

for (const item of json){
    
    console.log('Name: ', item.Name);
    console.log('Deg: ', item.Deg);
    console.log('Place: ', item.Place);
    console.log('Gender: ', item.Gender);
    console.log('Language: ', item.Language);
    console.log('Hobby: ', item.Hobby);
   
}

