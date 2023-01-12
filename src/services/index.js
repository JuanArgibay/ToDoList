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
    try {
        let localData = await JSON.parse(localStorage.getItem('data'));
   localData = [...localData, data];
   saveLocalData(localData);
    } catch (error) {
        console.error(error);
    }
   
}

export const postTask = async (task, idCategory) => {
    let copy =[];
    try {
        const localData = await JSON.parse(localStorage.getItem('data'));
        if(localData){
            const test = localData.filter(local => local.category?.id === idCategory.toString());
            const {tasks} = test[0].category;
            const alltasks = [...tasks, task];
            
            localData.map(item => {
             if(item.category.id === idCategory.toString()) item.category.tasks = alltasks;
             let category = item.category;
             copy.push({category});
             return console.info('task created');;
            }
            );
            saveLocalData(copy)            
        } 
    } catch (error) {
        console.error(error);
    }   
}