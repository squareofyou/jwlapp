import React, { Component } from "react";

class CalculatePrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: "",
            weight: "",
            total: ""
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    calculatePrice = () => {
        let props = this.props;
        const { price, weight } = this.state;

        let totalPrice = price * weight;
        let discount = props.role === "Priviliged" ? price * weight * (2 / 100) : 0;
        let finalPrice = totalPrice - discount;

        this.setState({ total: finalPrice });
    }

    printToScreen = () => {

    }

    printToFile = () => {
        let props = this.props;
        const { price, weight } = this.state;

        let totalPrice = price * weight;
        let discount = props.role === "Priviliged" ? price * weight * (2 / 100) : 0;
        let finalPrice = totalPrice - discount;

        this.setState({ total: finalPrice });
    }

    printToPaper = () => {
    }

    render() {
        let props = this.props;
        const { price, weight } = this.state;
        console.log(props);
        let userRole = props.role === "Priviliged" ?
            <input type="text" value="2%" />
            : null;
        let style = {

            textAlign: 'center'
        }
        return (
            <div>

                <form style={style}>
                    <h2>Welcome : {props.role} User</h2>
                    <div>
                        Gold Price (per Gram)
                        <input type="number" name="price" value={price} onChange={this.changeHandler} />
                    </div>
                    <div>
                        Weight(grams)
                        <input type="number" name="weight" value={weight} onChange={this.changeHandler} />
                    </div>
                    <div>
                        Total Price
                        <input type="number" name="Total" value={this.state.total} />
                    </div>
                    <div>
                        {userRole}
                    </div>

                    <button type="button" onClick={this.calculatePrice}>Calculate</button>
                    <button type="button" onClick={this.printToScreen}>Print to Screen</button>
                    <button type="button" onClick={this.printToFile}>Print to File</button>
                    <button type="button" onClick={this.printToPaper}>Print to Paper</button>
                </form>
            </div>
        )
    }
}

export default CalculatePrice;