function compareJSONObjects(json1, json2) {
    const sortedJSON1 = JSON.stringify(json1, Object.keys(json1).sort());
    const sortedJSON2 = JSON.stringify(json2, Object.keys(json2).sort());
  
    return sortedJSON1 === sortedJSON2;
  }
//Object.keys returns array of keys like name and age
//sort returns the array by sorting in alphabetical order
  const json1 = {
    "name": "Person 1",
    "age": 5
  };
  
  const json2 = {
    "age": 5,
    "name": "Person 1"
  };
  
 
   const result = compareJSONObjects(json1, json2); 

   if (result === true){
    console.log("Compared JSON has Same Properties")
   }
   else{
    console.log("Compared JSON has differnt Properties")
   }



  