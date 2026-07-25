import styled from "styled-components";

export const footer = styled.footer`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const sectionInferior = styled.section`
    max-width: 1921px;
    width: 98%;
    background-color: white;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
`;

export const DivEsquerdaSectionInferior = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
        width: 5vw;
    }

    p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 4vw;
    }

@media screen and (min-width: 480px) and (max-width: 768px) {
    width: 35%;

    img {
        width: 4vw;
    }

    p {
        font-size: 3vw;
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 25%;

img {
    width: 3vw;
}

p {
    font-size: 2vw;
}
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 20%;

img {
    width: 2.5vw;
}

p {
    font-size: 1.5vw;
}
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    width: 15%;

img {
    width: 2vw;
}

p {
    font-size: 1vw;
}
}
`;

export const DivDireitaSectionInferior = styled.div`
    width: 45vw;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin: 1vw 1vw;
    img {
        width: 20vw;
        height: 6vw;
    }

@media screen and (min-width: 480px) and (max-width: 768px) {
width: 30vw;

img {
        width: 12vw;
        height: 4.5vw;
    }

}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 30vw;

img {
        width: 12vw;
        height: 4vw;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 30vw;

img {
        width: 12vw;
        height: 3.5vw;
    }
}

@media screen and (min-width: 1201px) and (max-width: 1920px) {
    width: 25vw;

img {
        width: 10vw;
        height: 3vw;
    }
}
`;