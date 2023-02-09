# PRIVATE MESSENGER DAPP

This app is built using Ionic + React + Material UI with Implementation from [Signal](https://github.com/signalapp/libsignal) Secure Messaging Library.

The app uses [LocalForage](https://github.com/localForage/localForage) for storing of sessions and messages.

To use without command line:
    Please download the application from Releases and install on your mobile device - Link [here](https://github.com/chattertechno/pdapp/releases)

For development please use ;

` git clone https://github.com/chattertechno/pdapp.git `

Install node modules 

` npm i `

Start the app in development environment

` npm start  `

The app will be built over to your web browser and you can simulate mobile view by using DevTool

For ANDROID development environment
Make sure Android Studio is installed on your machine.
The app used capacitor for native build.

`ionic capacitor add android `

package id can be reconfigured on capacitor.config.ts file..

For iOS development environment
Make sure Xcode is installed on your machine,

`ionic capacitor add ios`

to run the app

` ionic capacitor open ios `

Troubleshooting For [iOS](https://ionicframework.com/docs/developing/ios) 
Troubleshooting For [Android](https://ionicframework.com/docs/developing/android)




[DOCUMENTATION](https://ionicframework.com/docs/developing/previewing)

More on [IONIC](https://ionicframework.com/docs)

# HOW TO USE THE DAPP

When the app launches for the first time,you will be required to register with your Dash mnemonic.

<details><summary>Show registration screenshot 1</summary>
	<img src="/images/register1.PNG">
</details>

<details><summary>Show registration screenshot 2</summary>
	<img src="/images/register2.PNG">
</details>

If you want PDAPP to create an identity for you just type in your wish-DPNS name in "Username". WhatsDapp will follow the Dash tutorials mentioned above and creates an identity, tops up with 1000 duffs and registers the DPNS name.

The "Display Name" can be same as your DPNS but doesn't have to. This is your PDAPP internal name. It will be used for displaying contacts/messages.

The "Password" is used to encrypt your local storage. So the next time you use PDAPP, you'll only have to type this password to login.

<details><summary>Show login screenshot</summary>
	<img src="/images/loginDapp.PNG">
</details>

Be patient... Your pdapp profile will be created and uploaded containing your key-bundles for session-setup.

You'll be forwarded to a message window. Here you can search for a DPNS name and add to your conversations (receiver also needs to upload a pdapp profile in first place, too).

Now start secure chatting over the blockchain ;) Be patient again... Sent messages will be shown after they arrived at the blockchain implying success.

<details><summary>Show DPNS SEARCH screenshot</summary>
	<img src="/images/dashsearch.PNG">
</details>