import {useRef, useState} from "react";
import "./InputLocal.scss"
import userIcon from "../../../../assets/icons/User.svg";
import userIconActive from "../../../../assets/icons/User_active.svg";
import lockIcon  from "../../../../assets/icons/Lock.svg";
import lockIconActive  from "../../../../assets/icons/Lock_active.svg";

export const InputLocal = ({inputType, inputClassList, placeholder, inputValue, setInputValue, inputIcon}) => {
    const [inputFocus, setInputFocus] = useState(false);
    const inputRef = useRef();

    const changeInputValue = (e) => {
        setInputValue(inputRef.current.value)
    }

    const renderImage = (icon, activeIcon = false) => {
        if(activeIcon && icon === "userIcon") {
            return userIconActive
        }
        if(activeIcon && icon === "lockIcon") {
            return lockIconActive
        }
        if(icon === "userIcon") {
            return userIcon
        }
        if(icon === "lockIcon") {
            return lockIcon
        }
    }

    const inputFocusChange = (boolean) => {
        setInputFocus(boolean)
    }

    return (
        <div
            className={`input-component ${inputFocus ? "input-component-active" : "" }`}
            onFocus={() => {inputFocusChange(true)}}
            onBlur={() => {inputFocusChange(false)}}
        >
            <div className={`input-component__icon-wrapper`}>
                <img className={`input-component__icon`} src={renderImage(inputIcon)} alt=""/>
                <img className={`input-component__icon icon-active`} src={renderImage(inputIcon, true)} alt=""/>
            </div>
            <input
                className={`input-component__input-field ${inputClassList}`}
                type={inputType}
                placeholder={placeholder}
                value={inputValue}
                ref={inputRef}
                onChange={() => {changeInputValue() }}
            />
        </div>
    )
}
