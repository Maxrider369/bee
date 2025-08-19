import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import Tabs from './pages/Tabs';
import Contacto from './pages/Contacto';
import AgregarLugar from './pages/AgregarLugar';
import ListaLugares from './pages/ListaLugares';

setupIonicReact();

export default function App() {
    const [lugares, setLugares] = useState([]);

    useEffect(() => {
        const lugaresGuardados = localStorage.getItem('lugares');
        if (lugaresGuardados) setLugares(JSON.parse(lugaresGuardados));
    }, []);

    useEffect(() => {
        localStorage.setItem('lugares', JSON.stringify(lugares));
    }, [lugares]);

    const agregarLugar = (nuevo) => {
        const nuevoConId = { ...nuevo, id: Date.now() };
        setLugares([...lugares, nuevoConId]);
    };

    const eliminarLugar = (id) => {
        setLugares(lugares.filter(l => l.id !== id));
    };

    return (
        <IonApp>
            {/* SplitPane solo en escritorio */}
            <IonSplitPane contentId="main-content" when="(min-width: 768px)">
                <IonRouterOutlet id="main-content">
                    <Switch>
                        <Route exact path="/tabs" render={() => <Redirect to="/tabs/bienvenidos" />} />
                        <Route path="/tabs" component={Tabs} />
                        <Route exact path="/contacto" component={Contacto} />
                        <Route exact path="/agregar" render={(props) => (
                            <AgregarLugar {...props} onAdd={agregarLugar} />
                        )} />
                        <Route exact path="/lista" render={(props) => (
                            <ListaLugares {...props} lugares={lugares} onDelete={eliminarLugar} />
                        )} />
                        <Redirect exact from="/" to="/tabs/bienvenidos" />
                    </Switch>
                </IonRouterOutlet>
            </IonSplitPane>

            {/* Para móvil, Tabs scrollable */}
            <div className="mobile-tabs">
                <Tabs />
            </div>

            <style>{`
                .mobile-tabs {
                    display: none;
                }
                @media (max-width: 767px) {
                    .mobile-tabs {
                        display: block;
                    }
                }
            `}</style>
        </IonApp>
    );
}
