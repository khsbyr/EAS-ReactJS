import React, {useEffect, useState} from 'react';
import '../News/GetList.scss'
import jQuery from 'jquery'
import Navbar from '../Navbar/Navbar'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

Khuvsgul.propTypes = {
    articleList: PropTypes.array,
};
Khuvsgul.defaultProps = {
    articleList: [],
};

function Khuvsgul(props) {
    jQuery(document).ready(function ($) {
        var countSquare = $('.square').length;
        for (var i = 0; i < countSquare; i++) {
            var firstImage = $('.square').eq([i]);
            var secondImage = $('.square2').eq([i]);

            var getImage = firstImage.attr('data-image');
            var getImage2 = secondImage.attr('data-image');

            firstImage.css('background-image', 'url(' + getImage + ')');
            secondImage.css('background-image', 'url(' + getImage2 + ')');
        }

    });

    const [searchTerm, setSearchTerm] = useState("Хөвсгөл");
    const { articleList } = props;
    return (
        <>
            <div>
                <Router>
                    <Switch>
                        <Navbar />
                    </Switch>
                </Router>
                <h2 className="text-white" style={{marginBottom: '50px'}}>Хөвсгөл аймаг</h2>
                <div class="centerflipcards">
                    {articleList.filter((post)=> {
                        if (searchTerm==""){
                            return post
                        } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return post
                        }
                    }).map(post => (
                        <div class="square-flip">
                            <div class='square' data-image="https://images.unsplash.com/photo-1591017923379-2eab617d96d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmVjdCUyMGJsdWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                                <div class="square-container">
                                    <h2 class="textshadow">{post.title}</h2>
                                    <h3 class="textshadow">{post.date}</h3>
                                </div>
                                <div class="flip-overlay"></div>
                            </div>
                            <div class='square2' data-image="https://images.unsplash.com/photo-1591017923379-2eab617d96d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmVjdCUyMGJsdWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
                                <div class="square-container2">
                                    <div class="align-center"></div>
                                    <h3>{post.description}</h3>
                                </div>
                                <div class="flip-overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}


export default Khuvsgul;