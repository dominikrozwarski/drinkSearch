const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = (e) => {
	const text = e.target.value;
	console.log(text);

	//checking the value of input

	li.forEach((element) => {
		if (element.textContent.toLowerCase().indexOf(text) !== -1) {
			element.style.display = 'block';
		} else {
			element.style.display = 'none';
		}
	});
	//if drink contain input value drinks is vissible else not
};

search.addEventListener('keyup', searchEngine);
