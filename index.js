// Write your code here!
/*const body = document.body
body.append ("Hi, welcome to Moringa")
*/

const mainElement = document.getElementById('main');

// Check if the main element exists
if (mainElement) {
    // Remove the main element from the DOM
    mainElement.remove();
}
   const newHeader = document.createElement('h1'); //'newHeader' variable that points to an <h1> node"
   newHeader.textContent = 'WACHIRA is the champion';
   newHeader.id = "victory"
   //document.body.appendChild(newHeader);