const Contacto = () => {
  return (
    <section className="contacto">
      <div className="contacto-wrapper">
        <h1 className="contacto-title">Contáctanos</h1>
        <p className="contacto-subtitle">
          Nuestro equipo está listo para ayudarte
        </p>

        <div className="contacto-grid">
          <div className="contacto-item">
            <span className="icon">📞</span>
            <div>
              <h3>Teléfono</h3>
              <p>+57 320 641 4076</p>
            </div>
          </div>

          <div className="contacto-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>novashop@gmail.com</p>
            </div>
          </div>

          <div className="contacto-item">
            <span className="icon">⏰</span>
            <div>
              <h3>Horario</h3>
              <p>Lunes a Sábado</p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/573206414076"
          target="_blank"
          className="contacto-btn"
        >
          💬 Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contacto;
