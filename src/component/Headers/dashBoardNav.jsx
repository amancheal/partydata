import React,{useState} from 'react';
import { connect } from "react-redux"


function DashBoardNav(props) {

const [search, setSearch] = useState('')

const handleChange = (e)=>{

    setSearch(e.target.value)
}

    return(
        <React.Fragment>
            <div className='container'>
           <nav className='navbar navbar-light d-flex justify-content-between '>
               <div className='my-3   '>
                        <span style={{ fontWeight: 'light' }} className='navbar-brand'>{props.whattoshow}</span>


               </div>
                    <form className='form-inline   ' >
                            <div className="input-group ">
                        <div className="input-group-prepend ">
                            <span  className="input-group-text " id="basic-addon1"><i  className=' fa fa-search py-2 '></i></span>
                        </div>
                        <input type="text" className="form-control rounded " value={search} onChange={handleChange} placeholder="search" aria-label="search" aria-describedby="basic-addon1" />
                        <i style={{color:'gray'}} className="fal fa-user fa-2x mx-3 my-auto "></i>
                        </div>

                    </form>

           </nav>
           </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        whattoshow: state.nav
    }
}



export default connect(mapStateToProps, null)(DashBoardNav)
