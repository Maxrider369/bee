import { useState } from 'react';
import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonRouterOutlet
} from '@ionic/react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Bienvenidos from './Bienvenidos';
import Explora from './Explora';
import Acerca from './Acerca';
import Contacto from './Contacto';
import AgregarLugar from './AgregarLugar';
import ListaLugares from './ListaLugares';

import { home, planet, informationCircle, leaf, list, call } from 'ionicons/icons';

export default function Tabs() {
    const [lugares, setLugares] = useState([]);

    const agregarLugar = (lugar) => {
        setLugares([...lugares, { ...lugar, id: Date.now() }]);
    };

    const eliminarLugar = (index) => {
        const nuevosLugares = [...lugares];
        nuevosLugares.splice(index, 1);
        setLugares(nuevosLugares);
    };

    return (
        <IonTabs>
            <IonRouterOutlet>
                <Switch>
                    <Route exact path="/tabs/bienvenidos" component={Bienvenidos} />
                    <Route exact path="/tabs/explora" component={Explora} />
                    <Route exact path="/tabs/acerca" component={Acerca} />
                    <Route exact path="/tabs/contacto" component={Contacto} />
                    <Route exact path="/tabs/agregar" render={() => <AgregarLugar onAdd={agregarLugar} />} />
                    <Route exact path="/tabs/listalugares" render={() => <ListaLugares lugares={lugares} onDelete={eliminarLugar} />} />
                    <Route exact path="/tabs" render={() => <Redirect to="/tabs/bienvenidos" />} />
                </Switch>
            </IonRouterOutlet>

            <IonTabBar slot="bottom" className="scrollable-tabbar">
                <IonTabButton tab="bienvenidos" href="/tabs/bienvenidos">
                    <IonIcon icon={home} />
                    <IonLabel>Bienvenida</IonLabel>
                </IonTabButton>

                <IonTabButton tab="explora" href="/tabs/explora">
                    <IonIcon icon={planet} />
                    <IonLabel>Explora</IonLabel>
                </IonTabButton>

                <IonTabButton tab="agregar" href="/tabs/agregar">
                    <IonIcon icon={leaf} />
                    <IonLabel>Agregar</IonLabel>
                </IonTabButton>

                <IonTabButton tab="listalugares" href="/tabs/listalugares">
                    <IonIcon icon={list} />
                    <IonLabel>Lista</IonLabel>
                </IonTabButton>

                <IonTabButton tab="contacto" href="/tabs/contacto">
                    <IonIcon icon={call} />
                    <IonLabel>Contacto</IonLabel>
                </IonTabButton>

                <IonTabButton tab="acerca" href="/tabs/acerca">
                    <IonIcon icon={informationCircle} />
                    <IonLabel>Configuración</IonLabel>
                </IonTabButton>
            </IonTabBar>

            <style>{`
                /* Scroll horizontal en móviles */
                .scrollable-tabbar {
                    display: flex;
                    overflow-x: auto;
                    --background: #ffffff;
                }

                .scrollable-tabbar::-webkit-scrollbar {
                    display: none;
                }

                .scrollable-tabbar ion-tab-button {
                    flex: 0 0 auto;
                    min-width: 80px;
                    text-align: center;
                }

                @media (min-width: 768px) {
                    /* Desactivar scroll en escritorio */
                    .scrollable-tabbar {
                        overflow-x: hidden;
                        justify-content: space-around;
                    }
                    .scrollable-tabbar ion-tab-button {
                        flex: 1 1 auto;
                    }
                }
            `}</style>
        </IonTabs>
    );
}
