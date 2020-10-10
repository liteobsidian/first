import React from "react";
import s from './preloader.module.css';
import preloader from "../../../assets/images/load.png";

const Preloader = () => {
    return <img className={s.preloader} src={preloader} alt="page is load"/>
}

export default Preloader