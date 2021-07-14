
        import React, {useState} from 'react';
        import ReactRoundedImage from "react-rounded-image";
        import ballot from '../../../asset/ballot.svg';

        import user from '../../../asset/user.svg';
        import reg from '../../../asset/reg.png';
        import result from '../../../asset/result.svg';
        import Chart from '../../dashboard/chart';
        import '../../../asset/css/election.css';
        import {useHistory} from 'react-router';

        function UserCard(){
            const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m6thHZVvjapVuXDuQ75lOMGoQwec8H6tOqBGtZtxi_aBCU0XRT09j-zEToK2lxYtpac&usqp=CAU';
            const history = useHistory();

            const gotToVote = () =>{
                history.push('/evote')
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
                                     <div className="columns">
                                    <div className="column is-one-thrid">

                                    <ReactRoundedImage image={image}
                               imageWidth="118"
                                imageHeight="118"
                                roundedSize="15"
                                roundedColor="white"
                                />

                                <div className="media-content">
                                    <p className="title is-4">Olusegun O.B.J</p>
                                    <button className="button is-small is-info is-rounded mb-2 px-5">Edit Profile</button>
                                    <b className="subtitle is-6 text-nowrap" ><i className="icon fas fa-phone-square  fa-1x has-text-success"></i> 08138393399 </b> <br />
                                    <a href='https://gmail.com' style={{textDecoration:'none'}} className=" subtitle is-6 text-nowrap "><i class="icon fas fa-envelope-open-text  has-text-info"></i>Bola@gmail.com</a>
                                </div>
                                </div>
                                <div className="column  my-4 car">
                                <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h4>Register To vote</h4>
                                        <p className='mx-6'>
                                        <ReactRoundedImage image={reg}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="white"
                                />
                                        </p>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="column  my-4 car">
                                <div onClick={gotToVote} class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h4 className='mx-5'>Vote Now</h4>
                                        <p className='mx-6'>
                                        <ReactRoundedImage image={ballot}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="white"
                                />
                                        </p>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="column  my-4 car">
                                <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <h4 className='mx-5'>View Result</h4>
                                        <p className='mx-6'>
                                        <ReactRoundedImage image={result}
                               imageWidth="65"
                                imageHeight="65"
                                roundedSize="9"
                                roundedColor="white"
                                />
                                        </p>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div className="columns">
                             <div className='column is-two-fifths my-4 px-3'>
                                    <div className='card'>
                                    <div className="card-header">
                                    <p className="card-header-title mx-6">
                                    {comment.length} <em className='mx-2'>News/Comment</em>
                                    </p>
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
                                <div className="column is-two-third my-4">
                                    <b className='is-2'>Election Chart flow</b>
                                    <Chart />
                                </div>
                                </div>

                            </div>
            )
        }

        export default UserCard;
