
export const fixedOneDigitDay = (day) => {
    return day.toString()[1]? day : '0' + day;
}

export const takeDateTasks = (tasksArray, timesTamp) => {
    const daily = []
    console.log(tasksArray);
    const dateInterface= (`${fixedOneDigitDay(timesTamp.day)}/${timesTamp.month}/${timesTamp.year}`)
     tasksArray?.map (tasks => tasks.map
                (task => (task.date === dateInterface)? 
                    daily.push(task) 
                    : null
                )
        );
    return daily;
}

export const test = (data) => {
    let prueba = {};

    prueba = data.category.tasks;
    prueba.icon = data.category.icon;

    return
}
