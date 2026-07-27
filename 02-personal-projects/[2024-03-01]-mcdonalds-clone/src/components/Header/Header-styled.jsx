import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

`;

export const header = styled.header`
width: 100%;
padding: 10px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
`;

export const section = styled.section`
max-width: 1921px;
width: 98%;
display: flex;
justify-content: center;
justify-content: space-between;
`;

export const imgLogo = styled.img`
width: 9%;

@media screen and (min-width: 480px) and (max-width: 768px) {
   width: 8%;
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
   width: 6%;
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
   width: 5%;
}

@media screen and (min-width: 1201px) and (max-width: 2500px) {
   width: 3%;
}
`;

export const divPaiDireita = styled.div`
width: 60%;
display: flex;
justify-content: center;
justify-content: space-evenly;

@media screen and (min-width: 480px) and (max-width: 768px) {
   width: 55%;
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
   width: 50%;
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
   width: 45%;
}

@media screen and (min-width: 1201px) and (max-width: 2500px) {
   width: 40%;
}
`;

export const divFilho1 = styled.div`
width: 30%;
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
img {
    width: 30%;
}

a, h2 {
    font-size: 2vw;
    text-decoration: none;
    color: black;
}

@media screen and (min-width: 480px) and (max-width: 768px) {
   a, h2 {
    font-size: 1.8vw;
   }

   img {
    width: 27%;
   }
   
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
   a, h2 {
    font-size: 1.4vw;
   }

   img {
    width: 25%;
   }
   
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    a, h2 {
    font-size: 1.1vw;
   }
   img {
    width: 20%;
   }
}

@media screen and (min-width: 1201px) and (max-width: 2500px) {
    a, h2 {
    font-size: 0.8vw;
   }
   img {
    width: 15%;
   }
}
`;

export const divFilho2 = styled.div`
background-color: #FFC72C;
width: 50%;
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
border-radius: 10px;
img {
    width: 20%;
}

a, h2 {
    font-size: 2vw;
    text-decoration: none;
    color: black;
    
}

@media screen and (min-width: 480px) and (max-width: 768px) {

a, h2 {
 font-size: 1.8vw;
}

img {
 width: 17%;
}

}

@media screen and (min-width: 769px) and (max-width: 1024px) {

   a, h2 {
    font-size: 1.4vw;
   }

   img {
    width: 14%;
   }
   
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 45%;
    a, h2 {
    font-size: 1.1vw;
   }
   img {
    width: 10%;
   }
}

@media screen and (min-width: 1201px) and (max-width: 2500px) {
    width: 40%;
    a, h2 {
    font-size: 0.8vw;
   }

   img {
    width: 10%;
   }
}
`;