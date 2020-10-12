import React, {useState} from "react";
import s from "./paginator.module.css"

let Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.pagesCount}>
            {portionNumber > 1 && <button
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
                className={s.btn}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <div key={p} className={currentPage === p ? s.selectedPage : s.pageNumber}
                                onClick={(e) => {
                                    onPageChanged(p)
                                }}>{p}</div>
                })}
            {portionNumber < portionCount && <button
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
                className={s.btn}>NEXT</button>}
        </div>
    )
}


export default Paginator;