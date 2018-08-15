import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
        this.msgHandler = this.msgHandler.bind(this);
        this.commentHandler = this.commentHandler.bind(this);
        this.vueHandler = this.vueHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            newRow:'',
            index:'',
            title: '',
            msg: '',
            comment:'',
            vue:'',
            modal: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            newRow: nextProps.newRow,
            index: nextProps.index,
            title: nextProps.title,
            msg: nextProps.msg,
            comment: nextProps.comment,
            vue: nextProps.vue,
            modal: true
        });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    msgHandler(e) {
        this.setState({ msg: e.target.value });
    }
    commentHandler(e) {
        this.setState({ comment: e.target.value });
    }
    vueHandler(e) {
        this.setState({ vue: e.target.value });
    }

    handleSave() {
        let row = {};
        row["title"] = this.state.title;
        row["msg"] = this.state.msg;
        row["comment"] = this.state.comment;
        row["vue"] = this.state.vue;
        //const item = this.state;
        this.props.saveModalDetails(row)
    }
    handleDelete(){
      const item = this.state;
      this.props.deleteItem(item.index)
    }
    handleSubmit(event) {
      event.preventDefault();
      const form = {
        name: this.state.title,
        team: this.state.msg,
        country: this.state.comment,
        vue :this.state.vue
      }
      //this.props.saveModalDetails(form)
      console.log(form);
      this.setState({
         modal: !this.state.modal
       });
       this.props.saveModalDetails(form)
      //let uri = 'http://localhost:8000/api/formmodal';
    //  axios.post(uri, form).then((response) => {

  //    });
    }
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    render() {
        return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>IPL 2018</ModalHeader>
            <ModalBody>
            <div className="row">
              <div className="form-group col-md-4">
              <label>Title:</label>
              <input type="text" value={this.state.title} onChange={this.titleHandler} className="form-control" />
                </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
              <label>Message:</label>
                  <input type="text" value={this.state.msg} onChange={this.msgHandler} className="form-control" />
                 </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                <label>Comment:</label>
                  <input type="text" value={this.state.comment} onChange={this.commentHandler} className="form-control" />
                 </div>
                </div>
                <div className="row">
                 <div className="form-group col-md-4">
                  <label>Vue:</label>
                    <input type="text" value={this.state.vue} onChange={this.vueHandler} className="form-control" />
                   </div>
                  </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </form>
      </Modal>
        );
    }
}

export default ModalComponent;
