import * as S from "./Main-styled"

export default function CardMain({imagem, descricao}) {
    return (
        <>
        <S.Card>
            <img src={imagem} alt="McDonalds" />
            <S.DivInternaCard>
            <h3>{descricao}</h3>
            <button>Clique aqui</button>
            </S.DivInternaCard>
        </S.Card>
        </>
    )
};