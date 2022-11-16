

const List = ({totalInfo}) => {
    console.log(totalInfo);
    return (
        <>
            <ul className='task-list'> 
                {totalInfo?.map((info, index) => {
                    console.log(info.category.tasks);
                    return (
                        <li 
                            key={index} 
                            className={info.category.tasks.completed ? 'true':'false'}
                        >
                            <h1>{info.category.name}</h1>
                            <h2>{info.category.tasks.title}</h2>
                            <p>{info.category.tasks.description}</p>
                            <p>{info.category.tasks.hour}</p>
                            <p>{info.category.tasks.date}</p>
                            
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default List;