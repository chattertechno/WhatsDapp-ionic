import React from "react";
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessageForm() {
  const classes = {
    sendMsg: {
      display: "flex",
      // margin: theme.spacing(1),
    },
    txtField: {
      flexGrow: 1,
      flexShrink: 0,
      // marginRight: theme.spacing(1),
    },
  };

  return (
    <form
      // onSubmit={this.onSubmit}
      noValidate
      autoComplete="off"
      style={classes.sendMsg}
    >
      <TextField
        label="Send Message"
        // value={this.state.msgText}
        // onChange={this.onChange}
        // onKeyPress={this.onKeyPress}
        variant="filled"
        style={classes.txtField}
        multiline
        rowsMax="5"
        size="small"
      />
      <IconButton aria-label="Send" type="submit">
        <SendIcon />
      </IconButton>
    </form>
  );
}

export default SendMessageForm;
