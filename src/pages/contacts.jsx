import React from "react";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";

function Contacts() {
  const sessions = [
    { profile_name: "dashPns" },
    { profile_name: "dashplatform" },
    { profile_name: "dashpay" },
  ];
  const classes = {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    // toolbar: theme.mixins.toolbar,
    listItemText: {
      overflowWrap: "break-word",
    },
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <List>
            <ListItem key={"addContactForm"}>
              <TextField
                label="DPNS Name"
                // value={this.state.addContactInput}
                variant="outlined"
                size="small"
                fullWidth
                // onChange={this.onAddContactInputChange}
              />
              <ListItemSecondaryAction>
                <IconButton
                  // onClick={this.addContact}
                  edge="end"
                  aria-label="Add contact via DPNS Name"
                >
                  <PersonAddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </IonToolbar>
      </IonHeader>
      <IonContent
      // style={classes.drawer}
      // variant="permanent"
      // classes={{ paper: classes.drawerPaper }}
      >
        {/*<div style={classes.toolbar} /> {/*necessary for content to be below app bar. TODO: mache ich überhaupt noch ne appbar?/*}
                <Divider />*/}
        <List>
          {sessions.map((session, index) => {
            return (
              <IonRouterLink routerLink="/messages" routerDirection="forward">
                <ListItem
                  key={index}
                  // onClick={(e) => this.onContactOpened(session)}
                >
                  <ListItemAvatar>
                    {/*{handlesWithNewMessage.indexOf(session.profile_name) > -1 ? (*/}
                    {/*  <Badge color="primary" variant="dot" overlap="circle">*/}
                    {/*    <Avatar>*/}
                    {/*      <PersonIcon />*/}
                    {/*    </Avatar>*/}
                    {/*  </Badge>*/}
                    {/*) : (*/}
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                    {/*)}*/}
                  </ListItemAvatar>
                  <ListItemText
                    style={classes.listItemText}
                    primary={session.profile_name}
                  />
                </ListItem>
              </IonRouterLink>
            );
          })}
        </List>
      </IonContent>
    </IonPage>
  );
}

const drawerWidth = 250;

export default Contacts;
