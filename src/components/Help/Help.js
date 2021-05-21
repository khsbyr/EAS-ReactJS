import React from "react"
import './Help.css'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

const Help = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Navbar />
                </Switch>
            </Router>
            <div class="cards-list">
                <a href="/wind"><div class="carda 1">
                    <div class="card_image"> <img src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlzYXN0ZXJ8ZW58MHx8MHx8&w=1000&q=80" href="google.com" target="_blank"/> </div>
                    <div class="card_title title-white">
                        <p>ХҮЧТЭЙ САЛХИ</p>
                    </div>
                </div></a>
                <a href="/flood"><div class="carda 1">
                    <div class="card_image"> <img src="https://images.unsplash.com/photo-1601966765137-1feaff43898e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" href="google.com" target="_blank"/> </div>
                    <div class="card_title title-white">
                        <p>ҮЕР, УСНЫ ОСОЛ</p>
                    </div>
                </div></a>
                <a href="/flood"><div class="carda 1">
                    <div class="card_image"> <img src="https://images.unsplash.com/photo-1603072008587-90fe5cc4ec00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWFydGhxdWFrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" href="google.com" target="_blank"/> </div>
                    <div class="card_title title-white">
                        <p>ГАЗАР ХӨДЛӨЛТ</p>
                    </div>
                </div></a>
             </div>
             <div class="cards-list">
                <a href="/flood"><div class="carda 1">
                    <div class="card_image"> <img src="https://images.unsplash.com/photo-1587228270638-2c0ac062c01a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRodW5kZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" href="google.com" target="_blank"/> </div>
                    <div class="card_title title-white">
                        <p>АЯНГА ЦАХИЛГААН</p>
                    </div>
                </div></a>
                <a href="/flood"><div class="carda 1">
                    <div class="card_image"> <img src="https://na.gogo.mn/newsn/thumbnail/1000/news/2010/12/31/zud.jpg" href="google.com" target="_blank"/> </div>
                    <div class="card_title title-white">
                        <p>ЗУД</p>
                    </div>
                </div></a>
                <a href="/flood"><div class="carda 1">
                    <div class="card_image"> <img src="https://images.unsplash.com/photo-1473260079709-83c808703435?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpc2FzdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" href="google.com" target="_blank"/> </div>
                    <div class="card_title title-white">
                        <p>ГАЛ ТҮЙМЭР</p>
                    </div>
                </div></a>
             </div>
        </div>
    )
}

export default Help
