console.log("welcome to spotify");
// initialize the variable
var img;
let songindex = 0;
    let audioElement = new Audio('songs/1.mp3');
    
    let masterplay = document.getElementById("masterplay");
    let myprogressbar = document.getElementById("progressbar");
    let gif = document.getElementById("gif");
    let songitem = Array.from(document.getElementsByClassName("songItem"));
    let mastersongName =document.getElementById("mastersongName");
    let songs= [
    { songName: "dil galti kar baitha",filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
    { songName: "say-sahava- sahava", filepath: "songs/2.mp3",   coverpath: "cover/2.jpg" },
    { songName: "desi girl",          filepath: "songs/3.mp3",   coverpath: "cover/3.jpg" },
    { songName: "kajra re",           filepath: "songs/4.mp3",   coverpath: "cover/4.jpg" },
    { songName: "namo namo",          filepath: "songs/5.mp3",    coverpath: "cover/5.jpg" },
    { songName: "sunny-sunny",        filepath: "songs/6.mp3",    coverpath: "cover/6.jpg" },
    { songName: "kesariya",           filepath: "songs/7.mp3",    coverpath: "cover/7.jpg" },
    { songName: "kinna sona",         filepath: "songs/8.mp3",    coverpath: "cover/8.jpg" },
    { songName: "chammak challu",     filepath: "songs/9.mp3",    coverpath: "cover/9.jpg" },
    { songName: "mann meri jaan",     filepath: "songs/10.mp3",   coverpath: "cover/10.jpg" }
];
songitem.forEach((element , i)=>{
    
      element.getElementsByTagName("img")[0].src = songs[i].coverpath;
      element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// const pp = ()=>{
//     Array.from(document.getElementsByClassName('songItemplay')).forEach((p)=>{
//         p.classList.remove('fa-pause-circle');
//         p.classList.add('fa-play-circle');
//     })   
// }
// audioElement.play();
// handle song play/pause click event
masterplay.addEventListener('click',()=>{
         if(audioElement.paused || audioElement.currentTime<=0)
         {
            audioElement.play();
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            document.querySelector('.songItemplay').classList.remove('fa-play-circle');
            document.querySelector('.songItemplay').classList.add('fa-pause-circle');
            gif.style.opacity = 1;
         }
         else
         {
            audioElement.pause();
            masterplay.classList.remove("fa-pause-circle");
            masterplay.classList.add("fa-play-circle");
            document.querySelector('.songItemplay').classList.remove('fa-pause-circle');
            document.querySelector('.songItemplay').classList.add('fa-play-circle');
            gif.style.opacity = 0;
         }

})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log("time update");
    // update seekbar......
    // get percentage of time 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})

// change music with time change
myprogressbar.addEventListener('change', ()=>{
     audioElement.currentTime = myprogressbar.value * audioElement.duration /100;
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })   
}

// make function for user when click on next button of bottom part then change play pause button in container part also
const makeplaywithplay = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })   
}


// play or pause in container
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
    songindex = parseInt(e.target.id);
    console.log(e.target);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songindex+1}.mp3`;
    mastersongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9)
    {
        songindex = 0;
    
    }
    else
    {
        songindex +=1;
        

    }
    mastersongName.innerText = songs[songindex].songName;
    audioElement.src = `songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    makeallplays();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex = 0;
    }
    else
    {
        songindex -=1;
    }
    mastersongName.innerText = songs[songindex].songName;
    audioElement.src = `songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    makeallplays();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
})
