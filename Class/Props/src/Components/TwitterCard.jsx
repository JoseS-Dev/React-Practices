import React, {useState} from "react";
import '../Css/TwitterCard.css';

export default function TwitterCard({username, name, Following, FormatUsername}) {
    // Creo un componente de botón que recibe un texto como prop y lo muestra en el botón.
    const [isFollowing, setFollowing] = useState(Following);
    const Text = isFollowing ? "Siguiendo" : "Seguir";
    const className = isFollowing ? "Js-ButtonCard Js-ButtonCard--isFollowing" : "Js-ButtonCard Js-ButtonCard--isFollow";

    const handleClick = () => {
        setFollowing(!isFollowing);
    }
    
    return (
         <div className='Js-ContainerCard'>
            <article className='Card'>
                <div className='Js-ImageCard'>
                    <img src={`https://unavatar.io/${username}`}/>
                    <div className='Js-TextCard'>
                        <h4>{name}</h4>
                        <p>{FormatUsername(username)}</p>
                    </div>
                </div>
                <div className='Js-ButtonContainer'>
                <button className={className} onClick={() => handleClick()}>{Text}</button>
                </div>
            </article>
         </div>
    )
}