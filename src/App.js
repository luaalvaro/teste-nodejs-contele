import React, { useState } from 'react';

import Header from "./components/Header";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Button from "./components/Button";
import FormSectionLayout from "./FormSectionLayout";
import Checkout from "./Checkout";
import CheckoutOk from "./CheckoutOk";

import checkFormData from './Utils/checkFormData'

// Componente que ira renderizar o form ou o checkout
function CheckRender(props) {
  if (!props.checkout) {
    return <FormSectionLayout formData={props.formData} setFormData={props.setFormData} errors={props.errors} />;
  };

  return <Checkout formData={props.formData}/>;
};

function App() {
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [checkoutOk, setCheckoutOk] = useState(false);
  let canContinue = true;

  function handleOrder() {
    canContinue = true;
    setErrors(checkFormData(formData));
    let qtdErrors = checkFormData(formData);

    Object.values(qtdErrors).map(erro => {
      if (erro) {
        canContinue = false;
      }
      
      return '';
    })

    // Se não tiver erros de validações, vai definir o checkout mode pra true
    // e vai renderizar a tela de confirmar as informações
    if (canContinue) {
      setCheckoutMode(true)
    }

    if (canContinue && checkoutMode) {
      // send request
      // fetch post
      // redirecionar para pagina de finalização
      setCheckoutOk(true);
      setCheckoutMode(false);
    }
  };

  return (
    <>
      <Header>
        <Logo src="logo.png" />
      </Header>
        { !checkoutOk ?
        <CheckRender checkout={checkoutMode} formData={formData} setFormData={setFormData} errors={errors} /> :
        <CheckoutOk formData={formData} />
        }
      
      <Footer>
          {checkoutMode ? <Button onClick={() => {setCheckoutMode(false)}}>Voltar</Button> : ''}
          {!checkoutOk ? <Button onClick={handleOrder}>Order Now</Button> : ''}
          
      </Footer>
    </>
  );
};

export default App;