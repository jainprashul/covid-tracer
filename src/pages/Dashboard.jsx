import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonChip, IonCard, IonLabel, IonRow, IonCol, IonBadge, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { IonRefresher, IonRefresherContent } from '@ionic/react';
import { arrowDownSharp } from 'ionicons/icons';

function doRefresh(e) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    e.detail.complete();
  }, 2000);
}



const DashBoard = () => {
    const [data, setData] = useState(0)
  useIonViewWillEnter(async () => {
    
    (await fetch('https://api.covid19india.org/data.json')).json().then(res => {
      setData(res);
    })

    
  })
  // console.log(data.statewise);
  let total = data && data.statewise['0']
  console.log(total);

  const { active, confirmed, deaths, recovered, lastupdatedtime  } = total;

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Covid 19 India</IonTitle>
          <IonBadge slot='end' color='light'>Last Updated &#13{lastupdatedtime}</IonBadge>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot='fixed' onIonRefresh={doRefresh}>
          <IonRefresherContent pullingIcon={arrowDownSharp} pullingText='Pull to refresh' refreshingSpinner='crescent'></IonRefresherContent>
        </IonRefresher>
        <div className="container">
          <IonCard className='card-content-md total-cases'>
            <h2>TOTAL CASES in India</h2>
            <IonItem class=''>
              <IonCol>
                <IonBadge color='danger'>{confirmed}</IonBadge>
                <p>Confirmed</p>
              </IonCol>
              <IonCol>
                <IonBadge >{active}</IonBadge>
                <p>Active</p>
              </IonCol>
              <IonCol>
                <IonBadge color='success'>{recovered}</IonBadge>
                <p>Recovered</p>
              </IonCol>
              <IonCol>
                <IonBadge color='dark'>{deaths}</IonBadge>
                <p>Deaths</p>
              </IonCol>
            </IonItem>
            
          </IonCard>
          
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default DashBoard;
