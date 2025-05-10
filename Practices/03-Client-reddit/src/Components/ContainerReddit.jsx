import {useEffect, useState} from "react";
import '../Css/StylesComponents/ContainerReddit.css';


export function ContainerReddit({subredditName, onDeleteSubreddit}){
    const[posts, setPosts] = useState([])
    const[isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(false);

    // Funcion que se encarga de obtener los posts de un subreddit
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            setError(false);

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
                setError(err.message);
            }
        }
        fetchPosts();
    }, [subredditName]);

    // Funcion que borrar todo el contenido de un subreddit
    const HandleDelete = () => {
        onDeleteSubreddit(subredditName);
    }

    
}