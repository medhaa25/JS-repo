let count = 0;

function increaseCount() {
    count++; 
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
  }
    function resetCount() {
    document.getElementById('countDisplay').innerHTML= 0; 
    }
    
  function reset() {
    resetCount();
    alert("Followers count has been reset.")
  }
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
    }



function checkCountValue() {
        if (count === 10) {
          alert("Your Instagram post gained 10 followers! Congratulations!");
        } else if (count === 20) {
          alert("Your Instagram post gained 20 followers! Keep it up!");
        }
      }