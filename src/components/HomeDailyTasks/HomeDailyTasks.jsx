import { CounterDaily } from "../CounterDaily/CounterDaily"
import './HomeDailyTasks.css'

export const HomeDailyTasks = () => {
  return (
            <section className="homeDailyTasks">
                <CounterDaily/>
                <article>
                    <ul>
                        <li className="listToDo">
                            <div>
                                <p>🏠</p>
                                <p>Poner la lavadora</p>
                            </div>
                            <p>16:30</p>
                        </li>
                    </ul>
                    <h3>Completed</h3>
                    <ul>
                        <li className="listDid">
                            <div>
                                <p>👷</p>
                                <p>Entregar el proyecto</p>
                            </div>
                            <p>20:00</p>
                        </li>
                    </ul>
                </article>
            </section>
  )
}
