import React from 'react';
import ReactDOM from 'react-dom';
import './newstyle.css'
import MainSection from './mainsection';
import AddAudio from './audiofiles';
import NavBar from './NavBar';
import YoutubeEmbed from './youtubeembed';



ReactDOM.render(<>
<MainSection/>
<NavBar/>
<AddAudio/>
<YoutubeEmbed/>
</>, document.getElementById('root'));

  
