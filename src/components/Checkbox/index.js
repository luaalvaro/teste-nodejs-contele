import Input from './Input'
import Label from './Label'
import Span from './Span'

const Checkbox = (props) => {
    return (
        <Label>
            <Input></Input>
            <Span>{props.text}</Span>
        </Label>
    )
}

export default Checkbox;