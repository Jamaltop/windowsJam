
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const loading = document.querySelector('.loader');
const poisk = document.querySelector('.open-poisk');
window.money = Number(localStorage.getItem('jamcoins')) || 0;
const yandex = document.querySelector('.yandex');
const installBtn = document.getElementById('installYandex');
const removeBtn = document.getElementById('removeYandex');

installBtn.addEventListener('click', () => {
    if(localStorage.getItem('yandexInstalled') === 'true') {
        alert('Яндекс уже установлен!');
        return;
    }
    showLoading();
    setTimeout(() => {
        localStorage.setItem('yandexInstalled', 'true');
        window.location.href = 'main.html'; 
    }, 6000);
});

removeBtn.addEventListener('click', () => {
    localStorage.removeItem('yandexInstalled');
    alert('Яндекс удалён!');
    showLoading();
    window.location.href = 'main.html'; 
});

const google = document.querySelector('.google');
const installGoogle = document.getElementById('installGoogle');
const removeGoogle = document.getElementById('removeGoogle');

installGoogle.addEventListener('click', () => {
    if (localStorage.getItem('googleInstalled') === 'true') {
        alert('Google уже установлен!');
        return;
    }
    showLoading();
    setTimeout(() => {
        localStorage.setItem('googleInstalled', 'true');
        window.location.href = 'main.html';
    }, 6000);
});

removeGoogle.addEventListener('click', () => {
    localStorage.removeItem('googleInstalled');
    alert('Google удалён!');
    showLoading();
    window.location.href = 'main.html';
});
const installCSGOCaseBtn = document.querySelector('#installCS');
const removeCSGOCaseBtn = document.querySelector('#removeCS');

installCSGOCaseBtn.addEventListener('click', () => {
    if(localStorage.getItem('csgoCaseInstalled') === 'true') {
        alert('CS:GO CASE уже установлен!');
        return;
    }
    else if(window.money >= 1){
        showLoading();
        console.log(window.money);
        window.money--;
localStorage.setItem('jamcoins', window.money);
        setTimeout(() => {
            localStorage.setItem('csgoCaseInstalled', 'true');
            window.location.href = 'main.html'; 
        }, 6000);
    }

    else{
        alert('Не хватает Jamcoin-ов!');
    }
    
});

removeCSGOCaseBtn.addEventListener('click', () => {
    localStorage.removeItem('csgoCaseInstalled');
    alert('CS:GO CASE удалён!');
    showLoading();
    window.location.href = 'main.html'; 
});


poisk?.addEventListener('click', () => {
    alert('В разработке!');
});

function showLoading() {
   loading.style.display = 'flex';
   main.style.display = 'none';
   header.style.display = 'none';
   setTimeout(() => {
    loading.style.display = 'none';
    header.style.display = 'flex';
    main.style.display = 'flex';
   },6000)
}
