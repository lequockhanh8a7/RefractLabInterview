import React, {useState, useEffect} from 'react';
import HomePage from './HomePage'
import RepairSchedulePage from './RepairSchedulePage'
import InventoryPage from './InventoryPage'
import CustomerPage from './CustomerPage'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';




class DisplayPage extends React.Component {
    constructor (props) {
        super (props);
        //get all required renderer
        this.listPage = [new HomePage (), new RepairSchedulePage (), new InventoryPage (), new CustomerPage ()];
        this.state = {
            displayPage : this.listPage[0].render()
        };
    }

    switchPage (pageName) {
        // check the pagename and return the respective renderer
        if (pageName == "Repair") {
            this.setState ({displayPage : this.listPage[1].render()});
        } else if (pageName == "Inventory") {
            this.setState ({displayPage : this.listPage[2].render()});
        } else if (pageName == "Customer") {
            this.setState ({displayPage : this.listPage[3].render()});
        } else {
            this.setState ({displayPage : this.listPage[0].render()});
        }
    }
  
    render () {
        return (
            <div>
                <AppBar position = "static">
                    <Toolbar>
                        <Tooltip title = "Back to homepace of our website">
                            <Button color = "secondary" onClick={() => this.switchPage ("Home")}>Home</Button>
                        </Tooltip>

                        <Tooltip title = "Book a date for reparing here">
                            <Button color = "secondary" onClick={() => this.switchPage ("Repair")}>Schedule Repair</Button>
                        </Tooltip>

                        <Tooltip title = "Buy some inventories here">
                            <Button color = "secondary" onClick={() => this.switchPage ("Inventory")}>Current Invetory</Button>
                        </Tooltip>

                        <Tooltip title = "List of our trusted customers">
                            <Button color = "secondary" onClick={() => this.switchPage ("Customer")}>Customer</Button>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                {this.state.displayPage}
            </div>
        );
    }
    

    
}


export default DisplayPage