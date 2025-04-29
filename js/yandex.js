const file = document.querySelector("#file");
const something = document.querySelector(".something");
const addMusic = document.querySelector(".upload-music-load");
const uploadZone = document.querySelector(".upload-music-zone");
const upMusic = document.querySelector(".upload-music");
const Butload = document.querySelector(".load");
const lolo = document.querySelector(".app");
const modalik = document.querySelector(".modal");
const playlist = document.getElementById("playlist");
const newPlaylist = [];

const controls = {
  play: document.getElementById("play"),
  next: document.getElementById("next"),
  prev: document.getElementById("prev"),
  mute: document.getElementById("mute"),
  repeat: document.getElementById("repeat"),
};
const muteImg = document.getElementById("muteImg");
const progress = document.querySelector(".player-data-progress");
const audioPercent = document.querySelector("#player-data-percent");
const playImg = document.getElementById("playImg");

const audios = [
  { name: "audio1", src: "./audio/1.mp3" },
  { name: "audio2", src: "./audio/2.mp3" },
  { name: "audio3", src: "./audio/3.mp3" },
  { name: "audio4", src: "./audio/4.mp3" },
];

let isPlaying = false;
let currentMusicIndex = Math.floor(audios.length / 2);
let currentMusic = new Audio(audios[currentMusicIndex].src);

function updateProgress() {
  let percent =
    Math.round((currentMusic.currentTime / currentMusic.duration) * 100) + "%";
  progress.style.width = percent;
  audioPercent.textContent = percent;
}

controls.play.addEventListener("click", () => {
  if (isPlaying) {
    currentMusic.pause();
  } else {
    currentMusic.play();
  }
  isPlaying = !isPlaying;
  playImg.src = isPlaying ? "./img/pause.png" : "./img/play.png";
});

controls.next.addEventListener("click", () => {
  currentMusicIndex = (currentMusicIndex + 1) % audios.length;
  currentMusic.src = audios[currentMusicIndex].src;
  currentMusic.play();
  isPlaying = true;
  playImg.src = "./img/pause.png";
});

controls.prev.addEventListener("click", () => {
  currentMusicIndex = (currentMusicIndex - 1 + audios.length) % audios.length;
  currentMusic.src = audios[currentMusicIndex].src;
  currentMusic.play();
  isPlaying = true;
  playImg.src = "./img/pause.png";
});

controls.mute.addEventListener("click", () => {
  currentMusic.muted = !currentMusic.muted;
  let muteMessage = document.querySelector(".mute-message");

  if (muteImg.src.endsWith("unmute.png")) {
    muteImg.src = "./img/mute.png";
  } else {
    muteImg.src = "./img/unmute.png";
  }

  if (!muteMessage) {
    muteMessage = document.createElement("h1");
    muteMessage.classList.add("mute-message");
    muteMessage.style.position = "absolute";
    muteMessage.style.top = "100px";
    muteMessage.style.left = "48%";
    muteMessage.style.color = "red";
    muteMessage.style.fontSize = "20px";
    lolo.append(muteMessage);
  }

  muteMessage.textContent = currentMusic.muted ? "Muted" : "";
});

controls.repeat.addEventListener("click", () => {
  currentMusic.loop = !currentMusic.loop;
});

currentMusic.addEventListener("timeupdate", updateProgress);

Butload.addEventListener("click", () => (upMusic.style.display = "flex"));

uploadZone.onclick = () => {
  file.click();
};

file.addEventListener("change", (e) => {
  let reader = new FileReader();
  let file = e.target.files[0];

  if (!file) {
    return;
  }

  reader.readAsDataURL(file);
  reader.onload = () => {
    let data = reader.result;
    let newAudioName = `audioNew${newPlaylist.length + 1}`;

    audios.push({ name: newAudioName, src: data });
    newPlaylist.push({ name: newAudioName, src: data });

    currentMusic.src = data;
    currentMusic.play();
    isPlaying = true;

    modalik.innerHTML = newPlaylist
      .map(
        (a) =>
          `<button class="audio-item" data-src="${a.src}">${a.name}</button>`
      )
      .join("<br>");

    const ampa = document.querySelectorAll(".audio-item").forEach((item) => {
      item.addEventListener("click", function () {
        currentMusic.src = this.dataset.src;
        currentMusic.play();
        isPlaying = true;
        playImg.src = "./img/pause.png";
      });

      item.style.background = "none";
      item.style.border = "2px solid black";
      item.style.textShadow = "0px 0px 10px";
      item.style.padding = "5px";
      item.style.borderRadius = "15px";
      item.style.width = "250px";
      item.style.height = "100px";
      item.style.transition = "0.3s ease";
      item.style.fontSize = "30px";
      item.style.boxShadow = " inset 0px 0px 10px black";

      item.addEventListener("mousedown", () => {
        item.style.transform = "scale(0.8)";
      });

      item.addEventListener("mouseup", () => {
        item.style.transform = "scale(1)";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
      });
    });

    playImg.src = "./img/pause.png";
    modalik.style.fontSize = "20px";
  };
});

something.onclick = () => {
  upMusic.style.display = "none";
  modalik.style.display = "none";
  modalik.classList.remove("show");
  setTimeout(() => {
    modalik.display = "none";
  }, 300);
};

playlist.onclick = () => {
  modalik.style.display = "flex";
  modalik.classList.add("show");
};
addMusic.addEventListener("click", () => {
  alert("Нажми на квадратик по середение,чтобы загрузить свой аудиофайл!");
});
