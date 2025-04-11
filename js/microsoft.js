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
       setTimeout(()=> {
        localStorage.setItem('yandexInstalled', 'true');
        
        window.location.href = 'main.html'; 
       },6000) 
        
    });

    removeBtn.addEventListener('click', () => {
        localStorage.removeItem('yandexInstalled');
        alert('Яндекс удалён!');
        showLoading();
        window.location.href = 'main.html'; 
    });



poisk.addEventListener('click', () => {
    alert('В разработке!')
})

function showLoading() {
    loading.style.display = 'flex';
    
    setTimeout(() => {
        loading.style.opacity = '1';
        setTimeout(() => {
            loading.style.display = 'none'; 
            yandex.style.display = 'flex';
            
        }, 5000);
    }, 1000);
}
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

const loading = document.createElement('div');
loading.id = 'loading';
loading.style.position = 'fixed';
loading.style.top = '0';
loading.style.left = '0';
loading.style.width = '100%';
loading.style.height = '100%';
loading.style.background = 'rgba(0, 0, 0, 0.9)';
loading.style.color = 'white';
loading.style.display = 'flex';
loading.style.alignItems = 'center';
loading.style.justifyContent = 'center';
loading.style.fontSize = '24px';
loading.style.opacity = '1';
loading.style.transition = 'opacity 0.5s ease';
loading.innerHTML = `
    <div>
        <p>Загрузка...</p>
        <div class="spinner" style="border: 4px solid white; border-top: 4px solid transparent; border-radius: 50%; width: 50px; height: 50px; margin: 10px auto;animation: spin 1s linear infinite;"></div>
    </div>
`;
loading.style.display = 'none';
document.body.appendChild(loading);