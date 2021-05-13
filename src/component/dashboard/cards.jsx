import React from 'react';
import DashBoardNav  from '../Headers/dashBoardNav';

function Cards(){
    return(
        <React.Fragment>
            <div>
            <DashBoardNav />

            <div className='container'>
                <div className='row'>
                <div className='col-lg-4 col-sm-6 col-md-6'>
                    <div className='card'>
                            <div class="card bg-primary">
                            <div class="card-body text-center">
                                <p class="card-text">Some text inside the first card</p>
                            </div>
                            </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 col-md-6'>
                    <div className='card'>
                            <div class="card bg-primary">

                            <div class="card-body  text-center">
                            <p class="card-text">Feedback Portal</p>
                                <hr  />

                            </div>
                            </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                            <div class="card bg-primary">
                            <div class="card-body text-center">
                                <p class="card-text">Some text inside the first card</p>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Cards
