import React from "react"
import './Contact.scss'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
const Contact = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Navbar />
                </Switch>
            </Router>

            <main>
                <h1><b className="text-white">ЧУХАЛ ШААРДЛАГАТАЙ УТАСНЫ ЖАГСААЛТ</b></h1>
                <ol class="gradient-list">
                    <li>ГАЛ ТҮЙМРИЙН ДУУДЛАГА<b style={{'fontSize': '20px'}}> <p>101</p></b></li>
                    <li>ЦАГДААГИЙН ДУУДЛАГА<b style={{'fontSize': '20px'}}><p>102</p></b></li>
                    <li>ЯАРАЛТАЙ ТҮРГЭН ТУСЛАМИЙН ТӨВ<b style={{'fontSize': '20px'}}> <p>103</p></b></li>
                    <li>ГАМШИГ, ОСЛЫН ДУУДЛАГА<b style={{'fontSize': '20px'}}> <p>105</p></b></li>
                    <li>ГЭР БҮЛИЙН ХҮЧИРХИЙЛЛИЙН ДУУДЛАГА<b style={{'fontSize': '20px'}}> <p>107</p></b></li>
                    <li>ХҮҮХДИЙН ТУСЛАМЖИЙН УТАС<b style={{'fontSize': '20px'}}> <p>108</p></b></li>
                    <li>ЗАМЫН ЦАГДААГИЙН ЖИЖҮҮР<b style={{'fontSize': '20px'}}> <p>70112100</p></b></li>
                    <li>ТӨМӨР ЗАМЫН ЦАГДАА<b style={{'fontSize': '20px'}}> <p>24102</p></b></li>
                    <li>ГЭМТЭЛ СОГОГ СУДЛАЛЫН ҮНДЭСНИЙ ТӨВ<b style={{'fontSize': '20px'}}> <p>70180130, 70180131, 70170132</p></b></li>
                    <li>ОНЦГОЙ БАЙДЛЫН ЕРӨНХИЙ ГАЗАР<b style={{'fontSize': '20px'}}> <p>11-325726, 11-265726</p></b></li>
                </ol>
            </main></div>
    )
}

export default Contact