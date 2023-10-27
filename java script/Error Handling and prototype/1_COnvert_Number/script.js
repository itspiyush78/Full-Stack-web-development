function ConvertToNumber(str) {
    try {
      if (isNaN(str)) {
        throw new Error();
      }
      return Number(str);
    } catch (error) {
       return "Invalid Input";
    }
  }
  
  console.log(ConvertToNumber("abc"));
  console.log(ConvertToNumber("123"));