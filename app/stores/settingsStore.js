import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

// Replace with your Configuration Information
const config = {
    apiKey: "AIzaSyD3pkd9S8D8H8LI7khDIsj_BR6N4cTxfhI",
    authDomain: "meal-discovery.firebaseapp.com",
    databaseURL: "https://meal-discovery.firebaseio.com",
    projectId: "meal-discovery",
    storageBucket: "meal-discovery.appspot.com",
    messagingSenderId: "77649506755"
  };
export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 5000
    this.splashImg = require('../../images/splash.jpg')
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}