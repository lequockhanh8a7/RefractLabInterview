import React from 'react';
import  {DataGrid} from '@material-ui/data-grid';

class DataTable extends React.Component {
    // parent class for all sub-class of table
    constructor (props) {
        super (props);
        this.state =  {
            rows : [],
            cols: []
        }
    }
    render () {
        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={this.state.rows} columns={this.state.columns} />
            </div>

        );
    }
}

export default DataTable