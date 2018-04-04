import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import TopBar from '../../components/TobBar/TobBar';
import FormNet from '../../components/FormNet/FormNet';
import SubNets from '../../components/SubNets/SubNets';
import SubNetsList from '../../components/SubNetsList/SubNetsList';

class Main extends Component {

  state = {
    ip: "192.100.100.0",
    submask: "255.255.255.0",
    subnets: []
  }

  calculateSubNets = (ip, submask) => {
    this.setState({
      ip: ip,
      submask: submask
    })
  }

  addSubNet = (number) => {
    let subnets = this.state.subnets;
    subnets.push(number);
    this.setState({subnets: subnets});
  }

  removeSubNet = (index) => {
    let subnets = this.state.subnets;
    subnets.splice(index, 1);
    this.setState({subnets: subnets});
  }

  render() {
    return (
      <Aux>
        <TopBar />
        <div className="container-fluid">
          <div className="row">
            <main className="col-12 col-md-12 col-xl-12 bd-content">
              <FormNet actionCalculate={this.calculateSubNets} actionAdd={this.addSubNet}/>
              <SubNetsList subnets={this.state.subnets} action={this.removeSubNet}/>
              <SubNets ip={this.state.ip} submask={this.state.submask} subnets={this.state.subnets}/>
            </main>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Main;
