import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonIcon 
} from "@ionic/react";
import { chevronDownCircleOutline } from 'ionicons/icons';
import { useEffect } from "react";
import '../theme/global.css';

export default function News() {
  useEffect(() => {
    console.log("Página cargada: Noticias sobre abejas");
  }, []);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar color="warning">
          <IonTitle>🐝 Noticias de Abejas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding background-bee">

        <IonAccordionGroup>
          {/* Noticia 1 */}
          <IonAccordion value="noticia1">
            <IonItem slot="header" color="light">
              <IonLabel>Nuevas Colmenas Urbanas</IonLabel>
              <IonIcon icon={chevronDownCircleOutline} slot="end" />
            </IonItem>
            <div className="ion-padding" slot="content">
              Un grupo de apicultores instala colmenas en azoteas para promover la
              polinización en la ciudad.
            </div>
          </IonAccordion>

          {/* Noticia 2 */}
          <IonAccordion value="noticia2">
            <IonItem slot="header" color="light">
              <IonLabel>Alerta por Pesticidas</IonLabel>
              <IonIcon icon={chevronDownCircleOutline} slot="end" />
            </IonItem>
            <div className="ion-padding" slot="content">
              Expertos advierten sobre el impacto de químicos en la disminución de
              poblaciones de abejas.
            </div>
          </IonAccordion>

          {/* Noticia 3 */}
          <IonAccordion value="noticia3">
            <IonItem slot="header" color="light">
              <IonLabel>Miel Orgánica</IonLabel>
              <IonIcon icon={chevronDownCircleOutline} slot="end" />
            </IonItem>
            <div className="ion-padding" slot="content">
              Se presenta una nueva marca de miel 100% natural producida en
              comunidades rurales.
            </div>
          </IonAccordion>
        </IonAccordionGroup>

      </IonContent>
    </IonPage>
  );
}
