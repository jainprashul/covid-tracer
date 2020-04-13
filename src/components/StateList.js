import React from 'react'
import { IonList, IonItem, IonListHeader } from '@ionic/react'

const StateList = ({states}) => {
    return (
        <IonList>
            <IonListHeader>State Lists</IonListHeader>

            {
                states.map((state , index) => (
                    <IonItem key={index}>{state}</IonItem>
                    
                ))
            }
        </IonList>
    )
}

export default StateList
