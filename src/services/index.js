import axios from 'axios';


// Funcion que recoge todos los datos de ar arhivo json.
export const getData = async () => {
    const {data} = await axios.get('http://localhost:3000/db/data.json');

    const dataUpdate = JSON.parse(localStorage.getItem('tasks')) || ([data])

    return dataUpdate[0]; 
}


export const saveLocalData = async (data) => {
    localStorage.setItem('data', JSON.stringify(data))
}

export const getDaily = async () => {
    const {data} = await axios.get('http://localhost:3000/db/data.json');
    return data;
}