import Span from './Span';
import Input from './Input'
import Div from "./Div"

const Field = (props) => {
    return (
        <Div>
            <label>{props.text}</label>
            <Input name={props.name} placeholder={props.placeholder} value={props.formData} onChange={props.setFormData} />
            <Span>{props.errorText}</Span>
        </Div>
    )
}


// formData={props.formData.firstname} setFormData={(e) => {props.setFormData({...props.formData, firstname: e.target.value})}

export default Field;