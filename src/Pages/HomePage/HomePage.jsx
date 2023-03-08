import Carrusel from "../../Components/Carrusel/Carrusel"
import Footer from "../../Components/Footer/Footer"
import InfoSection from "../../Components/InfoSection/InfoSection"
import MisteryBox from "../../Components/MisteryBox/MisteryBox"
// import Muestra from "../../Components/Muestra/Muestra"
import SectionTr from "../../Components/SectionTr/SectionTr"




const HomePage = () => {





    return (
        <div className="App">
            <Carrusel />
            <InfoSection/>
            <SectionTr/>
            <MisteryBox/>
            {/* <Muestra/> */}
            <Footer/>
        </div>
    )
}


export default HomePage