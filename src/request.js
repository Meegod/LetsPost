import React from 'react';

//my api key has to be encrypted in an env file to prevent other people 
//from using it...

const API_KEY='4e39113d7f33497f8c0cc054ff0fbd3b';
//all this url link are found on the news api //documentation..........................................


export default{
//fetchGeneral:`/top-headlines?country=us&category=general&apiKey=${API_KEY}`,
fetchTechnology:`/top-headlines?country=us&category=technology&apiKey=${API_KEY}`,
fetchBusiness:`/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
fetchEntertainment:`/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`,
fetchHealth:`/top-headlines?country=us&category=health&apiKey=${API_KEY}`,
fetchScience:`/top-headlines?country=us&category=science&apiKey=${API_KEY}`,
fetchSport:`/top-headlines?country=us&category=sports&apiKey=${API_KEY}`,
};


//Updates i need on this new ui
//users should be able to view recent post uploaded by the admin
//That requires us to connect the file to firebase using our little knowledge of firebase



