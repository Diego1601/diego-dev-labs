import React from "react"
import logo from "../../assets/Header-images/logo.svg"
import app from "../../assets/Header-images/app.svg"
import app2 from "../../assets/Header-images/app2.svg"
import * as S from "./Header-styled"

export default function Header() {

    const Refresh = () => {
        window.location.reload();
    }

    return(
        
        <> 
        <S.header>
            <S.section>
           
                    <S.imgLogo onClick={Refresh} src={logo} alt="Logo" />
             
                <S.divPaiDireita>
                    <S.divFilho1>
                        <img src={app} alt="App" />
                        <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target="_blank">
                        <h2>Baixe o App</h2>
                        </a>
                    </S.divFilho1>
                    <S.divFilho2>
                        <a href="https://www.mcdonalds.com.br/pedidos" target="_blank">
                        <h2>Peça seu Méqui</h2>
                        </a>
                        <img src={app2} alt="App2" />
                    </S.divFilho2>
                </S.divPaiDireita>
            </S.section>
        </S.header>
        </>
    )
}

