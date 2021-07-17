import React, {useState} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import '../../../asset/css/register.css';

function RegisterForm(){

    const [reg, setReg] = useState({
        firstName:'',
        lastName: '',
        lga:'',
        poolingunit:'',
        ward: '',
        email:'',
        number:'',
        address:''
    });
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

const sendForm =async(e)=>{
e.preventDefault();
        setLoading(true);
        let newVoter = {
            firstName: reg.firstName,
            lastName: reg.lastName,
            lga: reg.lga,
            poolingunit: reg.poolingunit,
            ward: reg.ward,
            email: reg.email,
            number: reg.number,
            address: reg.address
        };
        console.log(newVoter);
         await axios.post('https://quiet-temple-20315.herokuapp.com/registerToVote', newVoter)
        .then(res =>{
            const {data} = res;
            setReg({
                firstName:'',
                lastName: '',
                lga:'',
                poolingunit:'',
                ward: '',
                email:'',
                number:'',
                address:''
            })
            setLoading(false);
            console.log(res)
            setMesg(data.message);
            setNoti(false);
        })
        .catch(err => console.log(err))
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
                        <Form onSubmit={sendForm} className=' mx-3'>
                        <div className='row '>
                          <div className="col-6">
                            <FormGroup>
                            <button  className='my-4 px-4 py-1 btn btn-success reg' aria-disabled="true" disabled> <b> Voter-ID:</b> EX456YPD</button>
                        </FormGroup>
                            </div>
                         </div>
                         <div className='row'>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="voter-name">Voter's First Name</Label>
                            <Input type="text" onChange={handleChange}  value={reg.firstName}  name="firstName"   />
                        </FormGroup>
                            </div>
                             <div className="col-6">
                            <FormGroup>
                            <Label for="voter-name">Voter's Last Name</Label>
                            <Input type="text" name="lastName" onChange={handleChange}  value={reg.lastName}   />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-ward">Voter's Ward</Label>
                            <Input type="text" name="ward" onChange={handleChange}  value={reg.ward}  />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-poolingunit">Voter's Pooling Unit</Label>
                            <Input type="text" name="poolingunit" onChange={handleChange}  value={reg.poolingunit}  />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-LGA">Voter's L.G.A</Label>
                            <Input type="text" name="lga" onChange={handleChange}  value={reg.lga}   />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-number">Voter's Moile Number</Label>
                            <Input type="tel" name="number" onChange={handleChange}  value={reg.number}   />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-email">Voter's Email</Label>
                            <Input type="email" name="email"  onChange={handleChange}  value={reg.email}  />
                        </FormGroup>
                            </div>
                                 <div className="col-6">
                            <FormGroup>
                            <Label for="voter-address">Voter's Address</Label>
                            <Input type="text" name="address" onChange={handleChange}  value={reg.address}  />
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
