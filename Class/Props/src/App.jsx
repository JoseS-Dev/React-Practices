
import TwitterCard from "./Components/TwitterCard";
import './Css/App.css';

export default function App() {
  const FormatUsername = (username) => `@${username}`;
  return (
    <div className="Js-main">
      <TwitterCard username={"midudev"} name={"Miguel Angel Durán"} Following={true} FormatUsername={FormatUsername}/>
      <TwitterCard username={"elonmusk"} name={"Elon Musk"} Following={false} FormatUsername={FormatUsername}/>
    </div>
  )
}

