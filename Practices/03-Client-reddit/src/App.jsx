import { SectionHeader } from "./Components/SectionHeader"
import { ContainerMain } from "./Components/ContainerMain";
import './Css/App.css';


const GITHUBLINK = "https://github.com/JoseS-Dev/React-Practices/tree/main/Practices/03-Client-reddit"
const TITLE = "Reddit Client"

function App() {
  
  return (
    <main>
      <SectionHeader title={TITLE} githubLink={GITHUBLINK}/>
      <ContainerMain/>
    </main>
  )
}

export default App
