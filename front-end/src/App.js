import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import ChatContainer from './chatComponents/ChatContainer';
import UserLogin from './chatComponents/UserLogin';
import { useState } from 'react';

function App() {
  
  const [user, setUser] = useState('')
  const [mod, setMod] = useState('')

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <UserLogin setUser={setUser} setMod={setMod}/>
        </Route>
        <Route exact path='/chat'>
          <ChatContainer username={user} module={mod}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
