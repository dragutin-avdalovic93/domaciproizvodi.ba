// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <section className="main-section">
                <div className="main-section-content">
                    <span className="main-section-text">
                        Dobrodošli na besplatnu platformu za pronalaženje i dodavanje proizvođača lokalnih proizvoda.{' '}
                        <a href="/dodaj-proizvodjaca" className="main-section-link">
                            Registrujte se kao lokalni proizvođač
                        </a>{' '}
                        a ukoliko imate poteškoća, kontaktirajte nas putem{' '}
                        <a href="/kontakt" className="main-section-link">
                            kontakt obrasca
                        </a>
                        . Za dodatne informacije pogledajte stranicu sa{' '}
                        <a href="/najcesca-pitanja" className="main-section-link">
                            najčešćim pitanjima
                        </a>
                        . Molimo vas da <strong>podijelite ovu stranicu</strong> sa prijateljima i porodicom koji su zainteresovani za
                        kupovinu ili prodaju lokalnih proizvoda kako bismo barem malo doprinijeli očuvanju naše poljoprivrede. Hvala!
                    </span>
                </div>
            </section>
            <footer>
                <p className="footer-text">
                    <em>
                        Napomena: Korištena mapa na ovom sajtu je besplatna za korištenje od strane programera, takozvana „open source“
                        mapa. Na primjer, korištenje Google mapa je plaćeno, a od ovog sajta nemamo prihod. Korištenjem ove mape, koju je
                        napravio programer iz Ukrajine, ne izražavamo politički stav – samo koristimo kvalitetne resurse za izradu
                        sajta, bez obzira na njihovo porijeklo.
                    </em>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
