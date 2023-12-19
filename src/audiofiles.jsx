import React from 'react';
import { useEffect, useState } from "react"

function AddAudio(){
    return(
        <body>
            <audio controls>
                <source src="Resurrender.mp3" type="audio/mpeg"></source>
            </audio>
        </body>
    )
}

export default AddAudio;