import React from "react";

const AcordeonFAQ = () => {
  return (
    <>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          ¿Cuáles son los medios de pago disponibles?
        </div>
        <div className="collapse-content">
          <p>
            Se puede pagar por transferencia bancaria, en efectivo o en dólar
            billete. Los precios en pesos son al dolar blue de la fecha.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿Cuánto tarda la entrega de los productos?
        </div>
        <div className="collapse-content">
          <p>
            El tiempo de entrega es de 3 a 5 días hábiles dentro de San Martín
            de los Andes y de 5 a 7 días hábiles en otras localidades.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿Cómo puedo rastrear mi pedido?
        </div>
        <div className="collapse-content">
          <p>
            Una vez que tu pedido haya sido enviado, te vamos a enviar un link
            con un número de seguimiento para que puedas rastrear tu paquete en
            todo momento.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿Que pasa si mi pedido llega dañado?
        </div>
        <div className="collapse-content">
          <p>
            En ese caso te pediriamos que nos envies el paquete de vuelta y te
            enviamos uno nuevo
          </p>
        </div>
      </div>
    </>
  );
};

export default AcordeonFAQ;
