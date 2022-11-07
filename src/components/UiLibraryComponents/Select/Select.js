import "./Select.scss"

export const Select = ({
                           valuesArray,
                           selectAction,
                           // placeholder
}) => {

    // console.log('placeholder', placeholder)

    return (
        <select
            defaultValue={valuesArray ? (valuesArray[0]) : ""} name="" id=""
            className={`selectComponent`}
            onChange={({ target: { value } }) => selectAction(value)}
            // placeholder={placeholder ? placeholder : ''}
        >
            {
                valuesArray &&
                valuesArray.map((item) => {
                    return (
                        <option
                            key={item.name ? item.name : item}
                            defaultValue={'Pick mode'}
                            value={item.field ? item.field : item}
                        >
                            {item.name ? item.name : item}
                        </option>
                    )
                })
            }
        </select>
    )
}
