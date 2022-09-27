import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

export const InputStore = ({inputType, inputClassList, inputActionToStore, inputValueSelectorInStore}) => {

    const inputRef = useRef();


    const dispatch =  useDispatch()
    const inputValueFromStore = useSelector((state) => state.mainStore[inputValueSelectorInStore])

    // const [inputValue, setInputValue] = useState()

    const changeInputValue = () => {
        // setInputValue(inputRef.current.value)
        dispatch(inputActionToStore(inputRef?.current?.value))
    }

    return (
        <div>
            <input
                className={`input-component ${inputClassList}`}
                type={inputType}
                ref={inputRef}
                onChange={(e) => {changeInputValue() }}
                value={inputValueFromStore}
            />
        </div>
    )
}
