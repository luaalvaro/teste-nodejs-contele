export default function checkFormData(formData) {
    let errors = {};
    
    // contactInformation
    if (!formData.firstName) { errors.firstName = "First name cannot be blank"} else {errors.firstName = ""}
    if (!formData.lastName) { errors.lastName = "Last name cannot be blank"} else {errors.lastName = ""}
    if (!formData.email) { errors.email = "Email cannot be blank"} else if (formData.email.indexOf("@") === -1) { errors.email = "Email must be valid"} else {errors.email = ""}
    if (!formData.phone) { errors.phone = "Phone cannot be blank"} else {errors.phone = ""}
    if (!formData.language) { errors.language = "Language cannot be blank"} else {errors.language = ""}
    if (!formData.country) { errors.country = "Country cannot be blank"} else {errors.country = ""}

    

    // shippingAddress
    if (!formData.shippingAddress) { errors.shippingAddress = "Shipping address cannot be blank"} else {errors.shippingAddress = ""}
    if (!formData.shippingAddress2) { errors.shippingAddress2 = "Shipping 2 address cannot be blank"} else {errors.shippingAddress2 = ""}
    if (!formData.shippingCity) { errors.shippingCity = "Shipping city cannot be blank"} else {errors.shippingCity = ""}
    if (!formData.shippingState) { errors.shippingState = "Shipping state cannot be blank"} else {errors.shippingState = ""}
    if (!formData.shippingZip) { errors.shippingZip = "Shipping zip code cannot be blank"} else {errors.shippingZip = ""}
 
    if (!formData.sameAddress || formData.sameAddress === false) {
        // billingAddress
        if (!formData.billingAddress) { errors.billingAddress = "Billing address cannot be blank"} else {errors.billingAddress = ""}
        if (!formData.billingAddress2) { errors.billingAddress2 = "Billing address 2 cannot be blank"} else {errors.billingAddress2 = ""}
        if (!formData.billingCity) { errors.billingCity = "Billing city cannot be blank"} else {errors.billingCity = ""}
        if (!formData.billingState) { errors.billingState = "Billing state cannot be blank"} else {errors.billingState = ""}
        if (!formData.billingZip) { errors.billingZip = "Billing zip code cannot be blank"} else {errors.billingZip = ""}
    }

    // additionals
    if (!formData.manyTrackers) { errors.manyTrackers = "Please, how many trackers would you like to purchase?"} else {errors.manyTrackers = ""}


    return errors;
}