import FormSection from "./components/FormSection";
import Header from "./components/Header";
import Field from "./components/Field";
import Logo from "./components/Logo";
import Title from "./components/Title";
import Row from "./components/Row";
import Column from "./components/Column";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <>
      <Header>
        <Logo src="logo.png" />
      </Header>
      <FormSection>
          <Row>
            <Column>
              <Title>Contact Information:</Title>
              <Row>
                <Field placeholder="First name"/>
                <Field placeholder="Last name"/>
              </Row>
              <Row>
                <Field placeholder="Email"/>
                <Field placeholder="Phone"/>
              </Row>
              <Row>
                <Field placeholder="Language"/>
                <Field placeholder="Country"/>
              </Row>
            </Column>

            <Column>
              <Title>Shipping Address:</Title>
              <Row>
                <Field placeholder="Address Line 1"/>
              </Row>
              <Row>
                <Field placeholder="Address Line 2"/>
              </Row>
              <Row>
                <Field placeholder="City"/>
                <Field placeholder="State"/>
                <Field placeholder="Zip code"/>
              </Row>
            </Column>
          </Row>

          <Row>
              <Column>
                <Title>Shipping Address:</Title>
                <Row>
                  <Field placeholder="Address Line 1"/>
                </Row>
                <Row>
                  <Field placeholder="Address Line 2"/>
                </Row>
                <Row>
                  <Field placeholder="City"/>
                  <Field placeholder="State"/>
                  <Field placeholder="Zip code"/>
                </Row>
                <Row>
                  <Checkbox text="Use shipping address same as billing address"></Checkbox>
                </Row>
              </Column>

              <Column>
                <Title>Check the boxes below:</Title>
                <Row>
                  <Checkbox text="Does any veichle need to be equiped with a fuel of device?"></Checkbox>
                </Row>
                <Row>
                  <Checkbox text="Will any trackers be installed on a bike, truck or machinery?"></Checkbox>
                </Row>
                <Row>
                  <Checkbox text="Will you need to identify the fleet drivers?"></Checkbox>
                </Row>
                <Row>
                  <Field type="number" min="0" placeholder="How many trackers would you like to purchase?"/>
                </Row>
              </Column>
          </Row>

      </FormSection>

      <Footer>
          <Button>Order Now</Button>
      </Footer>
    </>
  );
}

export default App;