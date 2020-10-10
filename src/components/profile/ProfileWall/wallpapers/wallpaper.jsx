import React from "react";
import s from './wallpaper.module.css'
import wallpaper from "../../../../assets/images/wall.jpg"


const Wallpaper = () => {
    return (
            <div className={s.wallpaper}>
                <img src={wallpaper} alt="wall"/>
            </div>
    );
}

export default Wallpaper;