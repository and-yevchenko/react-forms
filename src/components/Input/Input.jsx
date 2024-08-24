
export const Input = ({ ...props }) => {

    return (
        <div>
            <label htmlFor='emailTwo'>{props.label}</label>
            <input type={props.type} id='emailTwo' {...props.register} />
            <span>{props.errorMessage}</span>
        </div>
    )
}