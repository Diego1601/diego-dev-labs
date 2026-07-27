import React from "react"
import { useState } from "react"
import * as S from "./Main-styled"
import bigmac from "../../assets/Main-images/bigmac.svg"
import bigmac1 from "../../assets/Main-images/bigmac1.png"
import batata from "../../assets/Main-images/batata.svg"
import sorvete from "../../assets/Main-images/sorvete.svg"
import imgCard1 from "../../assets/Main-images/imgCard1.png"
import imgCard2 from "../../assets/Main-images/imgCard2.png"
import imgCard3 from "../../assets/Main-images/imgCard3.png"
import img07 from "../../images/img07.png"
import img06 from "../../images/img06.png"
import img05 from "../../images/img05.png"
import img04 from "../../images/img04.png"
import img03 from "../../images/img03.png"
import img02 from "../../images/img02.png"
import img01 from "../../images/img01.png"
import CardMain from "./CardMain.jsx";
import PedidoMequi from "../PedidoMequi/PedidoMequi.jsx"

export default function Main() {
    const[imgEvent, setImgEvent] = useState(bigmac);
    
    return(
        <>
        <S.main>
        <S.section>
            <S.divSuperior>
                <img src={imgEvent} alt="Bigmac" />
                <h1>BATEU AQUELA <S.ColorH1>#FOME</S.ColorH1> DE <S.ColorH1>#MÉQUI?</S.ColorH1></h1>
            </S.divSuperior>

            <S.divInferior>
                <img onClick={(a) => {setImgEvent(bigmac)}} src={bigmac1} alt="Bigmac" />
                <img onClick={(a) => {setImgEvent(batata)}} src={batata} alt="Batata Frita" />
                <img onClick={(a) => {setImgEvent(sorvete)}}src={sorvete} alt="Sorvete" />
            </S.divInferior>   
        </S.section>

        <S.sectionCards>
            <h2>Promoção</h2>
            <CardMain
            imagem={imgCard1}
            descricao={"Que tal um #MequiNoSofá?"}
            />
            <CardMain
            imagem={imgCard2}
            descricao={"Venha conhecer nossa nova loja!"}
            />
             <CardMain
            imagem={imgCard3}
            descricao={"Confira as medidas que o Méqui adotou!"}
            />
        </S.sectionCards>

        <S.sectionCardPedido>
            <h2 className="TitleEscolhaPedido">Escolha seu Pedido <S.ColorH1>Méqui</S.ColorH1></h2>
            <S.divCardPedido>
                <h2>Café da Manhã</h2>
                <PedidoMequi
                    imagem={img07}
                    descriçao={"Combo Pequeno Queijo Quente com Cebola Crispy"}
                />

                <PedidoMequi
                    imagem={img03}
                    descriçao={"Combo Pequeno Queijo Quente Duplo Queijo"}
                />  

                <PedidoMequi
                    imagem={img04}
                    descriçao={"Combo Pequeno Pão Tipo Brioche com Molho Mussarela"}
                />

                <PedidoMequi
                    imagem={img05}
                    descriçao={"Combo Pequeno Pão de Queijo com Molho com Mussarela"}
                />       
            </S.divCardPedido>

            <S.divCardPedido>
                <h2>Promoções</h2>
                <PedidoMequi
                    imagem={img06}
                    descriçao={"McOferta Média Clássica + Sundae"}
                />

                <PedidoMequi
                    imagem={img01}
                    descriçao={"1 Big Mac + 1 Bebida 300ml"}
                />  

                <PedidoMequi
                    imagem={img02}
                    descriçao={"2 McOfertas Médias Big Tasty"}
                />

                <PedidoMequi
                    imagem={img02}
                    descriçao={"2 MacOfertas Médias Big Mac"}
                />       
            </S.divCardPedido>


            <S.divCardPedido>
                <h2>Mais Vendidos</h2>
                <PedidoMequi
                    imagem={img02}
                    descriçao={"2 Big Tasty + 2 Bebidas 500ml"}
                />

                <PedidoMequi
                    imagem={img01}
                    descriçao={"2 McOfertas Médias Clássicas"}
                />  

                <PedidoMequi
                    imagem={img01}
                    descriçao={"1 McOferta Média Big Mac"}
                />

                <PedidoMequi
                    imagem={img02}
                    descriçao={"1 McOferta Média McChicken"}
                />       
            </S.divCardPedido>
        </S.sectionCardPedido>
        </S.main>
        </>
    )
}




