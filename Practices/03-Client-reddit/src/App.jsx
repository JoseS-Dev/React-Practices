import { SectionHeader } from "./Components/SectionHeader"
import './Css/App.css';


const GITHUBLINK = "https://github.com/JoseS-Dev/React-Practices/tree/main/Practices/03-Client-reddit"
const TITLE = "Reddit Client"

function App() {
  
  return (
    <main>
      <SectionHeader title={TITLE} githubLink={GITHUBLINK}/>
    </main>
  )
}

export default App
