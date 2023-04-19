
const pieces = document.querySelectorAll('.piece');

function shuffle(){
  pieces.forEach(piece=>{
    piece.style.order=Math.floor(Math.random()*4)+1
    console.log

  })
}
let emptyPiece = null;
pieces.forEach((piece) => {
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragover', dragOver);
  piece.addEventListener('drop', drop);
});

function dragStart() {
  emptyPiece = this;
  setTimeout(() => (this.style.display = 'fixed'), 0);
}

function dragOver(event) {
  event.preventDefault();
}

function drop() {
  this.parentNode.insertBefore(emptyPiece, this);
  this.style.border = '2px solid #000';
  emptyPiece.style.display = 'block';
  emptyPiece = null;
}
