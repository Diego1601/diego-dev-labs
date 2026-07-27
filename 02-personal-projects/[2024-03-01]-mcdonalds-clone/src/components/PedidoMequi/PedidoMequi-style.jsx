import styled from "styled-components";

export const CardPedido = styled.div`
    width: 55vw;
    height: 70vw;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    border: solid white 0.5px;
    box-shadow: 3px 1px 1px black;

    img {
        max-width: 100%;
    }

    img:hover {
        opacity: 0.5;
        transition: 0.5s;
    }

    p {
    margin: 0 20px 10px 20px;
    font-size: 4vw;
    width: 90%;
    text-align: center;
    }

@media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 18vw;
    height: 25vw;

    p {
        font-size: 1.5vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 18vw;
    height: 25vw;

    p {
        font-size: 1.2vw;
    }

}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    width: 18vw;
    height: 25vw;

    p {
        font-size: 1vw;
    }

}

`;

