

const containerTwo = document.querySelector('.container-2')
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');


containerTwo.addEventListener('click',function(e){
	//console.log(e.target);
	if( e.target.className == 'thumb'){
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function(){
			jumbo.classList.remove('fade');
		},500)

		thumbs.forEach(function(dipilih){
			dipilih.className = 'thumb';
		})

		e.target.classList.add('active');

	};
});