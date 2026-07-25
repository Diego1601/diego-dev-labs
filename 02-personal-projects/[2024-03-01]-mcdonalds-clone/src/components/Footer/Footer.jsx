import React from "react";
import * as S from "./Footer-style"
import GooglePlay from "../../assets/Footer-images/GooglePlay.png"
import AppStore from "../../assets/Footer-images/AppStore.png"
import logo from "../../assets/Footer-images/logo.svg"

export default function Footer() {
    return(
        <>
        <S.footer>
            <S.sectionInferior>
                <S.DivEsquerdaSectionInferior>
                    <img src={logo} alt="LogoMcDonalds" />
                    <p>@McDonalds 2024</p>
                </S.DivEsquerdaSectionInferior>
                <S.DivDireitaSectionInferior> 
                    <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&gl=US" target="_blank">
                        <img src={GooglePlay} alt="GooglePlay" />
                    </a> 

                    <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target="_blank">
                    <img src={AppStore} alt="AppStore" />
                    </a>
                </S.DivDireitaSectionInferior>
            </S.sectionInferior>
        </S.footer>
        </>
    )
}