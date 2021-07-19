import React, {useState} from 'react';
import DeskTopHeader from '../Headers/DesktopHeader';
import MobileHeader from '../Headers/DashboardHeaders';
import SideBar from '../Headers/SideBar';
import "react-naija-states/dist/index.css";
import { Options } from "react-naija-states";
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import { decipherJwt } from 'decipher-jwt';
import '../../../asset/css/feedback.css';
import Footer from "../../Headers/footer";

function FeedBack(){
    const [form, setForm] = useState({
        owner:'',
        username:'',
        title:'',
        state: '',
        lga:'',
        poolingUnit:'',
        ward: '',
        complaintype:'',
        number:'',
        feedback:''
    });
    const {result} = decipherJwt(localStorage.getItem('token'));

    const [mesg, setMesg] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange =(e) =>{
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    const [noti, setNoti] = useState(false);
    const dele =()=>{
            setNoti(true)
    }

    const send = async(e) =>{
        e.preventDefault();
        setLoading(true);
        let newFeedback = {
            owner: result.role,
            username:result.firstname,
            title: form.title,
            state: form.state,
            lga: form.lga,
            poolingUnit: form.poolingUnit,
            ward: form.ward,
            complaintype: form.complaintype,
            number: form.number,
            feedback: form.feedback
        };
        console.log(newFeedback);
       await axios.post('https://quiet-temple-20315.herokuapp.com/feedback/createfeedback', newFeedback)
        .then(res =>{
            const {data} = res;
            setForm({
                title: '',
                state: '',
                lga: '',
                poolingUnit: '',
                ward: '',
                complaintype: '',
                number: '',
                feedback: ''
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
        <div>
         <MobileHeader />
         <DeskTopHeader />
         <div className="">
         <div className='hero  is-hidden-mobile py-6 my-6 mx-5'>
             <div className="columns">
             <SideBar />
               <div className="column is-9 container">
                <section className="jumbotron">
                    <div className='mx-6'>
                        <h2 className='is-size-2'>Send Feed-Back</h2>
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

                    <Form onSubmit={send}>
                        <div className="row my-3">
                            <div className="col-6">
                            <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" onChange={handleChange}  value={form.title} placeholder="Input here..." />
                        </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="number">Phone Number</Label>
                            <Input type="number" name="number" onChange={handleChange} value={form.number}  placeholder="+234......" />
                        </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="State">State-of-Origin</Label>
                            <Input type="select" onChange={handleChange} value={form.state} name="state" >
                            <Options type="state" />
                            </Input>
                            </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="lga">Local-government</Label>
                            <Input type="select" onChange={handleChange} value={form.lga} name="lga" >
                            <Options type="lga"  state={form.state}/>
                            </Input>
                            </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="pooling">Pooling-Unit</Label>
                            <Input type="text" name="poolingUnit" onChange={handleChange} value={form.poolingUnit} placeholder="Input here..." />
                            </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="complaintype">Complain-Type</Label>
                            <Input type="select" onChange={handleChange} value={form.complaintype} name="complaintype" >
                                <option >Select Type</option>
                                <option value="REVIEW">REVIEW</option>
                                <option value="COMPLAINT">COMPLAINT</option>
                                <option value="RATING">RATING</option>
                                <option value="INFORMATION">INFORMATION</option>
                            </Input>
                            </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="ward">Ward</Label>
                            <Input type="text" name="ward" onChange={handleChange} value={form.ward} placeholder="Input here..." />
                            </FormGroup>
                            </div>
                            <div className="col-6">
                            <FormGroup>
                            <Label for="feedback">Message</Label>
                            <Input type="textarea" cols="10" rows="5" onChange={handleChange} value={form.feedback} name="feedback"  placeholder="Input here..." />
                            </FormGroup>
                            </div>
                            <div className="col-4">
                            <FormGroup>
                            <Input type="submit" value='Submit' className='btn btn-success ' />
                            </FormGroup>
                            </div>
                        </div>
                    </Form>
                             </section>
               </div>

             </div>
         </div>
         </div>
          <Footer />
        </div>
    </React.Fragment>
    )
}

export default FeedBack;

