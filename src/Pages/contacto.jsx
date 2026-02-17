const Contacto = () => {
  return (
    <section className="contacto-container">
      <div className="contacto-card">
        <h2>✨ Contáctanos</h2>
        <p className="contacto-subtitle">
          Nuestro equipo está listo para ayudarte
        </p>

        <div className="contacto-info">
          <div className="info-item">
            <span>📱</span>
            <div>
              <p className="label">Teléfono</p>
              <p className="value">+57 320 641 4076</p>
            </div>
          </div>

          <div className="info-item">
            <span>📧</span>
            <div>
              <p className="label">Email</p>
              <p className="value">novashop@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contacto-footer">
          <p>⏰ Atención: Lunes a Sábado</p>
          <p>🚀 Respuesta rápida garantizada</p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
