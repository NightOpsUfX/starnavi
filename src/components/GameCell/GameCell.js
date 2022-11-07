import  "./GameCell.scss"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setGameLog} from "../../redux/GameLogSlice/gamelog.slice";
import {setSelectedGameType} from "../../redux/GameTypeSlice/gametype.slice";

export const GameCell = ({item}) => {
// states & variables
    const dispatch = useDispatch()
    const [cellActive, setCellActive] = useState(false);
    const state = useSelector(state => state)
    const selectedGameType = state && state.gameTypeStore && state.gameTypeStore.selectedGameType
// end states & variables

// reset this cell if game type has been changed
    useEffect(() => {
        setCellActive(false)
    }, [selectedGameType])
// end this reset cell if game type has been changed

// change this Cell Status
    const changeCellStatus = () => {
        setCellActive( prevState => !prevState)
        dispatch(setGameLog(item))
    }
// change this Cell Status

    return (
        <div
            className={`gameCell ${cellActive ? "active" : ""} ${selectedGameType === 15 ? "medium-cell" : ""}  ${selectedGameType > 15 ? "small-cell" : ""}`}
            onMouseOver={() => changeCellStatus()}
            row={item.row}
            column={item.column}
        >
        </div>
    )
}
