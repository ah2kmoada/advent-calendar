import React from 'react';
import Date from './Date';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            jokes: []

        };


    }

    openDate = (number) => {
        /*
        console.log("Compare here");
        
        console.log(this.state.dates[number-1]);
        const newDates = this.state.dates;
        newDates[number-1]["open"] = true;
        this.setState({dates: newDates});
        console.log(this.state.dates[number-1]);
        
       console.log(number);
       let newDates = [...this.state.dates];
       let date = {...newDates[number-1]};
       date.open = true;
       newDates[number-1] = date;
       this.setState({dates: newDates});
        
       let date = {...this.state.dates[number-1]};
       date.open = true;
       
       let newDates = [...this.state.dates];
       newDates[number-1] = date;
       this.setState({dates: newDates});
       */
        let newDates = [...this.state.dates];
        newDates[number - 1] = { ...newDates[number - 1], open: true };
        this.setState({ dates: newDates });


    }

    reorder = () => {
        let dates = [...this.state.dates];
        let positions = new Set();
        let newDates = dates.map(date => {
            const newPosition = this.generateUniqueNumber(positions);
            positions.add(newPosition);
            date.position = newPosition.toString();
            return date;
        });
        //console.log(closedDates);
        this.setState({ dates: newDates });
    }

    reset = () => {
        let dates = [...this.state.dates];
        let closedDates = dates.map(date => {
            date.open = false;
            return date;
        });
        //console.log(closedDates);
        this.setState({ dates: closedDates });
    }



    render() {
        console.log(this.state.dates);
        return (
            <div className="grid"> {
                this.state.dates.map(date => {
                    return (<
                        Date key={date.number}
                        number={date.number}
                        open={date.open}
                        openDate={this.openDate}
                        position={date.position}
                        joke={date.joke}
                    />
                    );
                })
            }

            </div>
        );
    }

    generateUniqueNumber = (numberSet) => {
                let number = Math.floor((100 - 1) * Math.random()) + 1;

        while (numberSet.has(number)) {
                number = Math.floor((100 - 1) * Math.random()) + 1;
        }
        return number;
    }

    generateNewDates = (jokes) => {
                let positions = new Set();
        let newDates = [];

        for (let i = 1; i <= 24; i++) {
                let position = this.generateUniqueNumber(positions);
            positions.add(position);
            newDates.push({
                "number": i,
                "position": position.toString(),
                "joke": jokes[i - 1],
                "open": false
            });
        }
        return newDates;
    }



    async componentDidMount() {
        const response = await fetch("http://api.icndb.com/jokes/random/24");
        const joke_data = await response.json();
        const jokes = await joke_data.value.map(j => j.joke);
        //console.log(jokes);
        this.setState({ jokes: jokes });
        const newDates = this.generateNewDates(jokes);

        this.setState({ dates: newDates });





    }
}

export default Grid;