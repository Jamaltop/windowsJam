document.addEventListener('DOMContentLoaded', () => {
    const changeTheme = document.querySelector('.change-theme');

    // Восстановление темы
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      changeTheme.style.border = '1px solid whitesmoke';
    }

    if (changeTheme) {
      changeTheme.addEventListener('click', function () {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem("theme", isDark ? "dark" : "light");
        changeTheme.classList.toggle('moved');
        
       if (isDark) {
        changeTheme.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        `
       }
         else {
            changeTheme.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium-icon lucide-sun-medium"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>
            `
         }
        
        changeTheme.style.border = isDark ? '1px solid whitesmoke' : '1px solid black';
      });
    }

    // Восстановление аккаунта
    const currentUserEmail = localStorage.getItem("currentUser");
    if (currentUserEmail) {
      const userData = localStorage.getItem(`user_${currentUserEmail}`);
      if (userData) {
        const user = JSON.parse(userData);
        document.getElementById("user-info").innerHTML = `
          <div class="user-logo" style="width: 30px; height: 30px; display: flex; justify-content: center; align-items: end; padding: 3px">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 448 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
            </svg>
          </div>
          <div class="user-name">${user.name}</div>
          <button class="login-btn" onclick="logout()">Выйти</button>
        `;
        document.getElementById("login-btn").style.display = 'none';
      }
    }
  });

  function feelingLucky() {
    const input = document.getElementById('search-input');
    if (input.value.trim() !== '') {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(input.value)}&btnI=1`;
    }
  }

  function startVoiceInput() {
    const input = document.getElementById('search-input');
    if (!('webkitSpeechRecognition' in window)) {
      alert('Ваш браузер не поддерживает голосовой ввод.');
      return;
    }
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      input.value = speechResult;
      document.getElementById('search-form').submit();
    };
    recognition.onerror = (event) => {
      alert('Ошибка при распознавании голоса: ' + event.error);
    };
  }

  function openModal(id) {
    document.getElementById(id).style.display = "flex";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  function switchToLogin() {
    closeModal('register-modal');
    openModal('login-modal');
  }

  function switchToRegister() {
    closeModal('login-modal');
    openModal('register-modal');
  }

  function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const user = { name, email, password };
    localStorage.setItem(`user_${email}`, JSON.stringify(user));
    localStorage.setItem("currentUser", email);
    alert("Аккаунт создан!");

    document.getElementById("user-info").innerHTML = `
      <div class="user-logo" style="width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
      </div>
      <div class="user-name">${user.name}</div>
      <button class="login-btn" onclick="logout()">Выйти</button>
    `;
    document.getElementById("reg-name").value = '';
    document.getElementById("reg-email").value = '';
    document.getElementById("reg-password").value = '';
    closeModal('register-modal');
    document.getElementById("login-btn").style.display = 'none';
  }

  function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const userData = localStorage.getItem(`user_${email}`);
    if (!userData) {
      alert("Аккаунт не найден.");
      return;
    }
    const user = JSON.parse(userData);
    if (user.password === password) {
      alert("Вход выполнен!");
      document.getElementById("user-info").innerHTML = `
        <div class="user-logo" style="width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
          </svg>
        </div>
        <div class="user-name">${user.name}</div>
        <button class="login-btn" onclick="logout()">Выйти</button>
      `;
      document.getElementById("login-btn").style.display = 'none';
      closeModal('login-modal');
    } else {
      alert("Неверный пароль.");
    }
  }

  function logout() {
    document.getElementById("user-info").innerHTML = '';
    document.getElementById("login-btn").style.display = 'inline-block';
    localStorage.removeItem("currentUser");
    alert("Вы вышли из аккаунта.");
  }