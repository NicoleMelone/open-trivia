export default class Question {
    constructor({ category, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.question = question
        this.answers = [correct_answer, incorrect_answers]
    }

    get Template() {

        return /*html*/`<div class="card p-2 value">
        <div class="card-body">
            <h5 class="card-title">${this.category}</h5>
            <p class="card-text">${this.question}</p>
            <p class="card-text">${this.answers}</p>
        </div>
    </div>`
    }
}

// {
//     "category": "Sports",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "Which country has hosted the 2018 FIFA World Cup?",
//     "correct_answer": "Russia",
//     "incorrect_answers": [
//       "Germany",
//       "United States",
//       "Saudi Arabia"
//     ]
//   },