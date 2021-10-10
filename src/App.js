import React, {useEffect, useState} from 'react';
import Header from './Header.js';
import Sidebar from "./Sidebar.js"
import {Container} from "react-bootstrap"
import Homescreen from './Homescreen.js';
import "./_app.scss";
import LoginScreen from './LoginScreen.js';
import { Redirect, Route,Switch,useHistory} from "react-router-dom";
import { useSelector } from 'react-redux';
import WatchScreen from './watchScreen/WatchScreen.js';
import SearchScreen from './SearchScreen.js';
import SubscriptionScreen from './subscriptionsscreen/SubscriptionScreen.js';
import ChannelScreen from './channelScreen/ChannelScreen.js';




const Layout= ({children})=>{

const [sidebar, toggleSidebar] = useState(false);
const handleToggleSidebar = ()=>{
  toggleSidebar(value =>!value)
}

  return(
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app__container">
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
          <Container fluid className="app__main border-warning">
            {children}
          </Container>
      </div>
      
    </>
  )
}

function App() {

  

  const {accessToken,loading} = useSelector(state => state.auth);
  const history = useHistory();


  

  useEffect(() => {
    
    if(!loading && !accessToken){
        history.push('/auth')
    }
  }, [accessToken,loading,history])


  return (
    
    
      <Switch>

        <Route path="/" exact >
          <Layout>
            <Homescreen/>
          </Layout>
        </Route>

        <Route path="/auth" exact>
          <LoginScreen/>
        </Route>

        <Route path="/search/:query">
          <Layout>
            <SearchScreen/>
          </Layout>
        </Route>

        <Route path="/watch/:id">
          <Layout>
            <WatchScreen/>
          </Layout>
        </Route>

        <Route path="/feed/subscription">
          <Layout>
            <SubscriptionScreen/>
          </Layout>
        </Route>

        <Route path="/channel/:channelId">
          <Layout>
            <ChannelScreen/>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/"/>
        </Route>

      </Switch>
    
    
  );
}

export default App;
