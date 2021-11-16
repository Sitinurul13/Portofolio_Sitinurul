const txtElement = ['wanita baik hati dan tidak sombong'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();

/* Tombol Scroll Ke Atas */

mybuttton = document.getElementById('top-btn');

// when the user scrolls down 20px frm the top of the document,show the button
window.onscroll = function() {scrollFunction()};

function scrollFuction() {
	if (document.bocy.scrollTop > 20)
}