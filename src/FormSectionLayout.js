import FormSection from "./components/FormSection";
import Field from "./components/Field";
import Title from "./components/Title";
import Row from "./components/Row";
import Column from "./components/Column";
import Checkbox from "./components/Checkbox";

const FormSectionLayout = (props) => {
    return (
        <FormSection>
            <Row>
                <Column>
                    <Title>Contact Information:</Title>
                    <Row>
                    <Field placeholder="First name" formData={props.formData.firstName} setFormData={(e) => {props.setFormData({...props.formData, firstName: e.target.value})}} errorText={props.errors.firstName} />
                    <Field placeholder="Last name" formData={props.formData.lastName} setFormData={(e) => {props.setFormData({...props.formData, lastName: e.target.value})}} errorText={props.errors.lastName} />
                    </Row>
                    <Row>
                    <Field placeholder="Email" formData={props.formData.email} setFormData={(e) => {props.setFormData({...props.formData, email: e.target.value})}} errorText={props.errors.email} />
                    <Field placeholder="Phone" formData={props.formData.phone} setFormData={(e) => {props.setFormData({...props.formData, phone: e.target.value})}} errorText={props.errors.phone} />
                    </Row>
                    <Row>
                    <Field placeholder="Language" formData={props.formData.language} setFormData={(e) => {props.setFormData({...props.formData, language: e.target.value})}} errorText={props.errors.language} />
                    <Field placeholder="Country" formData={props.formData.country} setFormData={(e) => {props.setFormData({...props.formData, country: e.target.value})}} errorText={props.errors.country} />
                    </Row>
                </Column>

                <Column>
                    <Title>Shipping Address:</Title>
                    <Row>
                    <Field placeholder="Address Line 1" formData={props.formData.shippingAddress} setFormData={(e) => {props.setFormData({...props.formData, shippingAddress: e.target.value})}} errorText={props.errors.shippingAddress} />
                    </Row>
                    <Row>
                    <Field placeholder="Address Line 2" formData={props.formData.shippingAddress2} setFormData={(e) => {props.setFormData({...props.formData, shippingAddress2: e.target.value})}} errorText={props.errors.shippingAddress2} />
                    </Row>
                    <Row>
                    <Field placeholder="City" formData={props.formData.shippingCity} setFormData={(e) => {props.setFormData({...props.formData, shippingCity: e.target.value})}} errorText={props.errors.shippingCity} />
                    <Field placeholder="State" formData={props.formData.shippingState} setFormData={(e) => {props.setFormData({...props.formData, shippingState: e.target.value})}} errorText={props.errors.shippingState} />
                    <Field placeholder="Zip code" formData={props.formData.shippingZip} setFormData={(e) => {props.setFormData({...props.formData, shippingZip: e.target.value})}} errorText={props.errors.shippingZip} />
                    </Row>
                </Column>
            </Row>

            <Row>
                <Column>
                    <Title>Shipping Address:</Title>
                    <Row>
                        <Field placeholder="Address Line 1" formData={props.formData.billingAddress} setFormData={(e) => {props.setFormData({...props.formData, billingAddress: e.target.value})}} errorText={props.errors.billingAddress} />
                    </Row>
                    <Row>
                        <Field placeholder="Address Line 2" formData={props.formData.billingAddress2} setFormData={(e) => {props.setFormData({...props.formData, billingAddress2: e.target.value})}} errorText={props.errors.billingAddress2} />
                    </Row>
                    <Row>
                        <Field placeholder="City" formData={props.formData.billingCity} setFormData={(e) => {props.setFormData({...props.formData, billingCity: e.target.value})}} errorText={props.errors.billingCity} />
                        <Field placeholder="State" formData={props.formData.billingState} setFormData={(e) => {props.setFormData({...props.formData, billingState: e.target.value})}} errorText={props.errors.billingState} />
                        <Field placeholder="Zip code" formData={props.formData.billingZip} setFormData={(e) => {props.setFormData({...props.formData, billingZip: e.target.value})}} errorText={props.errors.billingZip} />
                    </Row>
                    <Row>
                        <Checkbox text="Use shipping address same as billing address" formData={props.formData.sameAddress} setFormData={(e) => {props.setFormData({...props.formData, sameAddress: e.target.checked})}} />
                    </Row>
                </Column>

                <Column>
                    <Title>Check the boxes below:</Title>
                    <Row>
                        <Checkbox text="Does any veichle need to be equiped with a fuel of device?" formData={props.formData.needFuelDevice} setFormData={(e) => {props.setFormData({...props.formData, needFuelDevice: e.target.checked})}} />
                    </Row>
                    <Row>
                        <Checkbox text="Will any trackers be installed on a bike, truck or machinery?" formData={props.formData.bikeOrTruck} setFormData={(e) => {props.setFormData({...props.formData, bikeOrTruck: e.target.checked})}} />
                    </Row>
                    <Row>
                        <Checkbox text="Will you need to identify the fleet drivers?" formData={props.formData.fleetDrivers} setFormData={(e) => {props.setFormData({...props.formData, fleetDrivers: e.target.checked})}} />
                    </Row>
                    <Row>
                        <Field type="number" min="0" placeholder="How many trackers would you like to purchase?" formData={props.formData.manyTrackers} setFormData={(e) => {props.setFormData({...props.formData, manyTrackers: e.target.value})}} errorText={props.errors.manyTrackers} />
                    </Row>
                </Column>
            </Row>
        </FormSection>

    )
}

export default FormSectionLayout