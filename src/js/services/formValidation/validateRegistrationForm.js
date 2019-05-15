// Notice the export statement and the import in home.js
// Notice the structure of the parameter and the return value
export default function validateRegistrationForm(formValues) {

  const result = {
    username: validateUserName(formValues.username),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    age: validateAge(formValues.age),
    profession: validateProfession(formValues.profession),
    experience: validateExperience(formValues.experience),
  };

  let field, isValid = true;
  for(field in result) {
    isValid = isValid && result[field];//true && true=true true&& false=false
  }

  return {
    isValid,
    result,
  };

}

/* Part 1 - Regular expressions 
   Write each of the functions below using a regular expression
   to do the actual validation whenever possible.  
   
   You can write the expressions yourself or find one on the internet.  
   
   You might test your regular expressions
   in the html page I gave you OR you might create a codepen or jsfiddle
   playground to test your functions as you write them.

   The function above calls all of these functions.  You're ready to add 
   validation to home.js.
*/

// must be longer than 3 chars.  Use a regular expression.
function validateUserName(name) {
  const pattern=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
  return pattern.test(name);
}

// must be a valid email address.  Use a regular expression
function validateEmail(email) {
  const pattern=/\S+@\S+\.\S+/;
  return pattern.test(email);
}

// must be a valid 10 digit phone number.  Use a regular expression
function validatePhone(phone) {
  const pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return pattern.test(phone);
}

// must be between 10 and 25 inclusive.  Use a regular expression
// to make sure that the age is a 2 digit number before checking the range.
function validateAge(age) {
  const pattern=/^(1[0-1]\d|\d{1,2})$/;
  if(age<=10&&age>=25)
  {
    return pattern.test(age);
  }
  else
    return false;
}

// must be either school, college, trainee or employee.  No reg exp.
function validateProfession(profession) {
  if(profession=="school"||profession=="trainee"||profession=="employee")
  return true;
  else
  return false;
}

// must be between 0 and 4 years exclusive.  Use a regular expression.
function validateExperience(experience) {
  const pattern=/\b(0?[1-9]|1[0-4])\b/g;
  return pattern.test(experience);
}
