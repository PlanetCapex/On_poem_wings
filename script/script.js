let toggle = document.getElementById("toggle");

toggle.addEventListener("click", function(){
  let overlay = document.getElementById("overlay");
    toggle.classList.toggle("active");
    overlay.classList.toggle("open");

});

fetch("../storage/content.json")
   	.then(response => response.json())
    .then(function(jsp) {
    	let books = document.getElementById('books');
    	let length = 0;
    	for(let i = 0; i < jsp.content_base.length; i++)
    		length += jsp.content_base[i].stihi.length;
    	books.innerHTML = `${length}`;
    })
fetch("../storage/chitati.json")
    .then(response => response.json())
    .then(function(jsp) {
        let el = document.getElementById('length');
        let length = jsp.content_base.length;
        el.innerHTML = `${length}`;
    })
