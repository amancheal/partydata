import React, {useState} from 'react';
import ReactRoundedImage from "react-rounded-image";
import {Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import correct from '../../asset/correct.svg';
import { decipherJwt } from 'decipher-jwt';


function CandidateCard(){


    const {result} = decipherJwt(localStorage.getItem('token'));

    const [candidate, setCandidate] = useState([

        {
            id: 1,
            disable:false,
            username:'Bukola saraki',
            status: 'Vote Now',
            pop: false,
            image:'data:image/jpeg;base64,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'
        },
        {
            id: 2,
            disable:false,
            status: 'Vote Now',
            username:'Buhari',
            pop: false,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_Hm3pIUjz_AaWwyU75_eNfxiRmeXy5JHx3Guuja4_LHz6pmVp8d7YO1nDX3qSVIsNS0&usqp=CAU'
        },
        {
            id: 3,
            disable:false,
            status: 'Vote Now',
            username:'Obasanjo',
            pop: false,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m6thHZVvjapVuXDuQ75lOMGoQwec8H6tOqBGtZtxi_aBCU0XRT09j-zEToK2lxYtpac&usqp=CAU'
        },

    ])
    const vote = (ide)=>{

            setCandidate([...(candidate.map((c) => {
                    c.disable = true;
                    if(c.id === ide){
                        c.status = 'Voted';
                        c.image = correct;
                    }
                    return c;
                }))])

    }


    const [userDis, setUserDis] = useState('')
    const toggle = (ide) => {
        setCandidate([...(candidate.map(c => {
            if(c.id === ide){
                c.pop = !c.pop ;
            }
            return c;
        }))])
    }
    const dispa = (id)=>{
    const i = (id -1);
    const ind = candidate[i]
     setUserDis(ind.username);

    }
    return(
        <div className='column is-9'>
                <sectio className="section">
                    <div className="jumbotron">
                        <div className='row'>
                            <div className="col-6 form-group">
                            <button  className='my-4 px-4 py-1 btn btn-success reg' aria-disabled="true" disabled> <b className='mx-2'> Voter-ID:</b> { result.voterId } </button>
                            </div>
                         </div>
                        <div className="row">
                     {
                         candidate && candidate.map(function ({id, image, username, disable, status, pop}) {
                                return (
                                    <div key={id} className="col-12 col-md-6 col-lg-4 my-2">
                                    <div  className="card bod">
                          <div className='bg-success px-5 py-6 bnd'>
                                    <h3 style={{display:'none'}}  >hello</h3>
                                    </div>
                                <div className='card-body px-3 my-4' >
                                    <div style={{width:'70%', borderRadius:'60em', position:'absolute', top:'0', left:'0', zIndex:'5', marginTop:'3rem', marginLeft:'4rem'}}>
                                    <ReactRoundedImage image={image}
                                 imageWidth="98"
                                  imageHeight="98"
                                  roundedSize="9"
                                  roundedColor="white"
                                  />
                                    </div>
                                    <h4 className="card-title my-4 mx-5 d-inline-flex d-md-inline-flex d-lg-inline-flex">{username}</h4> <br />
                                    <Button disabled={disable} className={`btn ${status === 'Voted' ? 'btn-success' : ''}  mx-5 my-0`} onClick={()=> vote(id)} >{ status}</Button>
                                    <div  id={'pop' + id}>
                                    <span onClick={()=> dispa(id)} className='btn text-success'>View Profile</span>
                                    <Popover placement="bottom" isOpen={pop} target={'pop' + id} toggle={()=> toggle(id)}>
                                  <PopoverHeader>{userDis && userDis} Profile </PopoverHeader>
                                  <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. </PopoverBody>
                              </Popover>
                                   </div>
                                </div>
                            </div>

                                </div>

                                )
                         })
                     }
                        </div>
                    </div>
                </sectio>
        </div>
    )
}

export default CandidateCard;
