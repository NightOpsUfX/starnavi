import "./ButtonBig.scss"

export const ButtonBig = ({buttonText, buttonAction}) => {
    return (
        <button
            className={`button-big`}
            onClick={(e) => buttonAction(e)}
        >
            <span>{buttonText}</span>
        </button>
    )
}
