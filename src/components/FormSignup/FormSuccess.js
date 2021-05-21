import React from 'react';
import './Form.css';
import success from '../../assets/img-3.svg';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Бүртгэл амжилттай!</h1>
      <img className='form-img-2' src={success} alt='success-image' />
      <a href='./'><button class="successbutton">БУЦАХ</button></a>
    </div>
  );
};

export default FormSuccess;