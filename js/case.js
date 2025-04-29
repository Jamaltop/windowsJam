const wheel = document.querySelector('.wheel');
const btn = document.querySelector('.btn1');
const pItem = document.querySelector('#price-item');
const pRes = document.querySelector('#price-result');
const notif = document.querySelector('.salam');
const inventory = document.querySelector('.inventory');
const inventBtn = document.querySelector('#inventory-btn');
let inventory_data =[

]
let arr = [
    {
        name:'Knife',
        src:'../img/item-1.png'
    },
    {
        name:'Gold Knife',
        src:'../img/item-2.png'
    },
    {
        name:'Secret Knife',
        src:'../img/item-3.png'
    },
    {
        name:'AUG',
        src:'../img/item-4.png'
    },
    {
        name:'AWP CLASSIC',
        src:'../img/item-5.png'
    },
    {
        name:'Kerambit',
        src:'../img/item-6.png'
    },
    {
        name:'P90',
        src:'../img/item-7.png'
    },
    {
        name:'AWP BOLT',
        src:'../img/item-8.png'
    }
]
let isSpin = false;
arr.reverse();
inventBtn.addEventListener('click', () => {
    inventory.style.animation = 'slide 1s ease'
    setTimeout(() => {
        inventory.style.right = '0px';
    }
    ,1000)
})


function spin (){

    if(isSpin){
        return;
    }

    else{
        let randomPrise = Math.floor(Math.random()*7);
        inventory_data.push(arr[randomPrise]);

        isSpin = true;

        let audio = new Audio('../audio/spin.mp3');
        let timeout = setTimeout(() => {
            isSpin = false
            wheel.style.transition = 'none';
            wheel.style.transform = ` perspective(1000px)`;
        },9000)
        audio.play();
        setTimeout(() => {
            audio.pause();
        },8500)
        wheel.style.transition = 'all 8s ease';
        wheel.style.transform = ` perspective(1000px) rotateY( ${1080 + randomPrise * 45}deg)`;
        setTimeout(() => {
            pushItem();
            pItem.style.display = 'block';
            notif.textContent = `YOU WIN ${arr[randomPrise].name}`;
            pRes.style.display = 'flex';
            pItem.src = arr[randomPrise].src
        },9000)
    }

    function pushItem(){

        inventory.innerHTML = '';
        inventory_data.forEach((item) => {
            let img = document.createElement('img');
            img.src = item.src;
            inventory.append(img);
        })
        if(inventory_data.length == 10){
            inventory.innerHTML = ''
        }
    }

}

inventory.addEventListener('click', () => {
    inventory.style.right = '-400px';
    inventory.style.animation = 'slideOut 0.5s ease';
    setTimeout(() => {
        inventory.style.right = '-300px';
    }
,500)
})
pRes.addEventListener('click', () => {
    pRes.style.display = 'none';
    pItem.style.display = 'none';
})
btn.addEventListener('click', spin);
