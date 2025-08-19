import { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonMenuButton, IonButtons, IonButton, IonInput, IonImg, IonAlert,
  IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { useHistory } from 'react-router-dom';
import { informationCircle } from 'ionicons/icons';
import '../theme/global.css';

export default function AgregarLugar({ onAdd }) {
  const history = useHistory();
  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [lugar, setLugar] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showInfoAlert, setShowInfoAlert] = useState(false);

  const tomarFoto = async () => {
    try {
      const imagen = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        quality: 90,
        allowEditing: false
      });
      setFoto(imagen.dataUrl);
    } catch (error) {
      console.error('Error al tomar foto:', error);
      setAlertMessage('Error al tomar foto');
      setShowAlert(true);
    }
  };

  const guardar = () => {
    if (!foto) {
      setAlertMessage('Debes tomar una foto');
      setShowAlert(true);
      return;
    }
    if (!nombre || !tipo || !lugar || !cantidad) {
      setAlertMessage('Completa todos los campos');
      setShowAlert(true);
      return;
    }

    onAdd({
      nombre,
      tipo,
      lugar,
      cantidad,
      foto: foto.startsWith('data:image') ? foto : `data:image/jpeg;base64,${foto}`
    });

    setFoto(null);
    setNombre('');
    setTipo('');
    setLugar('');
    setCantidad('');

    history.push('/tabs/listalugares');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>🐝 Agregar Avistamiento</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding background-bee">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}>
          <div>
            {foto && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '15px'
              }}>
                <IonImg
                  src={foto}
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '3px solid #f2c94c',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                />
              </div>
            )}

            <IonInput
              placeholder="Nombre"
              value={nombre}
              onIonChange={e => setNombre(e.detail.value || '')}
              style={{
                borderRadius: '8px',
                border: '2px solid #f2c94c',
                padding: '10px',
                fontWeight: '500',
                marginTop: '10px'
              }}
            />
            <IonInput
              placeholder="Tipo"
              value={tipo}
              onIonChange={e => setTipo(e.detail.value || '')}
              style={{
                borderRadius: '8px',
                border: '2px solid #f2c94c',
                padding: '10px',
                fontWeight: '500',
                marginTop: '10px'
              }}
            />
            <IonInput
              placeholder="Lugar"
              value={lugar}
              onIonChange={e => setLugar(e.detail.value || '')}
              style={{
                borderRadius: '8px',
                border: '2px solid #f2c94c',
                padding: '10px',
                fontWeight: '500',
                marginTop: '10px'
              }}
            />
            <IonInput
              type="number"
              placeholder="Cantidad"
              value={cantidad}
              onIonChange={e => setCantidad(e.detail.value || '')}
              style={{
                borderRadius: '8px',
                border: '2px solid #f2c94c',
                padding: '10px',
                fontWeight: '500',
                marginTop: '10px'
              }}
            />
          </div>
          <IonButton
              expand="block"
              onClick={tomarFoto}
              style={{
                '--background': '#f2c94c',
                '--color': '#fff',
                fontWeight: 'bold',
                marginBottom: '15px',
                borderRadius: '12px'
              }}
            >
              🐝 Tomar Foto
            </IonButton>
          <IonButton
            expand="block"
            onClick={guardar}
            style={{
              '--background': '#f2c94c',
              '--color': '#fff',
              fontWeight: 'bold',
              marginTop: '20px',
              position: 'sticky',
              bottom: '10px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          >
            💛 Guardar
          </IonButton>
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="warning" onClick={() => setShowInfoAlert(true)}>
            <IonIcon icon={informationCircle} />
          </IonFabButton>
        </IonFab>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Error"
          message={alertMessage}
          buttons={['OK']}
        />
        <IonAlert
          isOpen={showInfoAlert}
          onDidDismiss={() => setShowInfoAlert(false)}
          header="ℹ️ Información"
          message="Este es un botón flotante de información."
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}
