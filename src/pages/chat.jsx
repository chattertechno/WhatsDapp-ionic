import React from "react";
import Contacts from "./contacts";
import { IonContent, IonPage } from "@ionic/react";

function Chat() {
  return (
    <IonPage>
      <IonContent>
        <Contacts
        // sessions={this.state.sessions}
        // openedContact={this.state.activatedSession}
        // setOpenedContact={this.setActivatedSession}
        // handlesWithNewMessage={this.state.handlesWithNewMessage}
        // newContact={this.newContact}
        />
      </IonContent>
    </IonPage>
  );
}

export default Chat;
