import './App.css'
import React, { useState, useEffect, Component }  from 'react';
import GetList from './News/GetList'
import Help from './Help/Help'
import Weather from './Weather/Weather'
import Flood from './Pages/Flood'
import Wind from './Pages/Wind'
import firebase from './firebase'
import Contact from './Contact/Contact'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Form from './FormSignup/Form';
import Khuvsgul from './province/Khuvsgul';
import Dornod from './province/Dornod';

function App(){
 
    React.useEffect(()=>{
      const msg = firebase.messaging();
      msg.requestPermission().then(()=>{
        return msg.getToken();
      }).then((data)=>{
        console.warn("token",data)
      })
    })
    const [articleList, setArticleList] = useState([]);
    useEffect(() => {
      async function fetchArticleList(){
        try {
          const requesUrl = '/api/article-list/';
          const reponse = await fetch(requesUrl);
          const reponseJSON = await reponse.json();
         //console.log(reponseJSON);
          setArticleList(reponseJSON)
        }catch {
  
        }
      }
      fetchArticleList();
    }, []);


        return (
        <Router>
          <div className="App">       
            <Switch>
              <Route exact path="/" exact component={Weather}/> 
              <Route path="/help" component={Help}/>  
              <Route path="/wind" component={Wind}/>
              <Route path="/flood" component={Flood}/>
              <Route path="/contact" component={Contact}/>          
              <Route
                path='/news'
                render={() => (
                  <GetList articleList={articleList}/>
                )}
              /> 
              <Route
                path='/Khuvsgul'
                render={() => (
                  <Khuvsgul articleList={articleList}/>
                )}
              /> 
              <Route
                path='/Dornod'
                render={() => (
                  <Dornod articleList={articleList}/>
                )}
              /> 
            </Switch>
          </div>   
          <Route path="/register" component={Form}/>
        </Router>
        
        );
  }
  

export default App;