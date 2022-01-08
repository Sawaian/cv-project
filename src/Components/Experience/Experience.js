import React, { Component } from "react";
import uniqid from "uniqid";
import './Experience.css'


class Excperience extends Component {
    constructor(){
        super()

        this.state = {
            experience: ({
                companyName: 'CVS',
                position: 'Stocker',
                mainTasks: 'description',
                dateFRom: '2012 Mar',
                dateTo: '2020 Mar'
            }),
            infoArray: [],
            edit: false,
        }
    }

    render(){
        const {experience, edit} = this.state;
        if(edit){
            return(
                <div>
                    
                </div>

            )
            //show edit stuff
        }
        else {
            return(
            <div>

            </div>)
        }
    }
}