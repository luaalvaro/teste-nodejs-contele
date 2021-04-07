import FormSection from "./components/FormSection";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const CheckoutOk = (props) => {
    return (
        <FormSection>
            <Title>Thank you for your purchase</Title>
            <Subtitle>We send all the details of this transition to <span>{props.formData.email}</span> and are at your disposal to answer any questions.<br /><br />Att contele </Subtitle>
        </FormSection>
        
    )
}

export default CheckoutOk;