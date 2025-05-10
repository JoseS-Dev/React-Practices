import { SectionHeader } from "./Components/SectionHeader"
import { AddSubReddit } from "./Components/AddSubReddit";
import './Css/App.css';


const GITHUBLINK = "https://github.com/JoseS-Dev/React-Practices/tree/main/Practices/03-Client-reddit"
const TITLE = "Reddit Client"

function App() {
  
  return (
    <main>
      <SectionHeader title={TITLE} githubLink={GITHUBLINK}/>
      <AddSubReddit/>
    </main>
  )
}

export default App
