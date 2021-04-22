const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionElem = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
const timeleftDisplay = document.querySelector("#time-left")
const startBtn = document.getElementById('start-button')
const startBox = document.getElementById('start-box')
const scoreBox = document.getElementById('score-box')
const timerBox = document.getElementById('timer')

let currentQuiz = 0
let score = 0
let timeLeft = 15



const quizData = [
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Hypertext Markdown Language",
		c: "Hyperloop Machine Language",
		d: "Hondas Toyotas Mazdas Lexus",
		correct: "a",
	},
	{
		question: "What does CSS stand for?",
		a: "Central Style Sheets",
		b: "Cascading Style Sheets",
		c: "Cascading Simple Sheets",
		d: "Clouds Sun Storm",
		correct: "b",
	},
	{
		question: "What year was Javascript launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct: "b"
	},
	{
		question: "What year was CSS launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct: "a"
	},
   
];

	function startQuiz() {

		startBox.style.display = 'none'
		timerBox.style.display = 'block'
		scoreBox.style.display = 'block'

		var timerInterval = setInterval(function(){
			if(timeLeft === 0) {
				alert("Time Out");

				clearInterval(timerInterval)
			}
			timeleftDisplay.innerHTML = timeLeft;
			timeLeft--;
		}, 1000)
	}


startBtn.addEventListener('click', startQuiz);
	

function deselectAnswers() {
	answerEls.forEach(answerEls => answerEls.checked === false)
}


function loadQuiz() {
	
	deselectAnswers()

	const currentQuizData = quizData[currentQuiz]

	questionElem.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}
loadQuiz();

function getSelected() {
	let answer

	answerEls.forEach(answerEl => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})
	return answer 
}

submitBtn.addEventListener('click', () => {

	const answer = getSelected()

	if (answer) {
		if (answer === quizData[currentQuiz].correct){
			score++
			scoreBox.innerHTML = score
			currentQuiz++
		}

		if (currentQuiz < quizData.length) {
			loadQuiz()	
		} else {
			quiz.innerHTML = `
			<h2> You answered ${score} / ${quizData.length} questions correctly</h2>
			<button onclick = "location.reload()">Reload</button>`
		}
	}
	
})