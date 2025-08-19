import React, { useEffect, useState } from "react";
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonIcon
} from "@ionic/react";
import { flower } from "ionicons/icons";
import '../theme/global.css';


const Tab1 = () => {
  
  useEffect(() => {
    console.log("Tab1 cargada");
  }, []);

  const beeData = [
    {
      title: "Abeja Melífera",
      subtitle: "Apis mellifera",
      description: "Es la especie más común de abeja y produce miel.",
      image: "https://tse1.mm.bing.net/th/id/OIP.ZwAqPCWU5H7zyKgdhn372QHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3"
    },
    {
      title: "Abeja Solitaria",
      subtitle: "Andrena spp.",
      description: "Viven solas y son polinizadoras importantes.",
      image: "https://tse2.mm.bing.net/th/id/OIP.rHZllZ7RZieC7JemNE6YOAHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3"
    },
    {
      title: "Abeja Carpintera",
      subtitle: "Xylocopa spp.",
      description: "Se caracterizan por perforar madera para hacer sus nidos.",
      image: "https://th.bing.com/th/id/R.efcc1701b36dda3a47f86848874a01e5?rik=N2f4e%2bbh%2f2VpAg&pid=ImgRaw&r=0"
    }
  ];

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonIcon icon={flower} slot="start" style={{ "color": "#ffd600",
            "Height": "100px"
          }} />
          <IonTitle style={{ "color": "#ffd600"}}>Bee Comunity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ "--ion-background-color": "#fff2b2" }}>
        <div className="tab1-content">
          <h1>Bienvenido a Bee Comunity, tu espacio para compartir y descubrir.</h1>
          <p>Explora nuestras pestañas para comenzar.</p>


          <IonGrid>
            <IonRow>
              {beeData.map((bee, index) => (
                <IonCol size="12" sizeMd="6" sizeLg="4" key={index}>
                  <IonCard className="bee-card">
                    <img src={bee.image} alt={bee.title} style={{ width: "100%", borderRadius: "8px" }} />
                    <IonCardHeader>
                      <IonCardTitle>{bee.title}</IonCardTitle>
                      <IonCardSubtitle>{bee.subtitle}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      {bee.description}
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
