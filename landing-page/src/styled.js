import styled, { keyframes } from "styled-components"

export const Container = styled.div`
box-sizing: border-box;
height: 100vh;
width: 100%;
background-image: linear-gradient(to right, #628E75, #1A4855);

@media (max-width: 768px) {
    
}
`
export const Section = styled.section`
display: flex;
justify-content: space-between;

@media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
}
`
export const ContainerText = styled.div`
display: flex;
flex-direction: column;
padding-top: 2.5rem ;
padding-left: 10rem;
height: 70vh;
width: 42%;
gap: 1rem;

@media (max-width: 768px) {
    padding-left: 1rem;
}
`
export const TitleH1 = styled.h1`
    color: rgb(255,255,255,0.9);
    width: 445px;
    height: 148px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 109%;

    @media (max-width: 768px) {
        line-height: 95%;
    font-size: 51px;
    width: 300px;
    height: 100px;

}
`
export const TitleH3 = styled.h3`
 color: rgb(255,255,255,0.9);

 
 @media (max-width: 768px) {
    font-size: 16px;
}
`
export const Paragraph = styled.p`
 color: rgb(255,255,255,0.9);
 line-height: 180%;
 font-size: 1.063rem;
 font-style: normal;

 @media (max-width: 768px) {
    font-size: 14px;
    line-height: 180%;
    width: 90vw;
}
`
export const ContainerImages = styled.header`
padding-left: 10rem;
padding-right: 7rem;
display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;
height: 8rem;


@media (max-width: 768px) {
height: 6rem;
padding-left: 1rem;
padding-right: 1rem;
padding-top: -5rem;
}
`
export const Images = styled.div`
display: flex;
gap: 1.8rem;

@media (max-width: 768px) {
    gap: 1rem;
}
`
export const Ghosts = styled.div`
padding-top: 4rem;
padding-right: 6rem;
display: flex;
width: 40rem;
height: 25rem;

@media (max-width: 768px) {
    display: flex;
    padding-top: 0;
    padding-left: 3rem;
    padding-right: 0;
    height: 11rem;
    width: 1rem;  
    
}
`
const animateGhost1 = keyframes`
0%, 100%{
    transform: translateY(0px);
}
50% {
    transform: translateY(10px)
}
`
const animateGhost2 = keyframes`
0%, 100%{
    transform: translateX(0px);
}
50%{
    transform: translateX(10px);
    rotate: 5deg;
}
`

export const Ghost1 = styled.img`
background-image: url(${props => props.img});
animation: ${animateGhost1} 2s infinite;

@media (max-width: 768px) {
    width: 200px;
    height: 200px;
}
`
export const Ghost2 = styled.img`
background-image: url(${props => props.img});
animation: ${animateGhost2} 2s infinite;

@media (max-width: 768px) {
    width: 200px;
    height: 200px;
}
`

export const ButtonsDiv = styled.div`
display: flex;
gap: 50px;
width: 100%;
padding-left: 100px;

@media (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
}
`
export const Button1 = styled.button`
display: flex;
align-items: center;
justify-content: space-around;
padding-left: 20px;
padding-right:20px ;
position: absolute;
width: 225px;
height: 45px;
left: 165px;
top: 515px;
border: none;
background: #658E76;
color: #F9F9F9;
transform: skew(-20deg);
margin-left: -15px;
font-weight: bold;
cursor: pointer;

a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    text-decoration: none;
    color: #F9F9F9;
    transform: skew(20deg);
}

@media (max-width: 768px) {
    position: absolute;
width: 225px;
height: 45px;
left: 36px;
top: 581px;
}
`
export const Button2 = styled.button`
background-color: transparent;
position: absolute;
width: 225px;
height: 45px;
left: 390px;
top: 515px;
border: 2px solid #658E76;
color: #F9F9F9;
transform: skew(-20deg);
font-weight: bold;
cursor: pointer;

a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #F9F9F9;
    transform: skew(20deg);
}

@media (max-width: 768px) {
    display: none;
}
`




