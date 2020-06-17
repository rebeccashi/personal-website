import * as React from 'react';

function Navbar() {
    //Make an array for all the sections and save it in a separate file
    return (
        <div>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/Experience">Experience</a></li>
                <li><a href="/Skills">Skills</a></li>
                <li><a href="/Coursework">Coursework</a></li>
            </ul>
        </div>
    );
}

export default Navbar;