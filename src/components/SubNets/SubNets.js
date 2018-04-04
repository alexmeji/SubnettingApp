import React from 'react';

import SubNetsItem from './SubNetsItem/SubNetsItem';

function getSize (hosts) {
  let size = 0;
  let pow = 1;
  do{
    size = Math.pow(2, pow);
    pow+=1;
  }while(hosts > (size - 2));
  return size;
}

const subnets = (props) => {
  let lastIP = 0;
  return (
    <div className="mt-5 center-block">
        {
          props.subnets.map( (hosts, index) => {
            const numberHosts = getSize(hosts);
            const startIP = lastIP;
            lastIP = lastIP + numberHosts;
            return <SubNetsItem key={index} start={startIP} ip={props.ip} submask={props.submask} realhosts={hosts} hosts={numberHosts}/>
          })
        }
    </div>
  );
}

export default subnets;
