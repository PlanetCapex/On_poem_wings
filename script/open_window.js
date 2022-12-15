let intro = document.querySelector('.intro');
let intro_text = document.querySelectorAll('.intro_text');

window.addEventListener('DOMContentLoaded', ()=>{
	let right_cont = document.querySelector('.right_cont')
	if(intro.style.top != null){
		right_cont.style.opacity = 0;
	}
	setTimeout(() =>{
		intro_text.forEach((span, idx) => {
			setTimeout(()=>{
				span.classList.add('active');
			}, (idx + 1) * 400)
		});

		setTimeout(()=>{
			intro_text.forEach((span, idx)=>{
				setTimeout(()=>{
					span.classList.remove('active');
					span.classList.add('fade');
				},(idx + 1) * 50)
			})
		}, 2000);

		setTimeout(() => {
			if(intro.style.top != null)
			intro.style.top = '-100vh';
			right_cont.style.transition = "1s";
			right_cont.style.opacity = 1;

		}, 2200);

	})
})