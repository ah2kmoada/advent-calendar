import React from 'react';

class Date extends React.Component {

    constructor(props) {
        super(props);
         
    }

    openHandler = (number) => {
        this.props.openDate(number);
    }



    render() {
        let row, column;
        if (this.props.position.length == 2) {
            row = this.props.position[0];
            column = this.props.position[1];
            row++;
        } else {
            row = 1;
            column = this.props.position[0];
        }
        column++;

        const gridPosition = {
            "gridColumn": column + "/" + (column + 1),
            "gridRow": row + "/" + (row + 1)
        };
        if (!this.props.open) {
            return (
                <div className="date" style={gridPosition}
                onClick={() => this.openHandler(this.props.number)}
                >
                    {this.props.number}
                </div>
            );
        } else {
            return (

                <div className="date-opened" style={gridPosition}>{this.props.joke}</div>
            );
        }
    }
}


export default Date;