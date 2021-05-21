import React, {useRef, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import './Form.css';
import {auth, db} from '../firebase'


const FormSignup = ({ submitForm }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
    
        db.collection("Users")
          .add({
            email: email,
            password: password,
            phone: phone,
            name: name,
          })
          .then(() => {
            setLoader(false);
           
            alert("Бүртгэл амжилттай!");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setEmail("");
        setPassword("");
        setPhone("");
        setName("");
      };

    return (

        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Манай системд бүртгүүлснээр аюулын мэдээг цаг алдалгүй бүртгүүлсэн email хаяг болон утасны дуугаараар хүлээн авах боломжтой!
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Email хаяг *</label>
                    <input
                        className='form-input'
                        type='email'
                       
                        name='email'
                        placeholder='example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    
                    />
    
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Нууц үг *</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='*********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Утасны дугаар</label>
                    <input
                        className='form-input'
                        type='phone'
                        name='phone'
                        placeholder='+976 9999 8888'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Хэрэглэгчийн нэр *</label>
                    <input
                        className='form-input'
                        type='name'
                        name='name'
                        placeholder='Lorem Ipsum'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
     
                    />
                   
                </div>
   
                
                <button className='form-input-btn' type='submit'>  
                Бүртгүүлэх
                </button> 
                <a href='./' style={{backgroundColor: '#686868', color: 'white', padding: '14px 25px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', marginTop: '20px'}}>БУЦАХ</a>
            </form>
            
        </div>

    );
};

export default FormSignup;