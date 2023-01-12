
export const oneDigit = (digit) => {
    return digit.toString().length === 1? '0' + digit.toString() : digit.toString(); 
}

export const takeDateTasks = (tasksArray, timesTamp) => {
    const daily = []
    const dateInterface= (`${oneDigit(timesTamp.day)}/${oneDigit(timesTamp.month)}/${timesTamp.year}`);
     tasksArray?.map (tasks => 
                        tasks.map(task => 
                            (task.date === dateInterface)? 
                                daily.push(task) 
                                : null
                            )
                    );
    return daily;
};
