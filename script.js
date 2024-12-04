// Clear localStorage when landing on the index page
if (window.location.pathname.endsWith('index.html')) {
    localStorage.clear();
}

document.getElementById('startForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture the input values
    const groupName = document.getElementById('groupName').value;
    let studentNames = [];
    
    // Loop through the student name inputs, push non-empty values
    for (let i = 1; i <= 6; i++) {
        let studentName = document.getElementById(`studentName${i}`).value.trim();
        if (studentName) {
            studentNames.push(studentName);  // Push only non-empty names
        }
    }

    // Save the group name and student names to localStorage
    localStorage.setItem('groupName', groupName);
    localStorage.setItem('studentNames', JSON.stringify(studentNames));

    // Redirect to quiz page
    window.location.href = 'quiz.html';
});
