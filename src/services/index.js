import axios from 'axios';


export const saveLocalData = async (data) => {
    localStorage.setItem('data', JSON.stringify(data))
}

export const getData = async () => {
    const localData = await JSON.parse(localStorage.getItem('data', JSON.stringify()));
    if(!localData){
        const {data} = await axios.get('http://localhost:3000/db/data.json');
        saveLocalData(data);
        return data;     
    }
    return localData;
}

export const postCategory = async (data) => {
   let localData = await JSON.parse(localStorage.getItem('data'));
   localData = [...localData, data]
   saveLocalData(localData);
}