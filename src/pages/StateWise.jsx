import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonListHeader, IonList } from '@ionic/react';
import './StateWise.css';
import StateList from '../components/StateList';



const StateWise = () => {

  const [states, setStates] = useState([]);
  useIonViewWillEnter(async () => {
    const data = await fetch('https://api.covid19india.org/v2/state_district_wise.json');
    const res = await data.json();
    setStates(res.map(val => val.state));
    
  });

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>State Wise</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <StateList states={states} />        
        
      </IonContent>
    </IonPage>
  );
};

export default StateWise;
