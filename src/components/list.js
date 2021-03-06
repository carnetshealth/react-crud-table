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
import ModalComponent from './modal.js';
import TableData from './TableData'
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

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.addNew = this.addNew.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.titleHandler = this.titleHandler.bind(this);
    this.msgHandler = this.msgHandler.bind(this);
    this.commentHandler = this.commentHandler.bind(this);
    this.vueHandler = this.vueHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      requiredItem: 0,
      modal: false,
      newRow :false,
      modalData:{
        index:"",
        title: "",
        msg: "",
        comment:"",
        vue:""
      },
      tableHeal:{
        header1:"Table Head One",
        header2:"Table Head Two",
        header3:"Table Head Three",
        header4:"Table Head Four"
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
    console.log(this.props.modal)
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = {
      title: this.state.modalData.title,
      msg: this.state.modalData.msg,
      comment: this.state.modalData.comment,
      vue :this.state.modalData.vue
    }
    console.log(form);
    this.saveModalDetails(form)
    this.setState({
       modal: !this.state.modal
     });
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
      modal: !this.state.modal,
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
            modal: !this.state.modal,
            modalData:{
              index:"",
              title: "",
              msg: "",
              comment:"",
              vue:""
            }
        });
    }
    titleHandler(e) {
        this.setState({ modalData: {title: e.target.value }});
    }

    msgHandler(e) {
        this.setState({ modalData: {msg: e.target.value }});
    }
    commentHandler(e) {
        this.setState({ modalData: {comment: e.target.value }});
    }
    vueHandler(e) {
        this.setState({ modalData: {vue: e.target.value }});
    }
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

  render() {
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <TableRow key={index} onClick={() =>this.replaceModalItem(index)} >
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
           <button type="button" className="btn btn-primary"  onClick={this.addNew}>Add </button>
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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>IPL 2018</ModalHeader>
            <ModalBody>
            <div className="row">
              <div className="form-group col-md-4">
              <label>Title:</label>
              <input type="text" value={this.state.modalData.title} onChange={this.titleHandler} className="form-control" />
                </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
              <label>Message:</label>
                  <input type="text" value={this.state.modalData.msg} onChange={this.msgHandler} className="form-control" />
                 </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                <label>Comment:</label>
                  <input type="text" value={this.state.modalData.comment} onChange={this.commentHandler} className="form-control" />
                 </div>
                </div>
                <div className="row">
                 <div className="form-group col-md-4">
                  <label>Vue:</label>
                    <input type="text" value={this.state.modalData.vue} onChange={this.vueHandler} className="form-control" />
                   </div>
                  </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </form>
      </Modal>
      </div>
    );
  }
}

export default List;
