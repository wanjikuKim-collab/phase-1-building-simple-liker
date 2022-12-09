// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');
const likeGlyph = document.querySelectorAll('.like-glyph')

modal.classList.add('hidden');

for(item of likeGlyph){
  item.addEventListener('click',(e)=>{
    console.log(e.target)
    let like= e.target;
    heartEvent(like);
    console.log(like);
})
}
function heartEvent(like){
  mimicServerCall().then(function(response){
    heartClicked(like);
    console.log("Success!");
    console.log(response);
  }).catch(error=>{
    let modal = document.getElementById('modal')
    modal.className = "";
    console.log(error)

    setTimeout(()=>{
      modal.className="hidden"
    },3000)
  })

}

function heartClicked(like) {
  if(like.innerHTML === EMPTY_HEART) {
    //add class
    like.classList.add('activated-heart');
    like.innerHTML = FULL_HEART;
    console.log("Success!");
  }
  else {
    like.classList.remove('activated-heart');
    like.innerHTML = EMPTY_HEART;
  }
}




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
