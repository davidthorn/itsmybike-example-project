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
