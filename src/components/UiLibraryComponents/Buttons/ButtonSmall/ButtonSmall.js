import "./ButtonSmall.scss"

export const ButtonSmall = ({buttonText, buttonAction, classList}) => {
    return (
        <button
            className={`button-small ${classList ? classList : ""}`}
            onClick={(e) => buttonAction(e)}
        >
            <span>{buttonText}</span>
        </button>
    )
}
