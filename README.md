# itsmybike - example project

This repository contains code that I have been sent so as I could review and complete a section of the code for them.

The only part of this project that has been modified by myself is within this file: `./src/login/components/PhoneInput/PhoneInput.tsx`.

I will not be maintaining this repository in anyway.

The remaining parts of this README are not written by me and are from the original source code that I received.

# setup

*install node js
*clone this repo

```console
npm install expo-cli --global
```

# itsmybike-appv2

```console
yarn install
```

## run the app in expo

```console
expo start
```

channel: { dev | release }

## run the jest tests

```console
yarn test
```

## build bundle for android

```console
expo build:android --release-channel <channel> -t app-bundle
```

## build bundle for iOS

```console
expo build:ios --release-channel <channel>
expo upload:ios
```

# build script

Log in to the IoT-Venture Expo account (f.roeper@iot-venture.com)

```console
expo login
```

Increase the version and the versionCode in app.json

## build android

```console
expo build:android --release-channel release -t app-bundle
```

Upload the aab file to the Google Play Console
