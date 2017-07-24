import firebase from 'firebase';


export class AuthService {
  signup(emai: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(emai, password);
  }
}
