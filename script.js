function validEmail(str) {
  // Regular expression to match email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Test the input string against the regex pattern
  return emailRegex.test(str);
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
