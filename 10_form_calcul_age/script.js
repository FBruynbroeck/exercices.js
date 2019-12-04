function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return ageDate.getUTCFullYear() - 1970;
}

function displayAge(e, value) {
    if (value) {
        var date = new Date(value);
        var age = calculateAge(date);
        if (age < 0) {
            document.getElementById('age').innerHTML = 0;
        } else {
            document.getElementById('age').innerHTML = age;
        }
    }
    e.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('monform').addEventListener("submit", function() {displayAge(event, this.date.value);});
});
