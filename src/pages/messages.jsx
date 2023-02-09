import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import SendMessageForm from "../components/SendMessageForm";

function Messages() {
  const classes = {
    msgList: {
      flexGrow: 1,
      flexShrink: 1,
      overflowY: "auto",
    },
    ul: {
      padding: 0,
    },
    listSubheader: {
      // backgroundColor: theme.palette.background.default,
    },
  };

  let messages = [
    { primary: "primary1", secondary: "secondary1" },
    { primary: "primary2", secondary: "secondary2" },
  ];
  if (messages.length > 0) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <ListItem key={"addContactForm"}>
              <ListItemIcon>
                <IonRouterLink routerLink="/contacts" routerDirection="back">
                  <KeyboardBackspaceIcon />
                </IonRouterLink>
              </ListItemIcon>

              <ListItemText primary={"Account Name"} />
            </ListItem>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <List dense>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <ListItemText
                  // primary={
                  //   message.senderHandle +
                  //   (message.senderHandle === this.props.loggedInUser.identity
                  //     ? " (You) - "
                  //     : " - ") +
                  //   new Date(message.timestamp).toLocaleString()
                  // }
                  // secondary={JSON.parse(message.content).message}
                  primary={message.primary}
                  secondary={message.secondary}
                />
              </ListItem>
            ))}
          </List>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <SendMessageForm />
          </IonToolbar>
        </IonFooter>
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <IonContent style={classes.msgList}>
          No messages for the selected contact available.
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <SendMessageForm />
          </IonToolbar>
        </IonFooter>
      </IonPage>
    );
  }
}

export default Messages;
