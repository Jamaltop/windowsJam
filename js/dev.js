

function sendOtziv() {
    let userName = document.getElementById("name").value.trim();
    let message = document.getElementById("otziv").value.trim();

    if (userName === "" || message === "") {
        alert("Заполните все поля!");
        return;
    }

    let botToken = "8194876340:AAF8wIW1P_34xEjJVGoOyOq4OkHIIiNJKF0";
    let chatId = "1769816214";
   
    let text = `👤 *Имя:* ${userName}\n💬 *Отзыв:* ${message}`;
    let url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    let data = {
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            window.money++;
            localStorage.setItem('jamcoins', window.money); 
            alert("Отзыв отправлен!");
            document.getElementById("name").value = "";
            document.getElementById("otziv").value = "";
        } else {
            alert("Ошибка отправки: " + data.description);
        }
    })
    .catch(error => alert("Ошибка отправки! Проверьте консоль."));
}
function sendWork() {
    let workName = document.getElementById("work").value.trim();
    let phoneNumber = document.getElementById("num").value.trim();

    if (workName === "" || phoneNumber === "") {
        alert("Заполните все поля!");
        return;
    }

    let botToken = "8194876340:AAF8wIW1P_34xEjJVGoOyOq4OkHIIiNJKF0";
    let chatId = "1769816214";

    let text = `📢 *Запрос на работу*\n👤 *Имя:* ${workName}\n📞 *Номер:* ${phoneNumber}`;
    let url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    let data = {
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            window.money++;
            alert("Запрос отправлен!");
            document.getElementById("work").value = "";
            document.getElementById("num").value = "";
        } else {
            alert("Ошибка отправки: " + data.description);
        }
    })
    .catch(error => alert("Ошибка отправки! Проверьте консоль."));
}

