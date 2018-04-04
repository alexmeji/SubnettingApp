import React from 'react';
import Aux from '../../hoc/Aux/Aux';

import classes from './SubNetsList.css';

const subnetslists = (props) => {
  return (
    <Aux>
      <div className={classes.full}>
        <div className="alert alert-danger" role="alert">
          Lists of SubNets
        </div>
        <div className="d-flex align-content-start flex-wrap">
          {
            props.subnets.map( (hosts, index) => {
              return (
              <div key={index} className={classes.ip}>
                {
                  "Number: " + hosts
                }
                <button type="button" className="close" aria-label="Close" onClick={ () => props.action(index)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>)
            })
          }
        </div>
      </div>
    </Aux>
  )
}

export default subnetslists;
