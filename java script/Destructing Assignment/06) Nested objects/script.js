const person = {
    name: "Rahul",
    age: 21,
    address: {
      street: "B10, Block D, munshipuliya.",
      city: "Sector 11, Lucknow",
      state: "Uttar Pradesh",
    },
  };

  function ExtractedObj(obj){
    const{
        name,
        address:{
            street
        }
    } = obj
    return {name,street}
  }

  console.log(ExtractedObj(person));