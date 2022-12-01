import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import '../../App.css'
import music from "./1.mp3"
import musiclogo from './lmlogo.png'


const Box = styled.div`
color:white;
background:transparent;
display:flex;
cursor:pointer;
position:fixed;
left:5%;
top:80%;
z-index:100;
&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 0.5rem;
margin:0 0.1rem;
`

const Sound= () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>


<img id="sound" className="musiclogo" style={{ width: 100 }} src={musiclogo} alt="musiclogo" click={click} />


            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />

            <audio src={music} ref={ref} loop={true}/>

        </Box>
    )
}

export default Sound;