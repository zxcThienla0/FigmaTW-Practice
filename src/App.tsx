import Header from "./components/header/header"
import MainInfo from "./components/mainInfo/mailinfo"
import PlacecComp from "./components/placecComp/placecComp"
import Interesting from "./components/interesting/interesting"
import TopPlacec from "./components/topPlacec/topPlacec"
import VideoFooter from "./components/videoFooter/videoBlock"
import Footer from "./components/footer/footer"


const App = () => {
  return (
    <>
      <Header />
      <MainInfo />
      <PlacecComp />
      <Interesting />
      <TopPlacec />
      <VideoFooter />
      <Footer />
    </>
  )
}

export default App
