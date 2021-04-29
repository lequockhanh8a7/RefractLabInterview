import React from 'react';
import DataTable from './DataTable'


class CustomerList extends DataTable {
    
    constructor (props) {
        super (props);
        this.state = {
            columns : [
                {field: 'id', headerName : 'ID', width : 100},
                {field: 'name', headerName : 'Customer Name', width : 400},
                {field: 'phonenumber', headerName : 'Phone Number', width: 400},
                {field: 'email', headerName : 'Email', width: 400},
            ],

            rows : [
                {id: 1, name : 'Alex Willie', phonenumber: "888-150-3784", email : "williea@gmail.com"},
                {id: 2, name : 'Mason Mount', phonenumber: "618-150-3741", email : "masonmont@gmail.com"},
                {id: 3, name : 'Sergio Llorente', phonenumber: "333-458-5784", email : "sergilorent@gmail.com"},
                {id: 4, name : 'Martin Edwards', phonenumber: "178-854-1000",email : "edmartin@gmail.com"},
                {id: 5, name : 'Park Ji-sung', phonenumber: "657-478-4558", email : "parkjs@gmail.com"},
            ] 
        }
    }


}


class CustomerPage extends React.Component {

    constructor (props) {
        super (props);
        this.table = React.createRef ();
    }
    
    render () {
        return (
            <React.Fragment>
                <h1>List of Customer</h1>
                <CustomerList ref = {this.table}/>
            </React.Fragment>

        );
    }
}


export default CustomerPage