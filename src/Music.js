import React, { useEffect, useState } from 'react'
import "./music.css"
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import mp1 from './music/mp31.mp3'
import mp2 from './music/mp32.mp3'
import mp3 from './music/mp33.mp3'
import { CgPlayTrackNextO, CgPlayTrackPrevO } from 'react-icons/cg'
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5'

function Music() {
    const [title,settitle]=useState("Bandeya")
    const [artist,setartist]=useState("Arijit singh")
    var index=0
    
    const songs=[
        mp1,mp2,mp3
    ]
    
    const images=[img1,img2,img3]
    const songarray=["Bandeya","Humsafar","Mehrma"]
    const artistarray=["Arijit singh","Akhil Sachdeva","Kartik"]
    
    // const next = document.getElementById('next')
    // const prev = document.getElementById('prev')
    let audio = new Audio(songs[index])

    useEffect(() => {
        
        audio.load();
    }, [index]);

    const playfunction = () => {
        
        audio.play()
        document.getElementById('img').classList.add("anime")
     
        console.log(index)
    }
    const pausefunction = () => {
        
        audio.pause()
        document.getElementById('img').classList.remove("anime")
   
        console.log(index)
    }

    const prevfunction=()=>{
       index=(index-1 + songs.length)%songs.length
        console.log(index)
        audio.pause()
        audio.currentTime=0;
        document.getElementById('img').classList.remove("anime")
        document.getElementById('img').src=images[index]
        audio = new Audio(songs[index])
        settitle(songarray[index])
        setartist(artistarray[index])
    }

    const nextfunction=()=>{
        index=(index+1)%songs.length
        console.log(index)
        audio.pause()
        audio.currentTime=0;
        document.getElementById('img').classList.remove("anime")
        document.getElementById('img').src=images[index]
        audio = new Audio(songs[index])
        settitle(songarray[index])
        setartist(artistarray[index])
    }
    return (
        <>
            <div className="musiccontainer">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="arist">
                    <h2>{artist}</h2>
                </div>
                <div className="image"><img src={images[index]} alt="img" id="img"></img>
                </div>
                <div className="audiocontroler">
                    <audio src={songs[index]} id='audio' />
                    <CgPlayTrackPrevO onClick={prevfunction} className="prev" id="prev" />
                 
                    <IoPlayCircleOutline onClick={playfunction} className="play" id="play" />
                    <IoPauseCircleOutline onClick={pausefunction} className="pause" id="pause" />
                        
                    <CgPlayTrackNextO onClick={nextfunction} className="next" id="next" />
                </div>
            </div>
        </>
    )
}

export default Music
