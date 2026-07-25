import * as S from "./PedidoMequi-style.jsx"

export default function PedidoMequi({imagem, descriçao}) {
    return(
        <>
                <S.CardPedido>
                    <img src={imagem} alt="" />
                    <p>{descriçao}</p>
                </S.CardPedido> 
        </>
    )
}