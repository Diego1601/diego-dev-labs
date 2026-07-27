import styled from "styled-components"

export const main = styled.main`
width: 100%;
background-color: #ffc72c;
display: flex;
align-items: center;
flex-direction: column;
`;

export const section = styled.section`
width: 100%;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 10vw;
`;

export const divSuperior = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
flex-direction: column-reverse;
img {
    height: 180px;;
}

h1 {
    width: 100%;
    font-size: 9vw;
    color: white;
    font-weight: 800;
    text-align: center;
}

@media screen and (min-width: 480px) and (max-width: 768px) {
    img {
        height: 250px;
    }

    h1 {
        font-size: 8.2vw;
        text-align: center;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    width: 96%;

    img {
        height: 240px;
    }

    h1 {
        font-size: 4.5vw;
        width: 58%;
        text-align: start;

    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    img {
        height: 280px;
    }

    h1 {
        font-size: 5vw;
        width: 65%;
        text-align: start;

    }
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    img {
        height: 340px;
    }

    h1 {
        font-size: 5.3vw;
        width: 65%;
        text-align: start;

    }
}

`;

export const ColorH1 = styled.span`
    color: #DB0007;
`;


export const divInferior = styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
img {
    width: 10vw;
}

@media screen and (min-width: 480px) and (max-width: 768px) {
    width: 70%;
    img {
        width: 14vw;
    }
}

`;

export const sectionCards = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;  
    background-color: #feb706;
    padding: 5vw 5vw;
        h2 {
        color: white;
        text-align: center;
        font-size: 5vw;
        width: 100%;
        margin-bottom: 1vw;
    }

@media screen and (min-width: 480px) and (max-width: 768px) {
    h2 {
        font-size: 4.5vw;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    h2 {
        font-size: 4vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    flex-direction: row;
    h2 {
        font-size: 3.5vw;
    }
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    flex-direction: row;
    h2 {
        font-size: 3vw;
    }
}
`;


/**ESTILO DOS CARDS DA MAIN "PROMOÇÃO" */

export const Card = styled.div`
    width: 55vw;
    height: 65vw;
    margin-top: 20px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    img {
        width: 100%;
        
    }

    img:hover {
        opacity: 0.5;
        transition: 0.5s;
    }

@media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 28vw;
    height: 33vw;
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 28vw;
    height: 33vw;
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    width: 28vw;
    height: 33vw;
}
`;

export const DivInternaCard = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-around;

    h3 {
        margin: 5px;
        text-align: center;
        font-size: 4vw;
        width: 100%;
    }
    
    button {
        width: 50%;
        height: 22%;
        border: none;
        border-radius: 10px;
        background-color: #FFBC0D;
        font-size: 4vw;
        font-weight: 600;
    }

@media screen and (min-width: 769px) and (max-width: 1024px) {
    h3 {
    font-size: 1.5vw;
   }

   button {
    font-size: 1vw;
   }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    h3 {
    font-size: 1.5vw;
   }

   button {
    font-size: 1vw;
   }
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    h3 {
    font-size: 1.5vw;
   }

   button {
    font-size: 1vw;
   }
}
`;

export const sectionCardPedido = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    .TitleEscolhaPedido {
        font-size: 5.2vw;
        color: white;
        width: 100%;
        text-align: center;
        margin-top: 3vw;
    }

@media screen and (min-width: 769px) and (max-width: 1024px) {
.TitleEscolhaPedido {
    font-size: 4.5vw;
}
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
.TitleEscolhaPedido {
    font-size: 4vw;
}
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
.TitleEscolhaPedido {
    font-size: 3.8vw;
}
}
`;

export const divCardPedido = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10vw;

    h2 {
        width: 65%;
        font-size: 4vw;
    }

@media screen and (min-width: 769px) and (max-width: 1024px) {
flex-direction: row;
margin: 2vw 2vw;
h2 {
    width: 95%;
    font-size:  2.8vw;
}
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
flex-direction: row;
margin: 2vw 2vw;
h2 {
    width: 93%;
    font-size: 2.5vw;
}
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
flex-direction: row;
margin: 2vw 2vw;
h2 {
    width: 91%;
    font-size: 2vw;
}
}
`;
