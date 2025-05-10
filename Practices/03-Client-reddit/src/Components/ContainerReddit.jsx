import {useEffect, useState} from "react";
import '../Css/StylesComponents/ContainerReddit.css';


export function ContainerReddit({subredditName, onDeleteSubreddit}){
    const[posts, setPosts] = useState([])
    const[isLoading, setIsLoading] = useState(false);
    
    // Funcion que se encarga de obtener los posts de un subreddit
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            

            try {
                const response = await fetch(`https://www.reddit.com/r/${subredditName}/hot.json`);
                if(!response.ok){
                    throw new Error("Error fetching posts");
                }
                const data = await response.json();
                const fetchedPosts = data.data.children.map((post) => ({
                    id: post.data.id,
                    title: post.data.title,
                    score: post.data.score,
                    numbOfComments: post.data.num_comments,
                    url: post.data.url,
                }))
                setPosts(fetchedPosts);
            }
            catch(err){
                console.error(err);
            }
        }
        fetchPosts();
    }, [subredditName]);

    // Funcion que borrar todo el contenido de un subreddit
    const HandleDelete = () => {
        onDeleteSubreddit(subredditName);
    }

    return(
        <section className="JS--Container--Result">
            <div className="JS--Container">
                <h3>{subredditName}</h3>
                <svg onClick={() => HandleDelete()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-icon lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </div>
            <div className="JS--SubItem">
                {posts.map((post) => (
                    <section key={post.id} className="JS--SubItem--Post">
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className="JS--SubItem--Post--Link">
                            <h4>{post.title}</h4>
                            <div className="JS--SubItem--Post--Info">
                                <p>Score: {post.score}</p>
                                <p>Comments: {post.numbOfComments}</p>
                            </div>
                        </a>
                    </section>
                ))}
            </div>
        </section>
    )
}