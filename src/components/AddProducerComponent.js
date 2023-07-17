import React, { useState } from 'react';
import './AddProducerComponent.css';

function AddProducerComponent() {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    phone: '',
    registrationNumber: '',
    email: '',
    address: '',
    streetNumber: '',
    city: '',
    zip: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    body: '',
    phone: '',
    registrationNumber: '',
    city: '',
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (formData.title.trim() === '') {
      isValid = false;
      errors.title = 'Polje je obavezno';
    }

    if (formData.body.trim() === '') {
      isValid = false;
      errors.body = 'Polje je obavezno';
    }

    if (formData.phone.trim() === '') {
      isValid = false;
      errors.phone = 'Polje je obavezno';
    } else if (formData.phone.trim().length < 6 || formData.phone.trim().length > 20) {
      isValid = false;
      errors.phone = 'Telefon mora biti između 6 i 20 karaktera';
    }

    if (formData.registrationNumber.trim() === '') {
      isValid = false;
      errors.registrationNumber = 'Polje je obavezno';
    } else if (formData.registrationNumber.trim().length < 6 || formData.registrationNumber.trim().length > 32) {
      isValid = false;
      errors.registrationNumber = 'Registarski broj mora biti između 6 i 32 karaktera';
    }

    if (formData.city.trim() === '') {
      isValid = false;
      errors.city = 'Polje je obavezno';
    } else if (formData.city.trim().length < 5 || formData.city.trim().length > 128) {
      isValid = false;
      errors.city = 'Grad / Naselje mora biti između 5 i 128 karaktera';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Handle form submission and API communication
      console.log(formData);
    }
  };

  return (
    <div id="mainContainer">
      <h1>Postavite oglas/gazdinstvo</h1>
      <p>Molimo vas budite što detaljniji u opisu oglasa.<br/><b>Polja označena sa * su obavezna.</b></p>
      <form action="/submit" method="POST" className="userForm" id="submitForm" onSubmit={handleSubmit}>
        <div className="right">
          <label>
            Naziv gazdinstva *
            <input
              data-required="true"
              data-required-text="Obavezno polje"
              data-min-len="6"
              data-min-len-message="Naslov mora biti između 6 i 255 karaktera"
              data-max-num="255"
              data-max-len-message="Naslov mora biti između 6 i 255 karaktera"
              name="title"
              className={`submitFormInput ${formErrors.title && 'error'}`}
              id="title"
              placeholder="Npr. Gazdinstvo Petrović"
              value={formData.title}
              onChange={handleChange}
              type='text'
            />
            {formErrors.title && <span className="errorMessage">{formErrors.title}</span>}
          </label>
          <label>
            Sadržaj oglasa/objave *
            <textarea
              id="body"
              name="body"
              className={`submitFormInput ${formErrors.body && 'error'}`}
              value={formData.body}
              onChange={handleChange}
            ></textarea>
            {formErrors.body && <span className="errorMessage">{formErrors.body}</span>}
          </label>
          <label>
            Kontakt telefon gazdinstva *
            <input
              data-required="true"
              data-required-text="Obavezno polje"
              data-min-len="6"
              data-min-len-message="Telefon mora biti između 6 i 20 karaktera"
              data-max-num="20"
              data-max-len-message="Telefon mora biti između 6 i 20 karaktera"
              className={`submitFormInput ${formErrors.phone && 'error'}`}
              placeholder="Npr. 0xx xxx xxxx"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && <span className="errorMessage">{formErrors.phone}</span>}
          </label>
          <label>
            Registarski broj *
            <input
              data-required="true"
              data-min-len="6"
              data-min-len-message="Registarski broj mora biti između 6 i 32 karaktera"
              data-max-num="32"
              data-max-len-message="Registarski broj mora biti između 6 i 32 karaktera"
              className={`submitFormInput ${formErrors.registrationNumber && 'error'}`}
              placeholder="Npr. 01234567"
              name="registrationNumber"
              type="text"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
            {formErrors.registrationNumber && (
              <span className="errorMessage">{formErrors.registrationNumber}</span>
            )}
          </label>
          <label>
            Email adresa
            <input
              className="submitFormInput"
              placeholder=""
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Naziv ulice
            <input
              className="submitFormInput"
              placeholder="Npr. Karađorđeva"
              name="address"
              id="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Broj
            <input
              className="submitFormInput"
              placeholder="Npr. 23 ili BB"
              name="streetNumber"
              id="streetNumber"
              type="text"
              value={formData.streetNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Grad / Naselje *
            <input
              data-required="true"
              data-required-text="Obavezno polje"
              data-min-len="5"
              data-min-len-message="Grad / Naselje mora biti između 5 i 128 karaktera"
              data-max-num="128"
              data-max-len-message="Grad / Naselje mora biti između 5 i 128 karaktera"
              className={`submitFormInput ${formErrors.city && 'error'}`}
              placeholder="Npr. UB, selo Takovo"
              name="city"
              id="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && <span className="errorMessage">{formErrors.city}</span>}
          </label>
          <label>
            Poštanski broj
            <input
              className="submitFormInput"
              placeholder="12345"
              name="zip"
              id="zip"
              type="text"
              value={formData.zip}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="submitContainer" style={{ flexBasis: '100%' }}>
          <input type="submit" value="Pošalji" form="submitForm" className="buttonMain" />
        </div>
        <input type="hidden" name="categories[]" value="2" />
        <input name="coordinates[]" type="hidden" id="latitude" value="0" />
        <input name="coordinates[]" type="hidden" id="longitude" value="0" />
        <input name="coordinate[]" type="hidden" />
        <input name="coordinate[]" type="hidden" />
        <input name="hash_xciquef" type="hidden" />
      </form>
    </div>
  );
}

export default AddProducerComponent;


