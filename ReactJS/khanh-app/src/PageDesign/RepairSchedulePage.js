import React from 'react';
import Button from '@material-ui/core/Button';
import DataTable from './DataTable'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';





class ScheduleTable extends DataTable {
    
    // add the data to the class
    constructor (props) {
        super (props);
        this.state = {
            columns : [
                {field: 'id', headerName : 'ID', width : 100},
                {field: 'customerName', headerName : 'Customer Name', width : 300},
                {field: 'bicycleModel', headerName : 'Bicycle Model', width: 100},
                {field: 'date', headerName : 'Date', width: 200}
            ],

            rows : [
                {id: 1, customerName : 'Davinson Sanchez', bicycleModel: 'ATX68', date: new Date (2021, 1, 20)},
                {id: 2, customerName : 'Eric Dier', bicycleModel: 'A6800', date: new Date (2021, 3, 5)},
                {id: 3, customerName : 'Thomas Davis', bicycleModel: 'BX9968', date: new Date (2021, 4, 8)},
            ] 
        }
    }
}

class ModalForm extends React.Component {
    // use state variable 'open' to control the form
    constructor (props) {
        super (props);
        this.state = {
            open : false,
        }
        this.openForm = () => {
            this.setState ({open : true});
        }

        this.closeForm = () => {
            this.setState ({open : false});
        }
    }


    render () {
        return (
            <div>
                
                <Dialog open={this.state.open} onClose={this.closeForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Customer Form</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please put your information here
                        </DialogContentText>
                            <form action = "/" method = "POST" onSubmit = {() => this.props.onChangeValue}> 
                                <TextField autoFocus margin="dense" id ="customerName" label="Customer Name" type="text" fullWidth/>
                                <TextField autoFocus margin="dense" id ="bicycleModel" label="Bicycle Model" type="text" fullWidth/>
                                <TextField id="date" label="Date" type="date" defaultValue="2021/1/1" InputLabelProps={{ shrink: true}}/>
                                <Button onClick={this.closeForm} color="primary"> Cancel </Button>
                            </form>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
            </Dialog>
            
      </div>
        );
    }

}




class RepairSchedulePage extends React.Component {
    constructor (props) {
        super (props);
        this.table = React.createRef ();
        this.modal = React.createRef ();

        this.openModalForm = () => {
            this.modal.current.openForm();
        }
    }


    render () {
        return (
            <React.Fragment>
                <ScheduleTable ref = {this.table}/>
                <ModalForm ref = {this.modal}/>
                <Tooltip title = "Book a date with our repairing service">
                    <Button variant = "contained" color = "primary" onClick = {() => this.openModalForm ()} >Schedule Repair</Button>
                </Tooltip>
            </React.Fragment>
            );
    }
}


export default RepairSchedulePage