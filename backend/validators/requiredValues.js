import { check } from "express-validator";
 const requiredValues = (props) => {
     let checks = [];

     // Array passed when calling the function in a route (e.g. [ "username", "password", "emailAddress" ])
     // Create a check for each value in the array
     props.forEach(field => {
         checks.push(
             check(field)
             .notEmpty()
             .withMessage(`${field} is required`),
         )
     })

     return checks;
 }

export default requiredValues;