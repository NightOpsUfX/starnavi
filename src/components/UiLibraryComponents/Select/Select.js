import "./Select.scss"

export const Select = ({ valuesArray, selectAction }) => {

    return (
        <select
            defaultValue={valuesArray ? (valuesArray[0]) : ""} name="" id=""
            className={`selectComponent`}
            onChange={({ target: { value } }) => selectAction(value)}
        >
            {
                valuesArray &&
                valuesArray.map((item) => {
                    return <option key={item} value={item}>{item}</option>
                })
            }
        </select>
    )
}
