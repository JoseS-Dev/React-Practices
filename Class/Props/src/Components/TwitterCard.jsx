import React, {useState} from "react";
import '../Css/TwitterCard.css';

export default function TwitterCard({children,username, Following, FormatUsername}) {
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
                        <h4>{children}</h4>
                        <p>{FormatUsername(username)}</p>
                    </div>
                </div>
                <div className='Js-ButtonContainer'>
                <button className={className} onClick={() => handleClick()}>
                    <span className={className}>{Text}</span>
                    <span className="Js-ButtonCard--notFollowing">Dejar de Seguir</span>
                </button>
                </div>
            </article>
         </div>
    )
}