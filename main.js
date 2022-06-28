// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

window.onload = function(){

  const likeBtn = document.querySelectorAll('.like-glyph');
  errorMsg = document.querySelector('#modal');
  function popUpMsg () {
    errorMsg.className = "hidden";
  }
  document.addEventListener("click", function(e){
    if (e.target.tagName === 'SPAN' ){
      if (e.target.innerText === EMPTY_HEART){
        mimicServerCall()
        .then(response => {
          e.target.innerText = FULL_HEART;
          e.target.className = "activated-heart";
        })
        .catch(error => {
          errorMsg.classList.remove("hidden");
          setTimeout(popUpMsg, 3000);
        });
      } else if (e.target.innerText===FULL_HEART) {
        e.target.classList.remove ("activated-heart");
        e.target.className = 'like-glyph';
        e.target.innerText = EMPTY_HEART;
      }
    }
  });


  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
};