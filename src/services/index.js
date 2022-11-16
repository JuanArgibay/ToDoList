import axios from 'axios';

export const getData = async () => {
    const {data} = await axios.get('http://localhost:3000/db/data.json');

    const dataUpdate = JSON.parse(localStorage.getItem('tasks')) || ([data])

    return dataUpdate[0]; 
}


export const saveLocalData = async (data) => {
    localStorage.setItem('data', JSON.stringify(data))
}