import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import * as S  from "./components/Header/Header-styled.jsx"

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}


