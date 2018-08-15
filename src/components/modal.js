import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            newRow:'',
            index:'',
            title: '',
            msg: '',
            comment:'',
            vue:'',
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


    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Row</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">Msg:</span><input value={this.state.msg} onChange={(e) => this.msgHandler(e)} /></p>
                            <p><span className="modal-lable"> Com: </span><input value={this.state.vue} onChange={(e) => this.vueHandler(e)} /></p>
                            <p><span className="modal-lable">Vue:</span><input value={this.state.comment} onChange={(e) => this.commentHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                           <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save </button>
                           <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => { this.handleDelete() }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
