/*var userName = {
    name: "Sumit Kulkarni",
    age: 20,
    designation: "Developer",
    address: {
      street: "FC Road",
      city: "pune"
    }
  }
  */
 console.log("Shallow Copying");

 var employeeData = {
    name: "Sumit",
    age: 31,
    designation: "Developer",
    address: {
      state: "Delhi",
      country: "India"
    }
  }
  console.log("source State data "  )

  //Shallow copying
  var destinationObject = {};
  
  for(property in employeeData) {
    destinationObject[property] = employeeData[property];
  }
  
  console.dir(employeeData);
  
  employeeData.address.state = "Haryana";
  //changes done in both employeeData and destinationObject
  console.log("Source Object Data Updated....")
  console.log(destinationObject);
  
  console.dir("Destination State Data: "  + destinationObject.address.state);



  //deep copying

  //we can convert the object to the JSON string using JSON.stringify. Once the Object has been stringified, it can be converted back to object using “JSON.parse” and saved into a separate object. This will help us achieve a deep copy of the specified object.

 

  console.log("Deep Copying");

  var userInfo2 = {
    name: "Sumit",
    age: 20,
    designation: "Developer",
    address: {
      streetNumber: 10,
      city: "Mumbai",
      country: "India"
    }
  };
  console.log(userInfo2);
  
  console.log("property city of source object is " + userInfo2.address.city );
  
  var stringifiedObject = JSON.stringify(userInfo2);
  
  var newDeepCopy = JSON.parse(stringifiedObject);

  newDeepCopy.address.city = "Pune";

  //newDeepCopy[address][city] ="Mumbai";
  console.log("property city of updated object is " + newDeepCopy.address.city );

  //console.dir(userInfo2);

  
  console.dir(newDeepCopy)