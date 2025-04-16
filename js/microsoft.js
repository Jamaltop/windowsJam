
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const loading = document.querySelector('.loader');
const poisk = document.querySelector('.open-poisk');

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
        window.location.href = 'index.html'; 
    }, 6000);
});

removeBtn.addEventListener('click', () => {
    localStorage.removeItem('yandexInstalled');
    alert('Яндекс удалён!');
    showLoading();
    window.location.href = 'index.html'; 
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
        window.location.href = 'index.html';
    }, 6000);
});

removeGoogle.addEventListener('click', () => {
    localStorage.removeItem('googleInstalled');
    alert('Google удалён!');
    showLoading();
    window.location.href = 'index.html';
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
