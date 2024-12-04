let score = 0;
const answeredQuestions = new Set(); // Track answered questions

// Display the group and student names
const groupName = localStorage.getItem('groupName');
const studentNames = JSON.parse(localStorage.getItem('studentNames')) || [];
document.getElementById('student-info').innerText = `Group: ${groupName}, Students: ${studentNames.join(', ')}`;

// Correct answers (example)
const correctAnswers = {
    1: 'B',
    2: 'C',
    3: 'B',
    4: 'C',
    5: 'C',
    6: 'C',
    7: 'B',
    8: 'D',
    9: 'B',
    10: 'A',
    11: 'A',
    12: 'A',
    13: 'B',
    14: 'A',
    15: 'B',
    16: 'B',
    17: 'B',
    18: 'C',
    19: 'C',
    20: 'A',
    21: 'B',
    22: 'B',
    23: 'B',
    24: 'C',
    25: 'A',
    26: 'B',
    27: 'C',
    28: 'B',
    29: 'C',
    30: 'C',
    31: 'B',
    32: 'C',
    33: 'B',
    34: 'A',
    35: 'B',
    36: 'B',
    37: 'B',
    38: 'C',
    39: 'C',
    40: 'A',
    41: 'A',
    42: 'B',
    43: 'B',
    44: 'A',
    45: 'C',
    46: 'B',
    47: 'B',
    48: 'A',
    49: 'B',
    50: 'B',
    51: 'C',
    52: 'B',
    53: 'B',
    54: 'A',
    55: 'B',
    56: 'B',
    57: 'B',
    58: 'B',
    59: 'B',
    60: 'A',
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
