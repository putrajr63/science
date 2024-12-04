let score = 0;
const answeredQuestions = new Set(); // Track answered questions

// Display the group and student names
const groupName = localStorage.getItem('groupName');
const studentNames = JSON.parse(localStorage.getItem('studentNames')) || [];
document.getElementById('student-info').innerText = `Group: ${groupName}, Students: ${studentNames.join(', ')}`;

// Correct answers (example)
const correctAnswers = {
    40: 'A',
    41: 'B',
    42: 'C',
    43: 'D',
    // Add more questions and answers as needed
};

// Handle question submission
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the question code and selected answer
    const questionCode = document.getElementById('questionCode').value;
    const answerInput = document.querySelector('input[name="answerInput"]:checked')?.value;

    if (!questionCode) {
        alert('Please enter a question code.');
        return;
    }

    if (!answerInput) {
        alert('Please select an answer.');
        return;
    }

    if (answeredQuestions.has(questionCode)) {
        alert('This question has already been answered. Try another question.');
        return;
    }

    // Check if the answer is correct
    if (correctAnswers[questionCode] === answerInput) {
        score += 2; // Increase score for correct answer
        alert('Correct answer!');
    } else {
        score -= 1; // Decrease score for incorrect answer
        alert('Incorrect answer!');
    }

    // Update the score
    document.getElementById('score').innerText = `Score: ${score}`;

    // Mark the question as answered
    answeredQuestions.add(questionCode);

    // Clear the input fields for the next question
    document.getElementById('questionCode').value = '';
    document.querySelectorAll('input[name="answerInput"]').forEach(input => input.checked = false);

    // Show the Finish button if there are answers
    if (answeredQuestions.size > 0) {
        document.getElementById('finishButton').style.display = 'inline-block';
    }
});

// Finish button logic
document.getElementById('finishButton').addEventListener('click', function() {
    alert(`Game finished! Your final score is: ${score}`);
    localStorage.setItem('finalScore', score);
    window.location.href = 'finish.html'; // Redirect to the finish page
});
