// script.js
document.getElementById('akanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;

    const [year, month, day] = birthday.split('-');
    const CC = parseInt(year.slice(0, 2));
    const YY = parseInt(year.slice(2, 4));
    const MM = parseInt(month);
    const DD = parseInt(day);

    if (DD <= 0 || DD > 31 || MM <= 0 || MM > 12) {
        alert("Please enter a valid date.");
        return;
    }

    const dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;


    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName;
    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    document.getElementById('result').textContent = `Your Akan name is ${akanName}`;
});