import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonRange, IonIcon
} from "@ionic/react";
import { sunny, moon, colorPalette } from "ionicons/icons";
import '../theme/global.css';
export default function Settings() {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="warning">
          <IonTitle>⚙️ Ajustes de Abejas 🐝</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding background-bee">
        <IonList inset={true} className="bee-list">

          {/* Modo oscuro */}
          <IonItem>
            <IonIcon icon={moon} slot="start" color="dark" />
            <IonLabel>Modo Noche (Colmena)</IonLabel>
            <IonToggle color="warning" checked={false}></IonToggle>
          </IonItem>

          {/* Notificaciones */}
          <IonItem>
            <IonIcon icon={sunny} slot="start" color="warning" />
            <IonLabel>Notificaciones de abejas</IonLabel>
            <IonToggle color="success" checked={true}></IonToggle>
          </IonItem>

          {/* Tema de la colmena */}
          <IonItem>
            <IonIcon icon={colorPalette} slot="start" color="tertiary" />
            <IonLabel>Color de la Colmena</IonLabel>
            <IonSelect placeholder="Elige un tema">
              <IonSelectOption value="amarillo">Amarillo miel</IonSelectOption>
              <IonSelectOption value="cafe">Café abeja</IonSelectOption>
              <IonSelectOption value="verde">Verde pradera</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* Intensidad de vibración */}
          <IonItem>
            <IonLabel>Intensidad de vibración</IonLabel>
          </IonItem>
          <IonRange color="warning" min={0} max={100} pin={true} value={50}></IonRange>

        </IonList>
      </IonContent>
    </IonPage>
  );
}
