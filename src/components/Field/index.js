import Span from '../Checkbox/Span';
import Input from './Input'

const Field = (props) => {
    return (
        <>
            <label>{props.text}</label>
            <Input placeholder={props.placeholder} />
            <Span>{props.errorText}</Span>
        </>
    )
}

export default Field;