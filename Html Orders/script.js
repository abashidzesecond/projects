function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "shield") {  // პაროლი shield
        window.location.href = "./home.html";  // გადადიხარ biography.html ფაილზე
    } else {
        alert("არასწორი პაროლი");  // თუ პაროლი არასწორია
    }
}

function showAutobiography(name) {
    var biography = "";
    if (name === "გიორგი პეტრიაშვილი") {
        biography = "გიორგი პეტრიაშვილი არის ექსპერტი ჯანმრთელობის სფეროში. მას აქვს 10 წლიანი გამოცდილება...";
    } else if (name === "მარიამ კობახიძე") {
        biography = "მარიამ კობახიძე არის ტექნოლოგიების სფეროს წამყვანი სპეციალისტი. მუშაობს მსოფლიოს საუკეთესო კომპანიებში...";
    }
    alert(biography);
}

// ფუნქცია "უკან დაბრუნება"
function goBack() {
    window.location.href = "/index.html";  // გადადის login.html ფაილზე
}
