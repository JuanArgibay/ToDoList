
export const fixedOneDigitDay = (day) => {
    return day.toString()[1]? day : '0' + day;
}

export const takeDateTasks = (tasksArray, timesTamp) => {
    const daily = []
    const dateInterface= (`${fixedOneDigitDay(timesTamp.day)}/${timesTamp.month}/${timesTamp.year}`)
     tasksArray?.map (tasks => 
                        tasks.map(task => 
                            (task.date === dateInterface)? 
                                daily.push(task) 
                                : null
                            )
                    );
    return daily;
}
