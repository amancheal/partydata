import React,{useState} from 'react';
import { connect } from "react-redux"


function DashBoardNav({whattoshow}) {

const [search, setSearch] = useState('')

const handleChange = (e)=>{

    setSearch(e.target.value)
}


let openNav =()=>{

  let el =  document.getElementById("wrapper");
  el.classList.toggle('toggled')
}

    return(
        <React.Fragment>
            <div id='page-content-wrapper  '>
            <nav className="navbar  navbar-expand-lg  bg-transparent navbar-light py-4 px-4 ">
                <div className='d-flex align-items-center'>
            <i style={{fontSize:'30px',cursor:'pointer'}}   onClick={openNav } className='far fa-bars  primary-text fs-4 me-3'  id='menu-toggle'></i>
            <span  className='dash navbar-brand '>{whattoshow}</span>
            </div>
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
