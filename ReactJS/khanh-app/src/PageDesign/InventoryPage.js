import React from 'react';
import DataTable from './DataTable'


class InventoryList extends DataTable {
    
    constructor (props) {
        super (props);
        this.state = {
            columns : [
                {field: 'id', headerName : 'ID', width : 100},
                {field: 'name', headerName : 'Inventory Name', width : 300},
                {field: 'amount', headerName : 'Amount', width: 400},
            ],

            rows : [
                {id: 1, name : 'Helmet', amount: 7},
                {id: 2, name : 'Wheel', amount: 15},
                {id: 3, name : 'Motorbicycle', amount: 10},
                {id: 4, name : 'Bicycle', amount: 25},
                {id: 5, name : 'Hammer', amount: 13},
            ] 
        }
    }


}


class InventoryPage extends React.Component {

    constructor (props) {
        super (props);
        this.table = React.createRef ();
    }
    
    render () {
        return (
            <React.Fragment>
                <h1>Current Inventory</h1>
                <InventoryList ref = {this.table}/>
            </React.Fragment>

        );
    }
}


export default InventoryPage