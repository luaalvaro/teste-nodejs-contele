import FormSection from "./components/FormSection";
import Row from "./components/Row";
import Column from "./components/Column";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const Checkout = (props) => {
    return (
        <FormSection>
            <Title>Confirm that everything is correct</Title>
            <Row>
                <Column>
                    <Title>Contact info</Title>
                    <Subtitle>First name: <span>{props.formData.firstName}</span></Subtitle>
                    <Subtitle>Last name: <span>{props.formData.lastName}</span></Subtitle>
                    <Subtitle>Email: <span>{props.formData.email}</span></Subtitle>
                    <Subtitle>Phone: <span>{props.formData.phone}</span></Subtitle>
                    <Subtitle>Language: <span>{props.formData.language}</span></Subtitle>
                    <Subtitle>Country: <span>{props.formData.country}</span></Subtitle>
                </Column>
                <Column>
                    <Title>Shipping address</Title>
                    <Subtitle>Address line 1: <span>{props.formData.shippingAddress}</span></Subtitle>
                    <Subtitle>Address line 2: <span>{props.formData.shippingAddress2}</span></Subtitle>
                    <Subtitle>City: <span>{props.formData.shippingCity}</span></Subtitle>
                    <Subtitle>State: <span>{props.formData.shippingState}</span></Subtitle>
                    <Subtitle>Zip: <span>{props.formData.shippingZip}</span></Subtitle>
                </Column>
            </Row>

            <Row>
                <Column>
                    <Title>Billing address</Title>
                    <Subtitle>Address line 1: <span>{props.formData.billingAddress}</span></Subtitle>
                    <Subtitle>Address line 2: <span>{props.formData.billingAddress2}</span></Subtitle>
                    <Subtitle>City: <span>{props.formData.billingCity}</span></Subtitle>
                    <Subtitle>State: <span>{props.formData.billingState}</span></Subtitle>
                    <Subtitle>Zip: <span>{props.formData.billingZip}</span></Subtitle>
                    <Subtitle>Use shipping address same as billing address? <span>{props.formData.sameAddress ? 'True' : 'False'}</span></Subtitle>
                </Column>
                <Column>
                    <Title>Additionals</Title>
                    <Subtitle>Does any veichle need to be equiped with a fuel of device? <span>{props.formData.needFuelDevice ? 'True' : 'False'}</span></Subtitle>
                    <Subtitle>Will any trackers be installed on a bike, truck or machinery? <span>{props.formData.bikeOrTruck ? 'True' : 'False'}</span></Subtitle>
                    <Subtitle>Will you need to identify the fleet drivers? <span>{props.formData.fleetDrivers ? 'True' : 'False'}</span></Subtitle>
                    <Subtitle>How many trackers would you like to purchase? <span>{props.formData.manyTrackers}</span></Subtitle>
                </Column>
            </Row>
        </FormSection>
        
    )
}

export default Checkout;