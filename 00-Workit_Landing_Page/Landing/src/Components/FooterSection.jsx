import React from "react";
import "../Css/CssComponents/FooterSection.css"

export default function FooterSection(){
    return(
        <>
            <div className="Js-Footer">
                <footer className="Js-Footer-Section">
                    <h2>Workit</h2>
                    <div className="Js-Imagen">
                        <img src="https://static.vecteezy.com/system/resources/previews/019/874/351/original/instagram-apps-icon-free-png.png" alt="Instagram" />
                        <img src="https://th.bing.com/th/id/OIP.YXhLFa13kBqBgbhqPXWA6wHaHa?rs=1&pid=ImgDetMain" alt="Linkedin" />
                        <img src="https://th.bing.com/th/id/OIP.ENIq-U2iyx2c51zh5Hv5aAHaHa?rs=1&pid=ImgDetMain" alt="Facebook" />
                    </div>
                </footer>
            </div>
        </>
    )
}