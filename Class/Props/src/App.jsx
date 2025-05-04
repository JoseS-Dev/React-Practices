
import TwitterCard from "./Components/TwitterCard";
import './Css/App.css';
const users = [
  {
    username: "midudev",
    name: "Miguel Angel",
    isFollowing: true,
  },
  {
    username: "rafaelgonzalez",
    name: "Rafael Gonzalez",
    isFollowing: false,
  },
  {
    username: "pablomontesr",
    name: "Pablo Montes R",
    isFollowing: true,
  },
];
export default function App() {
  const FormatUsername = (username) => `@${username}`;
  return (
    <div className="Js-main">
      {users.map(({ username, name, isFollowing }) => (
        <TwitterCard
          key={username}
          username={username}
          Following={isFollowing}
          FormatUsername={FormatUsername}
        >
          {name}
        </TwitterCard>
      ))}
    </div>
  )
}

