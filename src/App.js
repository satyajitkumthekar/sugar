import './App.css';
import {React, Component} from 'react';
import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';



class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=> {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser:null})
      }
      
        });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




render() {
  console.log('temp')

  return (
    <div className="App">

        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
   
      </div>
      
  )
}
}

export default App;