import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link } from 'react-router-dom';
import {updateNav} from '../../action/actions/nav_actions';
import {connect} from 'react-redux';
import { REGISTERED_STAKE_HOLDERS} from '../../action/types';

function StakeHoldersCards({getWhatToShow}){

    const [cardList, setCardList] = useState(null);

    useEffect(()=>{

        axios.get('https://pdpparty.herokuapp.com/kwara',{
            headers:{
                "Content-Type": "application/json",
                 Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
        } )
        .then(res =>{
            console.log(res.data.lgas)
             setCardList(res.data.lgas)
        })

    }, [])

    const myStyle ={
        paddingTop:'-2em',
        marginLeft: '4em',
        color: 'rgb(255, 6, 1)',
    }

        //ardList[0].map(({_id, name, wards})=>console.log(name))

        return(
            <React.Fragment >
                <div className="row mx-3">
                    {
                        cardList !== null ? cardList.map(function ({ _id, name, wards }) {
                            return (
                                <div style={{ marginBottom: '10px' }} key={_id} className="col-12 col-md-3 px-4 col-sm-4 col-lg-2 shadow  mx-md-2 mx-lg-3 mx-2 border border-3 border-danger rounded-3 py-5  d-flex  justify-content-center algin-items-center bg-white">
                                    <Link style={{ textDecoration: 'none' }} to={{ pathname: '/registeredStakeHolders', state: { name, wards } }} onClick={() => getWhatToShow(REGISTERED_STAKE_HOLDERS)} className='text-center text-success d-flex align-self-center '>{name}</Link>
                                </div>
                            )

                        }) : <div style={myStyle} className='fa-4x   d-flex justify-content-center align-items-center'>
                            <i className="fas fa-spinner fa-spin"></i>
                            </div>

                    }

                </div>
            </React.Fragment>
        )
}

const mapDispatchToprops =(dispatch)=>{
    return {
        getWhatToShow: (val)=> dispatch(updateNav(val))
    }
}

export default connect(null, mapDispatchToprops)(StakeHoldersCards);
