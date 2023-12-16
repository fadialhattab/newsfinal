import React from "react";

const Newsitem = ({ title, description, src, url }) => {
  return (
  src &&
           <div className="col-lg-3 card bg-dark text-light mb-3" style={{marginLeft:"45px"}} >
      <img src={src}  className="card-img-top p-3" height="200px" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "It is information about something that has just happened."}</p>
   
        <a href={url} className="btn btn-primary">
          View The News
        </a>
       
      </div>
    </div>
  
  );
};

export default Newsitem;
