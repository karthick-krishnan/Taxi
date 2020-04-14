import config from "./development.json";
import firebase from 'firebase';


const fb = firebase.initializeApp(config.dbConfig);

export default fb;
