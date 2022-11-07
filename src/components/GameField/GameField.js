import  "./GameField.scss"
import {useEffect, useState} from "react";
import {GameCell} from "../GameCell/GameCell";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedGameType} from "../../redux/GameTypeSlice/gametype.slice";
import {setGameLog} from "../../redux/GameLogSlice/gamelog.slice";

export const GameField = () => {
// states & variables
    const dispatch = useDispatch()
    const [gameTypeArray, setGameTypeArray ] = useState([]);
    const state = useSelector(state => state)
    const selectedGameType = state && state.gameTypeStore && state.gameTypeStore.selectedGameType
// end states & variables

// create game field array with row & column attributes
    useEffect(() => {
        let fieldTempArray = [];
        let iterRow = 0;
        let iterCol = 1;

        for (let i = 0; i < Math.pow(selectedGameType, 2); i++) {
            iterCol++;
            if(i % selectedGameType === 0){
                iterCol = 1;
                iterRow++;
            }
            let cell = {row: iterRow, column: iterCol}
            fieldTempArray.push(cell)
        }
        setGameTypeArray(fieldTempArray)
    }, [selectedGameType])
// end create game field array with row & column attributes

    return (
        <div className={`gameField__main`} style={{gridTemplateColumns: `repeat(${selectedGameType}, 1fr)`}}>
            {
                gameTypeArray && gameTypeArray.map((item, index) => {
                    return <GameCell item={item} key={index} />
                })
            }
        </div>
    )
}
