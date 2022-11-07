import  "./GameLog.scss"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const GameLog = ( ) => {
// states & variables
    const state = useSelector(state => state)
    const gameLogListLastChange = state && state.gameLogStore && state.gameLogStore.gameLog
    const selectedGameType = state && state.gameTypeStore && state.gameTypeStore.selectedGameType
    const [gameLogList, setGameLogList] = useState('')
// end states & variables

// reset game log list
    useEffect(() => {
        setGameLogList('')

        return
    }, [selectedGameType])
// end reset game log list

// fill game log list
    useEffect(() => {
        if((gameLogListLastChange !== '') && (gameLogList.length < 5)) {
            setGameLogList([gameLogListLastChange, ...gameLogList])
        }
        if(gameLogList.length === 5) {
            setGameLogList([gameLogListLastChange, ...gameLogList.slice(0,4)])
        }
    }, [gameLogListLastChange])
// end fill game log list

    return (
        <div className={`gameLog`}>
            <ul className={`gameLog__list`}>
                {
                    gameLogList && (gameLogList.length > 0) && (gameLogList[0] !== '') && gameLogList.map((item, index) => {
                        return (
                            <li key={index}  className={`gameLog__list-item`}>
                                <span>Row: {item.row}</span>  <span>Column: {item.column}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
