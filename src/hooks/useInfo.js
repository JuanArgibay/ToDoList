import {useEffect, useState} from 'react';
import { getData } from '../services';

export const useInfo = () => {
    const [ totalInfo, setTotalInfo ] = useState([]);

    useEffect(() => {
        const getTotalInfo = async () => {
            const data = await getData()
            setTotalInfo(data)
        }
        getTotalInfo();
    }, [])

    return { totalInfo }
}