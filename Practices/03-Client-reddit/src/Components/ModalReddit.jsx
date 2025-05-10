import React from "react";
import { useState } from "react";
import '../Css/StylesComponents/ModalReddit.css';

export function ModalReddit({isOpen, closeModal, onAddSubreddit}) {
    const[subredditName, setSubredditName] = useState("");
    const[error, setError] = useState(false);
    const[isLoading, setIsLoading] = useState(false);

    // Funcion que se encarga de agregar un nuevo subReddit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(false);

        if(!subredditName.trim()){
            alert("Please enter a subreddit name");
            setIsLoading(false);
            return;
        }
        const result = onAddSubreddit(subredditName.trim());
        if(result){
            setSubredditName("");
            setIsLoading(false);
            closeModal();
        }

    }


    
    return(
        <dialog className="JS--Modal" open={isOpen}>
            <div className="Js--Content--Modal">
                <div className="JS--Content--Header">
                    <h3>add a new subreddit</h3>
                    <span className="JS--Close--Modal" onClick={() => closeModal()}>X</span>
                </div>
                <div className="JS--Content--Body">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Subreddit name" value={subredditName} onChange={(e) => setSubredditName(e.target.value)} className="JS--Input--Modal"/>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Add Subreddit"}
                        </button>
                    </form>
                    {error && <p className="JS--Error--Modal">Error: {error}</p>}
                </div>
            </div>
        </dialog>
    )
}