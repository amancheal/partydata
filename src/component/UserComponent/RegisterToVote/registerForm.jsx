import React, {useState} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import '../../../asset/css/register.css';
import { decipherJwt } from 'decipher-jwt';
import {useHistory} from 'react-router-dom' ;
import "react-naija-states/dist/index.css";
import { Options } from "react-naija-states";

function RegisterForm(){
    const history = useHistory();
    const [reg, setReg] = useState({
        firstname:'',
        lga:'',
        poolingunit:'',
        ward: '',
        email:'',
        phone:'',
        address:''
    });
    const {result} = decipherJwt(localStorage.getItem('token'));

    const [mesg, setMesg] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange =(e) =>{
        const {name, value} = e.target;
        setReg({...reg, [name]: value})
    }
    const [noti, setNoti] = useState(false);
    const dele =()=>{
            setNoti(true)
    }

        const sendForm = async(e) =>{
        e.preventDefault();
        setLoading(true);
        let newVoter = {
            firstname: result.firstname,
            lga: reg.lga,
            poolingunit: reg.poolingunit,
            ward: reg.ward,
            email: reg.email,
            phone: reg.phone,
            address: reg.address
        };
        //  https://pdpparty.herokuapp.com
        await axios.post('https://pdpparty.herokuapp.com/registerToVote', newVoter)
        .then(res =>{
            console.log(newVoter)
            const {data} = res;
            setReg({
                firstname:'',
                lga:'',
                poolingunit:'',
                ward: '',
                email:'',
                phone:'',
                address:''
            })
            setLoading(false);
            setMesg(data.message);
            setNoti(false);
            localStorage.removeItem('token');
            localStorage.setItem('token', data.token);
            history.push('/overview')
        })
        .catch(err =>{
                console.log(err);
                setLoading(false);
        } )
}


    return(
        <React.Fragment>
            <div className='jumbotron'>
                 <div className='mx-6'>
                        <h2 className='is-size-2 tet'>Register To Vote</h2>
                    </div>

                    { mesg !== ''? <div className={`${noti === true ? 'remove': 'notification'} is-primary ${mesg !== ''? 'my-3': ''}`}>
                                <button onClick={dele} className="delete"></button>
                                            { mesg  }
                                </div> : <span></span>
                                    }
                                                {
                                                    loading === true ? <div className="modal is-active">
                                                    <div className="modal-background spinn"></div>
                                                    {/* <i style={{color:'white'}} className="fas fa-circle-notch fa-spin fa-7x "></i> */}
                                                        <i className="fad fa-spinner-third fa-spin fa-pulse fa-5x  colo"></i>

                                                    </div> : <span></span>
                                                }

                    <div>
                        <Form onSubmit={sendForm} className=' mx-3 my-5'>

                         <div className='row'>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-ward">Voter's Ward</Label>
                            <Input type="text" name="ward" onChange={handleChange}  value={reg.ward} required />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-poolingunit">Voter's Pooling Unit</Label>
                            <Input type="text" name="poolingunit" onChange={handleChange}  value={reg.poolingunit} required  />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="lga">Voter's Local-government</Label>
                            <Input type="select" onChange={handleChange} value={reg.lga} name="lga" required >
                            <Options type="lga"  state={result.state}/>
                            </Input>
                            </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-number">Voter's Moile Number</Label>
                            <Input type="tel" name="phone" onChange={handleChange}  value={reg.phone}  required />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-email">Voter's Email</Label>
                            <Input type="email" name="email"  onChange={handleChange}  value={reg.email} required />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-address">Voter's Address</Label>
                            <Input type="text" name="address" onChange={handleChange}  value={reg.address} required />
                        </FormGroup>
                            </div>
                             <div className="col-4">
                            <FormGroup>
                            <Input type="submit" value='Submit' className='bg-warning subm'  />
                        </FormGroup>
                            </div>
                          </div>

                        </Form>
                     </div>
            </div>

        </React.Fragment>
    )
}

export default RegisterForm;
