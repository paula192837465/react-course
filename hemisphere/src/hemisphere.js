import React from 'react';
import './hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: "You're in the Northern Hemisphere",
        picture: "https://qph.fs.quoracdn.net/main-qimg-838dee9f9b9c8acee7495179218be9cd.webp"
    },
    Southern: {
        text: "You're in the Southern Hemisphere",
        picture: "https://qph.fs.quoracdn.net/main-qimg-190ba5c3f2086abcad00500fb446d286.webp"
    }
}
const Hemisphere = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div>
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className="image">
                    <img src={picture} alt="hemisphere picture" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div >
        </div>
         <h1>Hello</h1> {/*we cannot leave two different open elements */}
        </div>
    )
}

export default Hemisphere;