export default function validateInfo(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Email заавал оруулна уу!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email хаяг буруу байна!';
    }
    if (!values.password) {
      errors.password = 'Нууц үг заавал оруулна уу!';
    } else if (values.password.length < 6) {
      errors.password = 'Нууц үг 6 болон түүнээс дээш тоо, тэмдэгт оруулна уу!';
    }

    return errors;
  }