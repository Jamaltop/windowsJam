const chelMessage = document.querySelector('.message-chel');
let isPressed = false 
const panelVsego = document.querySelector('.all');
const modals = document.querySelector('.modals');
const something = document.querySelector('.something');
const modalForLang = document.querySelector('.modal-for-lang');
const langButton = document.querySelector('.language');
const rusButton = document.querySelector('.rus');
const engButton = document.querySelector('.eng');
const lang = document.querySelector('.langua');
const wifi = document.querySelector('.wifi');
const bluet = document.querySelector('.bluetooth');
const samolet = document.querySelector('.samolet');
const modalForChel = document.querySelector('.modal-for-chel');
const chel = document.querySelector('.chel');
const chelModal = document.querySelector('.modal-chel');
const next = document.querySelector('.next-chel');
const nextMusic = document.querySelector('#next');
const prevMusic = document.querySelector('#prev');
const pauseMusic = document.querySelector('#pause');
const nazvan = document.querySelector('.nazvaniye');
const ispolnitel = document.querySelector('.ispolnitel');
const foto = document.querySelector('.foto');
const pusk = document.querySelector('.pusk')
let currentMusic = 0;
const modalPusk = document.querySelector('.modal-for-pusk')
const puskInput = document.querySelector('.pusk-input')

let music = [
    './img/lana.jpg','./img/ammusic.jpeg','./img/weekend.jpg',
]


pusk.addEventListener('click',()=> {
    modalPusk.style.display = 'flex'
    modalPusk.classList.add('au')
})



let allApps = []


panelVsego.onclick = () => {
  modals.style.display = 'flex';
  modals.classList.add('now');

};
window.addEventListener('keypress',  (e) => {
    if(isPressed) {
        isPressed = false;
    }
else{
  isPressed = true;
  chelMessage.classList.add('pressed'); 
  setTimeout(() => {
    next.style.display = 'flex';
  },1000)
   

    
}})

window.addEventListener('touchstart', (e) => {
    if(isPressed) {
        isPressed = false;
    }
    else {
        setTimeout(() => {
            isPressed = true;
            chelMessage.classList.add('pressed'); 
        },5000)
      
        setTimeout(() => {
            next.style.display = 'flex';
        }, 6000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const isYandexInstalled = localStorage.getItem('yandexInstalled') === 'true';
    const panel = document.querySelector('.panel-zadac');
    


  
    const oldButton = panel.querySelector('.yandex-installed');
    if (oldButton) {
        oldButton.remove();
    }

    if (isYandexInstalled) {
        const btn = document.createElement('button');
        btn.style.background = 'none'
        btn.style.border = 'none'
        btn.style.cursor = 'pointer';
        btn.className = 'yandex-installed';
        btn.innerHTML = '<img src="./img/yandex.png" alt="Yandex" width="45px">';
        btn.addEventListener('click', () => {
            window.location.href = './yandex.html';
        });
      
        panel.appendChild(btn);
        const btnClone = btn.cloneNode(true);
        btnClone.style.position = 'absolute';
        btnClone.style.top = '130px';
        btnClone.style.cursor = 'pointer';
        btnClone.style.left = '70px';
        btnClone.addEventListener('click', () => {
            window.location.href = './yandex.html';
        });
        modalPusk.appendChild(btnClone);
    }
    
});
document.addEventListener('DOMContentLoaded', () => {
    const isGoogleInstalled = localStorage.getItem('googleInstalled') === 'true';
    const panel = document.querySelector('.panel-zadac');

    const oldButton = panel.querySelector('.google-installed');
    if (oldButton) {
        oldButton.remove();
    }

    if (isGoogleInstalled) {
        const btn = document.createElement('button');
        btn.style.background = 'none';
        btn.style.cursor = 'pointer';
        btn.style.border = 'none';
        btn.className = 'google-installed';
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width = '40px' viewBox="0 0 488 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#d5d9e2" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>`;
        btn.addEventListener('click', () => {
            window.location.href = './google.html';
        });

        panel.appendChild(btn);

        const btnClone = btn.cloneNode(true);
        btnClone.style.position = 'absolute';
        btnClone.cursor = 'pointer';
        btnClone.style.top = '132px';
        btnClone.style.left = '130px';
        btnClone.addEventListener('click', () => {
            window.location.href = './google.html';
        });
        modalPusk.appendChild(btnClone);
    }
});


pauseMusic.onclick = () => {
    if (pauseMusic.src.endsWith('play.png')) {
        pauseMusic.src = './img/pause.png';
    } else {
        pauseMusic.src = './img/play.png';
    }
};
nextMusic.onclick = () => {
currentMusic++;
foto.src = music[currentMusic];
if(currentMusic == 1){
   setTimeout(() => {
    nazvan.textContent = 'I AM MUSIC'
    ispolnitel.textContent = 'Playboi Carti'
    
   },500)
   nazvan.style.fontSize = '1rem'
}
else if(currentMusic == 2){
    setTimeout(() => {
nazvan.textContent = 'STARBOY'
ispolnitel.textContent = 'The Weeknd'
    },500)

}
else if(currentMusic == 3){
    currentMusic = 0;
    foto.src = music[currentMusic];
    nazvan.textContent = 'Cinnammon girl'
    ispolnitel.textContent = 'Lana Del Rey'
}
}
prevMusic.onclick = () => {
    currentMusic--;
foto.src = music[currentMusic];
if(currentMusic == 1){
    setTimeout(() => {
     nazvan.textContent = 'I AM MUSIC'
     ispolnitel.textContent = 'Playboi Carti'
    },500)
}
else if(currentMusic == 2){

setTimeout(() => {
nazvan.textContent = 'STARBOY'
ispolnitel.textContent = 'The Weeknd'
},500)
}
else if(currentMusic == 0){
    setTimeout(() => {
        nazvan.textContent = 'Cinnammon girl'
        ispolnitel.textContent = 'Lana Del Rey'
    },500)
    
}
else if(currentMusic == -1){
    currentMusic = 2;
    foto.src = music[currentMusic];
    nazvan.textContent = 'STARBOY'
    ispolnitel.textContent = 'The Weekend'
}
}


langButton.onclick = () => {
    modalForLang.style.display = 'flex';
    modalForLang.classList.add('au');
}
something.onclick = () => {
    modals.style.display = 'none';
    modals.classList.remove('now');
    modalForLang.style.display = 'none';
    modalForLang.classList.remove('au');
    next.style.display = 'none';
    chelModal.style.display = 'none';
    chelModal.classList.remove('now');
    chelMessage.classList.remove('pressed')
    chel.style.display = 'flex'
    modalForChel.style.display = 'flex'
    chel.style.animation = 'none';
    modalPusk.style.display = 'none'
    modalPusk.classList.remove('au')
}
rusButton.onclick = () => {
    lang.textContent = 'РУС'
modalForLang.style.display = 'none';
}
engButton.onclick = () => {
    lang.textContent = 'ENG'
    modalForLang.style.display = 'none';
}
setTimeout(() => {
    modalForChel.style.display = 'flex';
    
},4000)
chel.addEventListener('click', () => {
   chelModal.style.display = 'flex';
   chelModal.classList.add('now');
   setTimeout(() => {
    chel.style.display = 'none'
    modalForChel.style.display = 'none'
   },200)
})


samolet.onclick = () => {
    
    if(samolet.style.background == 'blue'){
        samolet.style.background = 'none'
        
    }
    else{
       setTimeout(()=> {
         samolet.style.background = 'blue'
           wifi.style.background = 'none'
        bluet.style.background = 'none'
       },300)
     
    }
}


wifi.onclick = () => {

    if(wifi.style.background == 'blue'){
        wifi.style.background = 'none'
    }
    else{
        setTimeout(()=> {
            wifi.style.background = 'blue'
            samolet.style.background = 'none'
        },300)
        
        
}}
bluet.onclick = () => {
    if(bluet.style.background == 'blue'){
        bluet.style.background = 'none'
    }
    else{
        setTimeout(()=> {bluet.style.background = 'blue'
            samolet.style.background = 'none'
        },300)
        
    }
}


const suggestionBox = document.createElement('div');
suggestionBox.className = 'suggestion-box';
suggestionBox.style.position = 'absolute';
suggestionBox.style.top = '70px';
suggestionBox.style.left = '20px';
suggestionBox.style.background = '#1e1e1e';
suggestionBox.style.color = 'white';
suggestionBox.style.padding = '10px';
suggestionBox.style.borderRadius = '10px';
suggestionBox.style.display = 'none';
suggestionBox.style.flexDirection = 'column';
suggestionBox.style.gap = '10px';
suggestionBox.style.zIndex = '999';
suggestionBox.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
suggestionBox.style.width = '150px';
modalPusk.appendChild(suggestionBox);


const apps = ['Yandex', 'JamStore','Google'];


puskInput.addEventListener('input', () => {
  const value = puskInput.value.toLowerCase().trim();
  suggestionBox.innerHTML = '';

  if (value === '') {
    suggestionBox.style.display = 'none';
    return;
  }

  const matches = apps.filter(app => app.toLowerCase().includes(value));
  if (matches.length > 0) {
    matches.forEach(match => {
      const item = document.createElement('div');
      item.textContent = match;
      item.style.cursor = 'pointer';
      item.style.padding = '6px 10px';
      item.style.borderRadius = '5px';
      item.style.background = '#333';
      item.style.transition = '0.2s ease';
      item.addEventListener('mouseover', () => item.style.background = '#444');
      item.addEventListener('mouseout', () => item.style.background = '#333');

      item.addEventListener('click', () => {
        puskInput.value = match;
        suggestionBox.style.display = 'none';

        
        if (match === 'Yandex') {
            if(!localStorage.getItem('yandexInstalled')) {
                alert('Yandex не установлен. Пожалуйста, установите Yandex перед запуском.');
                if(confirm('Хотите установить Yandex?')) {
                    window.location.href = 'microsoft.html';
                }
                else{
                    return
                }

                
                
            }
            else{
                alert('Yandex запускается... 🔥');
                window.location.href = 'yandex.html';
            }
                
          
        } else if (match === 'JamStore') {
          alert('JamStore запускается... 🔥');
            window.location.href = 'microsoft.html';
        }
        else if (match === 'Google') {
            if(!localStorage.getItem('googleInstalled')){
                alert('Google не установлен. Пожалуйста, установите Google перед запуском.');
                if(confirm('Хотите установить Google?')) {
                    window.location.href = 'microsoft.html';
                }
                else{
                    return
                }
            }
            else{
                alert('Google запускается... 🔥');
                window.location.href = 'google.html';
            }
           
        }
        
      });

      suggestionBox.appendChild(item);
    });

    suggestionBox.style.display = 'flex';
  } else {
    suggestionBox.style.display = 'none';
  }
});

























function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let date = now.toLocaleDateString("ru-RU");
    
    document.getElementById("clock").innerHTML = `${hours}:${minutes} <br> ${date}`;
}

setInterval(updateClock, 1000);
updateClock();
const audio = document.getElementById("player");
                    const slider = document.getElementById("volumeSlider");
                
                  
                
                    slider.addEventListener("input", () => {
                        audio.volume = slider.value;
                
                        
                        let percentage = slider.value * 100;
                        slider.style.background = `linear-gradient(to right, #0078D4 ${percentage}%, rgb(92, 88, 88) ${percentage}%)`;
                    });
                
                   
                    slider.dispatchEvent(new Event("input"));
                    const brightnessSlider = document.getElementById("brightnessSlider");

                    brightnessSlider.addEventListener("input", () => {
                       
                        let brightness = brightnessSlider.value;
                        
                        
                        document.body.style.filter = `brightness(${brightness})`;
                
                     
                        let percentage = (brightness - 0.5) * 200;
                        brightnessSlider.style.background = `linear-gradient(to right, #0078D4  ${percentage}%, rgb(92, 88, 88) ${percentage}%)`;
                    });
                
                   
                    brightnessSlider.dispatchEvent(new Event("input"));