import React from 'react';
import {Link} from 'react-router-dom';

function Top({name, destination}){
    return(
        <div>

            <div className="py-3">
                <Link style={{textDecoration:'none',fontSize:'1.2rem', fontWeight:'600'}} className='text-success' to={destination}> <i style={{ fontWeight:'bold'}} className="fa fa-chevron-left mx-1 text-success " aria-hidden="true"></i> Back</Link>
            </div>

            <h6>{name}</h6>
        </div>
    )
}

export default Top
