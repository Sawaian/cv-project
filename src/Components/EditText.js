import React, { Component } from "react";

class EditText extends Component{
    constructor(){
        super();

        function editField(x,y){
            return x + y;
        }

        return editField
    }
}

export default EditText;