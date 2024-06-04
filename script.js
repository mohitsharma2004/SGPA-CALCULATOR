function generateForm() {
    const numSubjects = document.getElementById('numSubjects').value;
    const dynamicFields = document.getElementById('dynamicFields');
    dynamicFields.innerHTML = '';

    for (let i = 0; i < numSubjects; i++) {
        const subjectDiv = document.createElement('div');

        // Single label for both grade and credit
        const label = document.createElement('label');
        label.innerText = `Grade & Credit for Subject ${i + 1}:`;
        subjectDiv.appendChild(label);

        // Create a container for grade and credit inputs (optional for better styling)
        const inputContainer = document.createElement('div');
        inputContainer.style.display = 'flex'; // Makes inputs appear inline

        // Grade input
        const gradeInput = document.createElement('input');
        gradeInput.type = 'text';
        gradeInput.placeholder = 'Grade';
        gradeInput.name = `grade${i}`;
        gradeInput.required = true;
        gradeInput.style.marginRight = '10px'; // Optional spacing between inputs

        // Credit input
        const creditInput = document.createElement('input');
        creditInput.type = 'number';
        creditInput.placeholder = 'Credit';
        creditInput.name = `credit${i}`;
        creditInput.min = '1';
        creditInput.required = true;

        // Add inputs to the container (or directly to subjectDiv if no container)
        inputContainer.appendChild(gradeInput);
        inputContainer.appendChild(creditInput);

        // Add label and input container (or just label) to subjectDiv
        subjectDiv.appendChild(label);
        subjectDiv.appendChild(inputContainer); // Or subjectDiv.appendChild(gradeInput); subjectDiv.appendChild(creditInput);

        dynamicFields.appendChild(subjectDiv);

    }

    document.getElementById('gradesForm').style.display = 'block';
    document.getElementById('subjectForm').style.display = 'none';
}

function resetForm() {
    document.getElementById('gradesForm').style.display = 'none';
    document.getElementById('subjectForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('subjectForm').reset();
    document.getElementById('gradesForm').reset();
}

function calculateCGPA(event) {
    event.preventDefault();
    const numSubjects = document.getElementById('numSubjects').value;
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < numSubjects; i++) {
        const grade = document.querySelector(`input[name=grade${i}]`).value.toUpperCase();
        const credit = parseFloat(document.querySelector(`input[name=credit${i}]`).value);

        const gradePoint = getGradePoint(grade);
        totalGradePoints += gradePoint * credit;
        totalCredits += credit;
    }

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('cgpaValue').innerText = cgpa.toFixed(2);
    document.getElementById('result').style.display = 'block';
    document.getElementById('gradesForm').style.display = 'none';
}

function getGradePoint(grade) {
    const gradePoints = {
        'A+': 10,
        'A': 9,
        'B+': 8,
        'B': 7,
        'C+': 6,
        'C': 5,
        'D': 4,
        'E': 0,
        'F': 0,
        'I': 0
    };

    return gradePoints[grade] || 0;
}