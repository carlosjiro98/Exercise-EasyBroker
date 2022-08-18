import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pPage, nPage, getProperties, selectPage } from '../store/actions';
import s from './Pagination.module.css'
import le from '../img/l.svg';
import ri from '../img/r.svg';

export default function Pagination () {
    const actualPage = useSelector((state) => state.page);
    const dispatch = useDispatch();
    const pagination = useSelector((state) => state.pagination);

    //Component did update hook
    useEffect(() => {
        dispatch(getProperties(actualPage));
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, [actualPage])

    function handleNext () {
        dispatch(nPage());
    }

    function handlePrev () {
        dispatch(pPage());
        
    }

    function paginetionGen () {
        let totalPages = pagination ? Math.ceil(pagination.total / 15): "0"
        let b1 = actualPage >= 26 ? 27 :actualPage + 1;
        let b2 = actualPage >= 26 ? 28 :actualPage + 2;
        let b3 = actualPage >= 26 ? 29 :actualPage + 3;
        let b4 = actualPage >= 26 ? 30 :actualPage + 4;
        let b5 = actualPage >= 26 ? 31 :actualPage + 5;

        return <div className={s.pageButtons}>
            <button onClick={()=>dispatch(selectPage(1))}>{1}</button>
            <span>...</span>
            <button onClick={()=>dispatch(selectPage(b1))}>{b1}</button>
            <button onClick={()=>dispatch(selectPage(b2))}>{b2}</button>
            <button onClick={()=>dispatch(selectPage(b3))}>{b3}</button>
            <button onClick={()=>dispatch(selectPage(b4))}>{b4}</button>
            <button onClick={()=>dispatch(selectPage(b5))}>{b5}</button>
            <span>...</span>
            <button onClick={()=>dispatch(selectPage(totalPages))}>{totalPages}</button>
        </div>
    }

    return (
        <div className={s.mainContainer}>
            <div onClick={handlePrev} className={s.pagNePre}><img src={le} alt='previous' /></div>
            {paginetionGen()}
            <div onClick={handleNext} className={s.pagNePre}><img src={ri} alt='next' /></div>
        </div>
    )
}