const questions = [
	{
		qn: 'What does JS stand for?',
		ans: 0,
		options: ['JavaScript', 'Juice Straw', 'Johnny Smith', 'Java Sumo'],
	},
	{
		qn: 'Who is the current president of the United States?',
		ans: 0,
		options: ['Who?', 'Donald Trump', 'Kanye West', 'Barack Obama'],
	},
	{
		qn: "What's up",
		ans: 1,
		options: ['Buttercup', 'Dawg', 'Nothing Much', 'Hbu'],
	},
];

const buildQuiz = () => {
	const output = [];

	questions.forEach((question, index) => {
		output.push(
			`<div class='question' id='${index}'><h3>${question.qn}</h3></div><div class='options'>`
		);
		question.options.forEach((option, key) => {
			console.log(index);
			output.push(`
            <label id=q${index}o${key}><input type="radio" name="q${index}" value=${key}>${option}</label><br/>
            `);
		});
		output.push(`</div>`);
	});

	quizContainer.innerHTML = output.join('');
};

const handleSubmit = () => {
	const options = quizContainer.querySelectorAll('.options');

	const results = questions.map((question, index) => {
		//clear all previously-set styles
		options[index]
			.querySelectorAll('label')
			.forEach((item) => (item.style.color = 'black'));

		//find out which input is chosen
		const chosen = options[index].querySelector(
			`input[name=q${index}]:checked`
		);

		//pick the label of that chosen input
		const label = options[index].querySelector(`#q${index}o${chosen.value}`);

		//show correct/wrong ans
		if (chosen.value == question.ans) {
			label.style.color = 'lightgreen';
			// console.log(label);
			return true;
		} else {
			label.style.color = 'red';
			return false;
		}
	});

	const score = results.filter((result) => result == true).length;
	console.log(results);

	resultsContainer.innerHTML = `<h4>You got ${score}/${results.length}.</h4>`;
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', handleSubmit);

buildQuiz();
