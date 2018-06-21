# TDAH

Esse projeto é pensado para auxiliar pessoas a descobrirem e lidarem com o TDAH

## Development server

1. Run `yarn serve` for a dev server.

1. Navigate to `http://localhost:4200/`.

1. The app will automatically reload if you change any of the source files.

## Built With

* [Ionic v1](https://ionicframework.com/) - The framework used
* [AngularJS](https://angularjs.org/) - The framework used
* [Firebase](https://firebase.google.com/) - Used as host, storage and fireStore as a DB

## Dev tools

* [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.

## Build

Run `yarn build-dev` to build the project. Use the `yarn build-prod` for a production build.

### Android

#### Sign

> Run from root directory

`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ref/tdah.keystore /Users/renan/Desktop/sites/tdah/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tdah`


#### Zipalign

> Run from root directory

`~/Library/Android/sdk/build-tools/27.0.3/zipalign -v 4 /Users/renan/Desktop/sites/tdah/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tdah.apk`

```
The Final Release should be at /tdah.apk
```

#### Publish to Google Play Store

https://play.google.com/apps/publish/?

> ##### Credentials
> renan.sigolo@gmail.com

## iOS

```
The Final Release should be at /platforms/ios/tdah.xcworkspace
```

#### Publish to iTunes Connect

https://itunesconnect.apple.com/

> ##### Credentials
> renan.sigolo@gmail.com

## Authors

* [Renan Sigolo](https://github.com/renansigolo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Inspiring the world to be more collaborative.
