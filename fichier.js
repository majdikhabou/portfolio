function submitQuiz() {
    var correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'b',
        q9: 'b',
        q10: 'a'
    };

    var totalQuestions = 10;
    var score = 0;
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Résultats :</h2>';
    
    for (var question in correctAnswers) {
        var userAnswer = document.querySelector('input[name="'+question+'"]:checked');
        if (userAnswer) {
            if (userAnswer.value === correctAnswers[question]) {
                score++;
                resultDiv.innerHTML += '<p class="correct">Question ' + question.slice(1) + ': Correct</p>';
            } else {
                resultDiv.innerHTML += '<p class="incorrect">Question ' + question.slice(1) + ': Incorrect. La bonne réponse était ' + correctAnswers[question].toUpperCase() + '.</p>';
            }
        } else {
            resultDiv.innerHTML += '<p class="incorrect">Question ' + question.slice(1) + ': Vous n\'avez pas répondu. La bonne réponse était ' + correctAnswers[question].toUpperCase() + '.</p>';
        }
    }

     alert ('Votre score : ' + score + '/' + totalQuestions ) ;

}

function envoyermail() {
    alert('message envoyer')
}