import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


//Private
function _draw() {
    let questions = ProxyState.questions;
    let template = ''
    questions.forEach(v => template += v.Template)
    document.getElementById("app").innerHTML = `<div className="card-columns questions">
    <button class="btn btn-info" onclick="app.QuestionsController.getAll()">More</button>
    ${template}</div>`
}

//Public
export default class QuestionsController {
    constructor() {
        ProxyState.on("questions", _draw);
        questionsService.getAllQuestions()
    }

    getAll() {
        questionsService.getAllQuestions()
    }

}