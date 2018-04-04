import React from 'react';
import classes from './SubNetsItem.css';

const subnetsitem = (props) => {
  const ips = []
  let start = props.start;
  let ip = String(props.ip).split(".").splice(0,3).join(".");
  let submask = String(props.submask).split(".").splice(0,3).join(".") + "." +String(256 - props.hosts);
  let type = "PC";
  for (let index = 0; index < props.hosts; index++) {
    switch(index){
      case 0:
        type = "RED";
        break;
      case 1:
        type = "GATEWAY";
        break;
      case props.hosts - 1:
        type = "BROADCAST";
        break;
      default:
        type = "PC";
        break;
    }
    ips.push(
      <div key={index} className={classes.ip}>
          {String(ip) + "." + String(start + index)}
          {"\n"}
          {submask}
          {"\n"}
          {"Type: " + type}
      </div>
    )
  }
  return (
    <div>
      <div className={classes.full}>
        <div className="alert alert-warning" role="alert">
          Number Hosts: {props.realhosts}
        </div>
        <pre className="d-flex align-content-start flex-wrap">
          {ips}
        </pre>
      </div>
    </div>
  );
}

export default subnetsitem;
