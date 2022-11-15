// Write your solution in this file
var customerName = 'bob';
const leastFavoriteCustomer = "hello"
var upperCaseCustomerName = ()=>{
    customerName = customerName.toUpperCase();
    }
var setBestCustomer = () => {
    /* Variables declared without var keyword inside any function becomes global variables automatically. */
    bestCustomer = 'not bob';
  
}
    
var overwriteBestCustomer = () => bestCustomer = 'maybe bob';
var changeLeastFavoriteCustomer = () => leastFavoriteCustomer = "kiki";
