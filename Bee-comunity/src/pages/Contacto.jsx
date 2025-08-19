import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonModal,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonToast,
  IonList,
} from "@ionic/react";
import { close, leaf, send } from "ionicons/icons";
import '../theme/global.css';

export default function Contacto() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  // Estado del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    // Simula el envío: guarda en localStorage
    const datos = { nombre, correo, telefono, mensaje, fecha: new Date() };
    localStorage.setItem("contacto_abejas", JSON.stringify(datos));

    // Limpia campos
    setNombre("");
    setCorreo("");
    setTelefono("");
    setMensaje("");

    // Muestra confirmación
    setToastOpen(true);
    setIsOpen(false);
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>
          Contáctanos sobre nosotros 🍯🍵
        </h2>
        <p>
          El té de abejas es una infusión natural elaborada con miel pura, polen
          y hierbas seleccionadas. Es perfecto para fortalecer el sistema
          inmunológico, mejorar la digestión y disfrutar de un sabor único.
        </p>

        <IonList>
          <IonItem>
            <IonLabel>
              <strong>Teléfono:</strong> +52 7581160422
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <strong>Correo:</strong> contacto@teabejas.com
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <strong>Dirección:</strong> Calle de la Miel #123, Ciudad Abeja 🐝
            </IonLabel>
          </IonItem>
        </IonList>

        <IonButton expand="block" color="warning" onClick={() => setIsOpen(true)}>
          <IonIcon slot="start" icon={leaf}></IonIcon>
          Abrir Formulario
        </IonButton>

        {/* Modal con formulario */}
        <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
          <IonHeader>
            <IonToolbar color="warning">
              <IonTitle>Formulario de Contacto 🐝</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  <IonIcon icon={close}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Nombre</IonLabel>
              <IonInput
                value={nombre}
                onIonChange={(e) => setNombre(e.detail.value || "")}
                placeholder="Escribe tu nombre"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Correo</IonLabel>
              <IonInput
                type="email"
                value={correo}
                onIonChange={(e) => setCorreo(e.detail.value || "")}
                placeholder="ejemplo@email.com"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Teléfono</IonLabel>
              <IonInput
                type="tel"
                value={telefono}
                onIonChange={(e) => setTelefono(e.detail.value || "")}
                placeholder="+52 123 456 7890"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Mensaje</IonLabel>
              <IonTextarea
                value={mensaje}
                onIonChange={(e) => setMensaje(e.detail.value || "")}
                placeholder="Me interesa el té de abejas..."
              ></IonTextarea>
            </IonItem>

            <IonButton
              expand="block"
              color="success"
              className="ion-margin-top"
              onClick={handleSubmit}
            >
              <IonIcon slot="start" icon={send}></IonIcon>
              Enviar Mensaje
            </IonButton>
          </IonContent>
        </IonModal>

        {/* Toast de confirmación */}
        <IonToast
          isOpen={toastOpen}
          onDidDismiss={() => setToastOpen(false)}
          message="✅ Tu mensaje ha sido enviado. ¡Gracias por contactarnos!"
          duration={3000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
}
