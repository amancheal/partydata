import React, { useState, useEffect } from "react";
import Chart from "./chart";
import FeedBacks from "./feedBackList";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Cards({ dashBoardDisplay }) {
  const history = useHistory();
  const [feedData, setFeedData] = useState([{
    allFeds:'',
    stakers: ''
  }])

    useEffect(()=>{

      dashBoardDisplay.map(done =>{
        //console.log(done);
        setFeedData(data =>[...data, data.map(c =>{
          c.allFeds = done.feedbacks.length;
          c.stakers = done.stakeholders;
              return c;
        })] )
        return done;
      })

    }, [dashBoardDisplay])

    //console.log(feedData[0].allFeds)
    const dataFeeds = feedData[0]
     console.log(dataFeeds)

  const setUri = (url) => {
    history.push(`${url}`);
  };

  const [tab, setTab] = useState("chart");
  const [show, setShow] = useState(true);

  const feeds = (e) => {
    setTab("feedbacks");
    setShow(false);
  };
  const chart = (e) => {
    setTab("chart");
    setShow(true);
  };

  return (
    <div className="jumbotron">
      <section>
        <div className="card-cont">
              <div  onClick={() => setUri('/feedback')} className={`cardi bg-primary`}>
                <p className="spen"> Feed Back Portal </p>
                <h4 className="span">
                 { dataFeeds !== undefined  ? dataFeeds.allFeds :  <i className="fas fa-spinner fa-spin"></i>
                    }
                </h4>
              </div>
               <div  onClick={() => setUri('')} className={`cardi bg-danger`}>
                <p className="spen"> Aspiring Politicians </p>
                <h4 className="span">
                 { dataFeeds !== undefined  ? 0 :  <i className="fas fa-spinner fa-spin"></i>
                    }
                </h4>
              </div>
               <div  onClick={() => setUri('')} className={`cardi bg-success`}>
                <p className="spen"> Registered Stake Holders </p>
                <h4 className="span">
                 { dataFeeds !== undefined  ? dataFeeds.stakers :  <i className="fas fa-spinner fa-spin"></i>
                    }
                </h4>
              </div>
               <div  onClick={() => setUri('')} className={`cardi bg-danger`}>
                <p className="spen"> Politicians To Watch </p>
                <h4 className="span">
                 { dataFeeds !== undefined  ? 0 :  <i className="fas fa-spinner fa-spin"></i>
                    }
                </h4>
              </div>
               <div  onClick={() => setUri('')} className={`cardi bg-warning`}>
                <p className="spen"> Forencis </p>
                <h4 className="span">
                 { dataFeeds !== undefined  ? 0 :  <i className="fas fa-spinner fa-spin"></i>
                    }
                </h4>
              </div>
               <div  onClick={() => setUri('')} className={`cardi bg-primary`}>
                <p className="spen"> E-Voting </p>
                <h4 className="span">
                 { dataFeeds !== undefined  ? 0 :  <i className="fas fa-spinner fa-spin"></i>
                    }
                </h4>
              </div>
        </div>
      </section>

      <div className="bg-white my-3 py-1 border-4 rounded">
        <span
          className="mx-3"
          style={
            tab !== "chart"
              ? { color: "gray", fontWeight: "500" }
              : {
                  color: "red",
                  borderBottom: "2px solid red",
                  fontWeight: "500",
                }
          }
          onClick={chart}
        >
          Chart
        </span>{" "}
        <span
          style={
            tab !== "feedbacks"
              ? { color: "gray", fontWeight: "500" }
              : {
                  color: "red",
                  borderBottom: "2px solid red",
                  fontWeight: "500",
                }
          }
          onClick={feeds}
          className="mx-3"
        >
          Recent Feedback
        </span>
      </div>
      <div className="my-2">{show ? <Chart /> : <FeedBacks />}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    dashBoardDisplay: state.dis,
  };
};

export default connect(mapStateToProps, null)(Cards);
