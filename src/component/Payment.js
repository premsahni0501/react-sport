import React from 'react';
import { Div, Select, Option, Htag, Input, Label, Button } from './Elements';

export class Payment extends React.Component {
  render() {
    return (
      <Div className="container-fluid resultFragment w-100 p-3 text-left">
        <Div className="card">
          <Div className="card-body">
            <Htag tag={5}>Payment</Htag>
            <Div className="form-group w-100 text-left">
              <Label>Payment Method</Label>
              <Select className="form-control">
                <Option value="Visa">Visa</Option>
                <Option value="Master Card">Master Card</Option>
              </Select>
            </Div>
            <Div className="form-group w-100 text-left">
              <Label>Credit Card Number</Label>
              <Input className="form-control" type="text" placeholder="1234 - 5678 - 9012 - 3456" />
            </Div>
            <Div className="form-group w-100 text-left">
              <Label>Card Holder Name</Label>
              <Input className="form-control" type="text" placeholder="Eg. John Doe" />
            </Div>
            <Div className="row">
              <Div className="col col-6">
                <Div className="form-group w-100 text-left">
                  <Label>Expiration Date</Label>
                  <Input className="form-control" type="text" placeholder="MM/YYYY" />
                </Div>
              </Div>
              <Div className="col col-6">
                <Div className="form-group w-100 text-left">
                  <Label>CVV</Label>
                  <Input className="form-control" type="text" placeholder="***" />
                </Div>
              </Div>
            </Div>
            <Button className="btn btn-primary">Proceed</Button>
          </Div>
        </Div>
      </Div>
    );
  }
}