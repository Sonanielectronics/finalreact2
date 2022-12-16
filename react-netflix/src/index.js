
// var React = require("react");
import React from "react";
import "./index.css"

// var ReactDOM = require('react-dom');
import ReactDOM  from "react-dom";
import Heading from "./Heading";
import Heading2 from "./Heading2";
import App from "./App";

var num = "num";
var ber = "ber";
var fname = "Ghoghari" ;
var lname = "nikunj" ;
const currentdate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();

var styleinline = {
    color:"red",
    marginLeft:"10px"
};

const checkdate = new Date().getHours();
// const checkdate = new Date(2020,5,5,20).getHours();
let val = " " ;
var valsty = {} ;

if(checkdate >= 1 && checkdate < 12){
    val = "Good morning";
    valsty.color = "green" ;
}else if(checkdate >= 12 && checkdate < 19 ){
    val = "Good afternoon";
    valsty.color = "red" ;
}else{
    val = "Good night";
    valsty.color = "black" ;
}
// for inline css we are add all property in object and specially key as well as pair value and here we are not use camlecase but we are use kabab 

// ReactDOM.render(<div><h1>Hi</h1><h2>Nik</h2></div>,document.getElementById("root"));  // after react 16 we are use this 
// ReactDOM.render([<h1>Hi</h1>,<h2>Niku</h2>],document.getElementById("root")); // first we are use this
// ReactDOM.render(<React.Fragment><h1>Hi</h1><h2>Niku</h2></React.Fragment>,document.getElementById("root"));
// ReactDOM.render(<><h1>Hi</h1><h2>Niku</h2></>,document.getElementById("root")); // this is also react fragment
ReactDOM.render(<><Heading2></Heading2><h1 className="hed">Hi</h1><App></App><h2 style={styleinline}>{ fname + " " + lname } you are the { `${num} ${ber}` } { 0 + 1 } person from { Math.random() } & today date is { currentdate } & current time is ................................................................................................... { currenttime }  </h2><h3 contentEditable="true">this is JSX Attributes</h3><img src="https://picsum.photos/200/300" alt="This"/><a href="https://picsum.photos/" target="_https://picsum.photos/"><img src="https://picsum.photos/200/300" alt="This"/></a><h4 style={valsty}>{val}</h4><Heading/></>,document.getElementById("root")); // if we are use javascript under html then it is expressions // we can't use condition here // we are use backtick into variable this is template literals 
// image tag is self closing tool // in a tag we are use href under target _blank or any after _ to open into new window
// we are also use jsx Component as a self closing tool 