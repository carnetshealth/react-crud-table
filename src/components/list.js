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
import Modal from './modal.js';


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

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.addNew = this.addNew.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      requiredItem: 0,
      newRow :false,
      modalData:{
        index:"",
        title: "",
        msg: "",
        comment:"",
        vue:""
      },
      brochure: [
        {
          title: "Gold",
          msg: "24k Bracelet",
          comment:"example",
          vue:"test"
        }, {
          title: "Silver",
          msg: "Necklace",
          comment:"sample",
          vue:"done"
        }, {
          title: "Talla",
          msg: "Ring",
          comment:"testing",
          vue:"result"
        }, {
          title: "Diamond",
          msg: "Toto",
          comment:"route",
          vue:"come"
        }, {
          title: "Ivan",
          msg: "Ring",
          comment:"go",
          vue:"speed"
        }
      ]
    }
  }

  saveModalDetails(item) {
    let tempbrochure =  this.state.brochure;
    if(this.state.newRow){
      tempbrochure.push(item)
    }
    else{
      const requiredItem = this.state.requiredItem;
      tempbrochure[requiredItem] = item;
    }
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  replaceModalItem(index){
    //this.state.newRow = false;
    //this.state.modalData = this.state.brochure[index];
    this.setState({
      newRow:false,
      modalData:{
        index: index,
        title: this.state.brochure[index].title,
        msg: this.state.brochure[index].msg,
        comment:this.state.brochure[index].comment,
        vue:this.state.brochure[index].vue
      }

    });
  }

  addNew() {
        this.setState({
            newRow: true,
            modalData:{
              index:"",
              title: "",
              msg: "",
              comment:"",
              vue:""
            }
        });
    }

  render() {
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <TableRow key={index} onClick={() =>this.replaceModalItem(index)} data-toggle="modal" data-target="#exampleModal">
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.msg}</TableCell>
          <TableCell>{item.comment}</TableCell>
          <TableCell>{item.vue}</TableCell>
        </TableRow>
      )
    });

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h3>Editable Bootstrap Modal In React</h3>
          <h6>Bootstrap 4.0.0-beta.3</h6>
        </div>
        <Toolbar>
          <div >
          <Typography variant="title" id="tableTitle">
            Nutrition
          </Typography>
           <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.addNew}>Add </button>
       </div>
        </Toolbar>
        <Table >
          <TableHead>
          <TableRow>
            <TableCell>TableHead one</TableCell>
            <TableCell >TableHead two</TableCell>
            <TableCell>TableHead three</TableCell>
            <TableCell >TableHead four</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {brochure}
          </TableBody>
        </Table>

        <Modal
          newRow = {this.state.newRow}
          index={this.state.modalData.index}
          title={this.state.modalData.title}
          msg={this.state.modalData.msg}
          comment={this.state.modalData.comment}
          vue={this.state.modalData.vue}
          saveModalDetails={this.saveModalDetails}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default List;
