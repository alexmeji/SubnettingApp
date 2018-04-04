import React, {Component} from 'react';

import classes from './FormNet.css';

class FormNet extends Component {

  state = {
    ip: "192.100.100.0",
    submask: "255.255.255.0",
    number: ""
  }

  calculate = () => {
    this.props.actionCalculate(this.state.ip, this.state.submask);
  }

  changeIp = (e) => {
    this.setState({ip: e.target.value})
  }

  changeSubMask = (e) => {
    this.setState({submask: e.target.value})
  }

  render() {
    const {
      ip,
      submask,
      number
    } = this.state
    return (
      <div className="mt-5 center-block">
        <div className="row">
          <div className="d-flex align-content-start flex-wrap">
            <form>
              <div className="p-2">
                <input type="text" className="form-control" value={ip} onChange={this.changeIp} placeholder="IP: 192.100.100.0" />
                <div className={classes.message}>
                  Looks good!
                </div>
                <div className={[classes.alert, classes.hide].join(" ")}>
                  Looks good!
                </div>
              </div>
              <div className="p-2">
                <input type="text" className="form-control" value={submask} onChange={this.changeSubMask} placeholder="Netmask: 255.255.255.0" />
              </div>
              <div className="p-2">
                <button onClick={this.calculate} type="button" className="btn btn-primary mr-2">Calculate</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="d-flex align-content-start flex-wrap">
            <div className="p-2">
              <input type="text" className="form-control" placeholder="#: 3" value={number} onChange={e => this.setState({number: e.target.value})}/>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-secondary" onClick={ () => this.props.actionAdd(this.state.number)}>Add Sub-Net</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormNet;
