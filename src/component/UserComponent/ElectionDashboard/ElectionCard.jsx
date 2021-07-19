
        import React, {useState} from 'react';
        import ReactRoundedImage from "react-rounded-image";
        import ballot from '../../../asset/ballot.svg';

        import user from '../../../asset/user.svg';
        import reg from '../../../asset/reg.png';
        import result from '../../../asset/result.svg';
        import Chart from '../../dashboard/chart';
        import '../../../asset/css/election.css';
        import {useHistory} from 'react-router';
        import { decipherJwt } from 'decipher-jwt';

        function UserCard(){
            const history = useHistory();
            const toReg =()=>{

                if(checkElegibility() === true){
                    history.push('/registerToVote');
                }

            }

            const checkElegibility = () =>{
                const {result} = decipherJwt(localStorage.getItem('token'))
                if(result.age < 18){
                    return false;
                }else{
                    return true;
                }
            }
            const gotToVote = () =>{
                if(checkElegibility() === true){
                    history.push('/evote');
                }

            }
            const [comment] = useState([
                {
                    name:'bolu',
                    imageIcon: user,
                    message:'Hello',
                    likes:2
                },
                {
                    name:'tolu',
                    imageIcon: user,
                    message:'Hello',
                    likes:2
                },
                {
                    name:'folu',
                    imageIcon: user,
                    message:'Hello',
                    likes:2
                },
                {
                    name:'solu',
                    imageIcon: user,
                    message:'Hello',
                    likes:2
                }
            ]

            )

            return(

                            <div className="column is-9 pal">
                                     <div className="row">
                                    <div className="col-4 car my-4 is-one-thrid">
                                    <div onClick={toReg} className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <h4 className='wrd text-nowrap'>Register To vote</h4>
                                        <div className='elcrd'>
                                        <ReactRoundedImage image={reg}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="green"
                                />
                                        </div>
                                    </div>
                                </div>
                                </div>

                                </div>
                                <div className="col-4  my-4 car">
                                <div  onClick={gotToVote} className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <h4 className='wrd'>Vote Now</h4>
                                        <div className='elcrd '>
                                        <ReactRoundedImage image={ballot}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="white"
                                />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-4  my-4 car">
                                <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <h4 className='wrd text-nowrap'>View Result</h4>
                                        <div className='elcrd '>
                                        <ReactRoundedImage image={result}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="red"
                                />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                {/* <div className="column  my-4 car">
                                <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <h4 className='mx-5'>Observation</h4>
                                        <div className='mx-6'>
                                        <ReactRoundedImage image={result}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="white"
                                />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div> */}
                                </div>
                                <div className="row">
                             <div className='col-4  my-4 px-3'>
                                    <div className='card'>
                                    <div className="card-header">
                                    <div className="card-header-title mx-6">
                                    {comment.length} <em className='mx-2'>News/Comment</em>
                                    </div>
                                    </div>

                                        {
                                            comment && comment.map(({name, imageIcon, likes, message})=>{
                                                return(
                                                    <div key={name}>
                                                         <div className="media px-2 my-2">
                                                        <figure className='media-left'>
                                                        <ReactRoundedImage image={imageIcon}
                                                            imageWidth="45"
                                                                imageHeight="45"
                                                                roundedSize="9"
                                                                roundedColor="white"
                                                                />
                                                        </figure>
                                                        <div className="media-content px-2">
                                                                <div className="content">
                                                                    <p> <strong>{name}</strong> <br />
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, culpa.
                                                                     </p>
                                                                </div>
                                                        </div>
                                                        </div>
                                                         </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="col-8  my-4">
                                    <b className='is-2'>Election Chart flow</b>
                                    <Chart />
                                </div>
                                </div>

                            </div>
            )
        }

        export default UserCard;
