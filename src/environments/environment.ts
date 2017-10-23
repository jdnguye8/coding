// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCz7hxS2E0Oiu2I8aVIqallyZB_spDAHdg",
    authDomain: "swuvsa-conference.firebaseapp.com",
    databaseURL: "https://swuvsa-conference.firebaseio.com",
    projectId: "swuvsa-conference",
    storageBucket: "swuvsa-conference.appspot.com",
    messagingSenderId: "831253624669"
  }
};
