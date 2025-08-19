import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonGrid,
  IonBadge,
  IonChip,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel
} from '@ionic/react';
import '../theme/global.css';

export default function ListaLugares({ lugares, onDelete }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>🐝 Lugares Misteriosos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding background-bee">
        {lugares.length === 0 ? (
          <p style={{ textAlign: 'center', fontWeight: '500', marginTop: '20px' }}>
            No hay lugares agregados aún.
          </p>
        ) : (
          <IonGrid>
            {lugares.map((lugar) => (
              <IonCard key={lugar.id} style={{ margin: '10px 0', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                <div style={{ position: 'relative', width: '100%', height: '150px', overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                  <IonImg
                    src={lugar.foto}
                    alt={lugar.nombre}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <IonBadge color="warning" style={{ position: 'absolute', top: '10px', right: '10px', fontWeight: 'bold' }}>
                    {lugar.cantidad}
                  </IonBadge>
                </div>

                <IonCardHeader>
                  <IonCardTitle>{lugar.nombre}</IonCardTitle>
                  <IonChip color="tertiary" style={{ marginTop: '5px' }}>
                    {lugar.tipo}
                  </IonChip>
                </IonCardHeader>

                <IonCardContent style={{ fontWeight: '500' }}>
                  <IonAccordionGroup>
                    <IonAccordion value={`detalle-${lugar.id}`}>
                      <IonItem slot="header">
                        <IonLabel>Detalles del Lugar</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        <p><strong>Lugar:</strong> {lugar.lugar}</p>
                        <p><strong>Cantidad:</strong> {lugar.cantidad}</p>
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>

                  <IonButton
                    color="warning"
                    size="small"
                    onClick={() => onDelete(lugar.id)}
                    style={{
                      marginTop: '10px',
                      width: '100%',
                      fontWeight: 'bold',
                      borderRadius: '12px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}
                  >
                    🗑️ Eliminar
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
}
