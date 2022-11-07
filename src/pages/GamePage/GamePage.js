import  "./GamePage.scss"
import {useEffect, useState} from "react";
import {asyncRequestGameTypesApi} from "../../redux/GameTypeSlice/gametype.thunk";
import {useDispatch, useSelector} from "react-redux";
import {Select} from "../../components/UiLibraryComponents/Select/Select";
import {ButtonSmall} from "../../components/UiLibraryComponents/Buttons/ButtonSmall/ButtonSmall";
import {GameField} from "../../components/GameField/GameField";
import {GameLog} from "../../components/GameLog/GameLog";
import {SectionTitle} from "../../components/UiLibraryComponents/SectionTitle/SectionTitle";
import {setSelectedGameType} from "../../redux/GameTypeSlice/gametype.slice";

export const GamePage = () => {
// states & variables
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const gameTypeList = state && state.gameTypeStore && state.gameTypeStore.gameTypeList
    const [activateGameField, setActivateGameField] = useState(false);
// end states & variables

// get game types from api
    useEffect(() => {
        dispatch(asyncRequestGameTypesApi(dispatch))
    },[])
// end get game types from api

// change Game Type
    const changeGameType = (gameType) => {
        dispatch(setSelectedGameType(Number(gameType)))
        setActivateGameField(false)
    }
// end change Game Type

// start game
    const startGame = () => {
        setActivateGameField(true)
    }
// end start game

    return (
        <div className={`gamePage__main`}>
            <div>
                <div className={`gamePage__settings`}>
                    <Select selectAction={changeGameType} valuesArray={gameTypeList} placeholder={'Pick mode'}/>
                    <ButtonSmall buttonText={'Start'} buttonAction={startGame} />
                </div>
                <div  className={`gamePage__game-field-wrapper ${activateGameField ? "active" : ""}`}>
                    <GameField/>
                </div>
            </div>
            <div className={`gamePage__game-log-wrapper`}>
                <SectionTitle titleText={'Hover squares'} />
                <GameLog />
            </div>
        </div>
    )
}
