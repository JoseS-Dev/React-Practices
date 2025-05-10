import { useEffect, useState } from "react";
import { AddSubReddit } from "./AddSubReddit";
import { ContainerReddit } from "./ContainerReddit";
import '../Css/StylesComponents/ContainerMain.css';


export function ContainerMain(){
    const[subreddits, setSubreddits] = useState(() => {
        const savedSubreddits = localStorage.getItem('subreddits');
        return savedSubreddits ? JSON.parse(savedSubreddits) : [];
    });

    useEffect(() => {
        localStorage.setItem('subreddits', JSON.stringify(subreddits));
    }, [subreddits]);

    // Funcion que se encarga de agregar un subreddit
    const addSubrredit = (newSubreddit) => {
        if(subreddits.includes(newSubreddit)){
            alert("Subreddit already exists");
            return;
        }
        setSubreddits((prevSubreddits) => [...prevSubreddits, newSubreddit]);
        return null;
    }

    // Funcion que se encarga de eliminar un subreddit
    const deleteSubreddit = (subredditsName) => {
        setSubreddits((prevSubreddits) => prevSubreddits.filter((subreddit) => subreddit !== subredditsName));
    }

    return(
        <section className="JS--Container--main">
            {subreddits.map((subreddit) => (
                <ContainerReddit key={subreddit} subredditName={subreddit} onDeleteSubreddit={deleteSubreddit}/>
            ))}
            <AddSubReddit onAddSubreddit={addSubrredit}/>
        </section>
    )
}