import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { IonContent, IonPage } from "@ionic/react";
import  localForage  from 'localforage';

const IonicReactForm = () => {
  // const [loading, setLoading] = useState(false);
  const [loginType, setLoginType] = useState("login"); //TODO: default value based on whether a storage is existing or not");
  const [loginTypeInfo, setLoginTypeInfo] = useState(
    "Log in with the existing WhatsDapp profile on this device!"
  );
 

  const uloe = () => {
     localForage.setItem('name', 'renee');
    
  }

  const uilo = async() => {
    const value = await localForage.getItem('name')
    console.log(value)
    return value;
  }

  // Change h1 on login
  // TODO: Event type check
  const onLoginTypeChange = (event) => {
    const value = event.target.value;
    uloe()
    setLoginType(value);
    uilo()
    if (value === "login"){
      setLoginTypeInfo( "Log in with the existing WhatsDapp profile on this device!" );
      
    } 
    else setLoginTypeInfo("Create a new WhatsDapp profile on this device!");
  };

  // ON LOGIN SUBMIT
  // const onLogin = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   loginUser();
  // };

  // onRegister = (e) => {
  //   e.preventDefault();
  //   this.loginUser();
  // };

  // async function loginUser() {
  //   setLoading(true);
  //   //TODO: rename identity in options => identityAddr/dashIdentity?
  //   let options = {
  //     mnemonic: this.state.mnemonic === "" ? null : this.state.mnemonic,
  //     identity: this.state.identityAddr === "" ? null : this.state.identityAddr,
  //     createDpnsName: this.state.dpnsName === "" ? null : this.state.dpnsName,
  //     displayname:
  //       this.state.displayName === ""
  //         ? this.state.dpnsName
  //         : this.state.displayName,
  //     password: this.state.password === "" ? null : this.state.password,
  //   };
  //   let user;
  //   try {
  //     user = await ipcRenderer.invoke("connect", options);
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   this.setState({
  //     loading: false,
  //     dpnsError: false,
  //     loginError: false,
  //   });
  //
  //   if (user) {
  //     if (user.createDpnsName || this.state.dpnsName === "") {
  //       //dpns registration successfull or user doesn't want to register a name
  //       this.props.setLoggedInUser(user);
  //     } else {
  //       //identity was created but dpns name could not be registered
  //       this.setState({
  //         identityAddr: user.identity,
  //         dpnsError: true,
  //       });
  //     }
  //   } else {
  //     console.error("GUI: Log in of user failed");
  //     this.setState({ loginError: true });
  //   }
  // }

  const classes = {
    loginTypeRadios: {
      display: "block",
    },
    loginPaper: {
      margin: "auto",
      marginBottom: "25px",
      padding: "20px",
    },
    welcomeHeader: {
      marginLeft: "10px",
      marginTop: "30px",
      marginBottom: "20px",
    },
    textField: {
      marginBottom: "10px",
    },
    hide: {
      display: "none",
    },
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Typography variant="h4" style={classes.welcomeHeader}>
          Welcome to PDAPP APP!
        </Typography>
        <Paper elevation={2} style={classes.loginPaper}>
          <FormControl component="fieldset">
            <RadioGroup
              value={loginType}
              onChange={onLoginTypeChange}
              style={classes.loginTypeRadios}
              aria-label="Login or Registration"
            >
              <FormControlLabel
                value="login"
                control={<Radio color="primary" />}
                label="Login"
              />{" "}
              {/*TODO: Automatic disable if no account exists in storage*/}
              <FormControlLabel
                value="register"
                control={<Radio color="primary" />}
                label="Registration"
              />
            </RadioGroup>
            <Typography variant="body2">{loginTypeInfo}</Typography>
          </FormControl>
        </Paper>
        {/*--------- Login form -----------*/}
        <Paper
          hidden={loginType !== "login"}
          elevation={2}
          style={classes.loginPaper}
        >
          <form
            spellCheck="false"
            noValidate
            autoComplete="off"
            // onSubmit={this.onLogin}
          >
            <FormControl
              size="small"
              variant="filled"
              fullWidth
              style={classes.textField}
              // error={this.state.loginError}
            >
              <InputLabel htmlFor="login-password">Password</InputLabel>
              <FilledInput
                id="login-password"
                // type={this.state.showPassword ? "text" : "password"}
                // value={this.state.password}
                // onChange={this.onPasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={this.togglePasswordVisibility}
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {/*{this.state.showPassword ? (*/}
                      {/*  <Visibility />*/}
                      {/*) : (*/}
                      {/*  <VisibilityOff />*/}
                      {/*)}*/}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {/*{this.state.loginError && (*/}
              {/*  <FormHelperText id="component-error-text">*/}
              {/*    Wrong password or no account registered on this device!*/}
              {/*  </FormHelperText>*/}
              {/*)}*/}
            </FormControl>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              // endIcon={
              //   this.state.loading ? (
              //     <CircularProgress color="inherit" size={22} />
              //   ) : (
              //     <LockOpenIcon />
              //   )
              // }
            >
              Log in
            </Button>
          </form>
        </Paper>
        {/*--------- Register form -----------*/}
        <Paper
          hidden={loginType !== "register"}
          elevation={2}
          style={classes.loginPaper}
        >
          <form
            spellCheck="false"
            noValidate
            autoComplete="off"
            // onSubmit={this.onRegister}
          >
            <TextField
              label="Mnemonic"
              helperText="You need an existing wallet with some Dash on it. The mnemonic is used to create and fund an identity. CAUTION: This is a probably unsecure application for test environments. Never give a real mnemonic to some random, unverified application from the internet!"
              // value={this.state.mnemonic}
              // onChange={this.onMnemonicChange}
              required
              style={classes.textField}
              variant="filled"
              size="small"
              fullWidth
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={this.state.provideIdentityAddr}
                  // onChange={this.onProvideIdentityChange}
                  color="primary"
                />
              }
              label="Custom Identity Address"
              // className={
              //   // this.state.provideIdentityAddr ? "" : classes.textField
              // }
            />
            <TextField
              label="Identity Address"
              helperText="If you want to create a profile for a specific identity address, you can put it here. Otherwise a new identity will be created."
              // className={
              //   classes.textField +
              //   // (this.state.provideIdentityAddr ? "" : " " + classes.hide)
              // }
              // value={this.state.identityAddr}
              // onChange={this.onIdentityAddrChange}
              variant="filled"
              size="small"
              style={classes.textField}
              fullWidth
            />
            <TextField
              label="Username"
              helperText="Your unique username, with which your contacts can find you. If you use a custom identity and already registered a DPNS name for it you can leave this empty. If the name is already taken this shows an error."
              // error={this.state.dpnsError}
              // value={this.state.dpnsName}
              // onChange={this.onDpnsNameChange}
              required
              style={classes.textField}
              variant="filled"
              size="small"
              fullWidth
            />
            <TextField
              label="Display Name"
              helperText="If you want to provide a normal name to help others recognise you, this is your chance! "
              // value={this.state.displayName}
              // onChange={this.onDisplayNameChange}
              style={classes.textField}
              variant="filled"
              size="small"
              fullWidth
            />
            <FormControl
              required
              size="small"
              variant="filled"
              fullWidth
              style={classes.textField}
            >
              <InputLabel htmlFor="login-password">Password</InputLabel>
              <FilledInput
                spellCheck="false"
                id="register-password"
                // type={this.state.showPassword ? "text" : "password"}
                // value={this.state.password}
                // onChange={this.onPasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={this.togglePasswordVisibility}
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {/*{this.state.showPassword ? (*/}
                      {/*  <Visibility />*/}
                      {/*) : (*/}
                      {/*  <VisibilityOff />*/}
                      {/*)}*/}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText id="register-password">
                The password is used to encrypt your local chat storage.
              </FormHelperText>
            </FormControl>
            <Button
              // disabled={
              //   this.state.mnemonic === "" /*|| this.state.dpnsName === ''*/ ||
              //   this.state.password === ""
              // }
              fullWidth
              style={classes.submitButton}
              type="submit"
              variant="contained"
              color="primary"
              // endIcon={
              //   this.state.loading ? (
              //     <CircularProgress color="inherit" size={22} />
              //   ) : (
              //     <BackupIcon />
              //   )
              // }
            >
              Create Profile
            </Button>
            {/*{this.state.loading && (*/}
            {/*  <FormHelperText>This can take several minutes.</FormHelperText>*/}
            {/*)}*/}
          </form>
        </Paper>
      </IonContent>
    </IonPage>
  );
};
export default IonicReactForm;
