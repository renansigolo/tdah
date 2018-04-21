Projeto TDAH
==============

## TDAH

Esse projeto é pensado para auxiliar pessoas a descobrirem e lidarem com o TDAH

### Deploying to a Device

#### Android

#### Build

`ionic cordova build android --prod --release`

#### Sign

> Run from root directory


`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ref/tdah.keystore /Users/renan/Desktop/sites/tdah/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tdah`

> ##### Password
?????

#### Zipalign
> Run from root directory


`~/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 /Users/renan/Desktop/sites/tdah/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tdah.apk`

```
The Final Release should be at /tdah.apk
```

#### Publish to Google Play Store

https://play.google.com/apps/publish/?

> ##### Credentials

>renan.sigolo@gmail.com

>??????

## iOS

#### Build

`ionic cordova build ios --prod`

```
The Final Release should be at /platforms/ios/tdah.xcworkspace
```

#### Publish to iTunes Connect

https://itunesconnect.apple.com/

> ##### Credentials

>renan.sigolo@gmail.com

>??????
