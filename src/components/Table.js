import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});



class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,index:"",name: '',team :'' ,city :'', country: '',newRow:false,requiredItem: 0,
      tableHeal:{
        header1:"NAME",
        header2:"Team",
        header3:"City",
        header4:"Country"
      },
      brochure: [
        {
          name: "John",
          team: "NJIT",
          city:"JERSEY CITY",
          country:"USA"
        }, {
          name: "Paul",
          team: "LA RUE",
          city:"PARIS",
          country:"FRANCE"
        }
      ]
    }
    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTeam = this.handleChangeTeam.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addRow = this.addRow.bind(this);
    this.editRow = this.editRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeTeam(event) {
    this.setState({team: event.target.value});
  }
  handleChangeCity(event) {
    this.setState({city: event.target.value});
  }
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    let tempbrochure =  this.state.brochure;
    const form = {
      name: this.state.name,
      team: this.state.team,
      city: this.state.city,
      country: this.state.country
    }
    if(this.state.newRow){
       tempbrochure.push(form)
    }else{
      tempbrochure[this.state.index]= form;
    }
    this.setState({
       modal: !this.state.modal,
       brochure: tempbrochure
     });

  }
  addRow() {
        this.setState({
            newRow: true,
            modal: !this.state.modal,
            index:"",
            name: "",
            team: "",
            city: "",
            country: "",
        });
    }
  editRow(rowId){
    this.setState({
        newRow: false,
        modal: !this.state.modal,
        index:rowId,
        name: this.state.brochure[rowId].name,
        team: this.state.brochure[rowId].team,
        city:this.state.brochure[rowId].city,
        country:this.state.brochure[rowId].country
    });
  }

  deleteRow(index) { 
    let tempBrochure = this.state.brochure;
    if (this.state.index === ""){
    }
    else{
      tempBrochure.splice(this.state.index, 1);
    }


    this.setState({
      modal: !this.state.modal,
      brochure: tempBrochure
    });
  }

  render() {
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <TableRow key={index} onClick={() =>this.editRow(index)}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.team}</TableCell>
          <TableCell>{item.city}</TableCell>
          <TableCell>{item.country}</TableCell>
        </TableRow>
      )
    });

    return (
      <div>
        <Toolbar>
          <div >
          <Typography variant="title" id="tableTitle">
            Nutrition
          </Typography>
          <Button color="primary" onClick={this.addRow}>Add Configuration</Button>
       </div>
        </Toolbar>
        <Table >
          <TableHead>
          <TableRow>
            <TableCell>{this.state.tableHeal.header1}</TableCell>
            <TableCell >{this.state.tableHeal.header2}</TableCell>
            <TableCell>{this.state.tableHeal.header3}</TableCell>
            <TableCell >{this.state.tableHeal.header4}</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {brochure}
          </TableBody>
        </Table>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>IPL 2018</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
            <label>Team:</label>
                <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
               </div>
              </div>
              <div className="row">
               <div className="form-group col-md-4">
                <label>City:</label>
                  <input type="text" value={this.state.city} onChange={this.handleChangeCity} className="form-control" />
                 </div>
                </div>
            <div className="row">
             <div className="form-group col-md-4">
              <label>Country:</label>
                <input type="text" value={this.state.country} onChange={this.handleChangeCountry} className="form-control" />
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Save" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.deleteRow}>Delete</Button>
          </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default List;
