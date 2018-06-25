import { firebaseAuth } from '../../data/config';


const RegisterUser = (email,password) => (
  firebaseAuth().createUserWithEmailAndPassword(email,password)
)


export {
  RegisterUser
}