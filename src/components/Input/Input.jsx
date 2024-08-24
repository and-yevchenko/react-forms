
export const Input = ({ ...props }) => {

    return (
        <div>
            <label htmlFor='emailTwo'>{props.label}</label>
            <input id='emailTwo' {...props.register} />
            <span>{props.errorMessage}</span>
        </div>
    )
}