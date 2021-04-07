import Input from './Input'
import Label from './Label'
import Span from './Span'

const Checkbox = (props) => {
    return (
        <Label>
            <Input checked={props.formData} onChange={props.setFormData} />
            <Span>{props.text}</Span>
        </Label>
    )
}

export default Checkbox;