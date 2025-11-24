class Question {
    constructor (text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = Number(difficulty);
    }
    shuffleChoices(){
        for(let i = this.choices.length; i > 0 ; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [this.choices[i], this.choices[random]] = [this.choices[random], this.choices[i]];
        }
    }
}