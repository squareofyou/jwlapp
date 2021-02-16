import React, { Component } from "react";
import axios from "axios"

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
        //console.log(data);
        this.props.handleDiscount(this.state);
        this.props.history.push("/dialog")

    }

    printToFile = () => {
        let props = this.props;
        const { price, weight } = this.state;

        let totalPrice = price * weight;
        let discount = props.role === "Priviliged" ? price * weight * (2 / 100) : 0;
        let finalPrice = totalPrice - discount;
        let discountPercent = props.role === "Priviliged" ? "2%" : "0";

        this.setState({ total: finalPrice });

        let input = {
            "weight" :weight.toString(),
            "price":price.toString(),
            "discount":discountPercent,
            "total" : finalPrice.toString()
        };

        axios.post("https://localhost:5001/api/pdfcreator/createpdf",input)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    printToPaper = () => {
    }

    render() {
        let props = this.props;
        const { price, weight } = this.state;
        console.log(props);
        let userDiscount = props.role === "Priviliged" ?
            <div>
                <label><b>Discount</b></label><br/>
            <input type="text" value="2%" disabled />
            </div>

            : null;
        let style = {
            marginLeft: '200px',
            marginTop: '50px'
        }
        return (
            <div>
                <form style={style}>
                    <h2>Welcome : {props.role} User</h2>
                    
                        <label><b>Gold Price (per Gram)</b></label><br/>                        
                        <input type="number" name="price" value={price} onChange={this.changeHandler} /><br/>
                    
                    
                        <label><b>Weight(grams)</b></label><br/>  
                        <input type="number" name="weight" value={weight} onChange={this.changeHandler} /><br/>
                    
                        <label><b>Total Price</b></label><br/>  
                        <input type="number" name="Total" value={this.state.total} disabled /><br/>
                    
                    
                        {userDiscount}
                    

                    <button type="button" onClick={this.calculatePrice} style={{'marginTop':'10px'}}>Calculate</button>
                    <button type="button" onClick={this.printToScreen}>Print to Screen</button>
                    <button type="button" onClick={this.printToFile}>Print to File</button>
                    <button type="button" onClick={this.printToPaper}>Print to Paper</button>
                </form>
            </div>
        )
    }
}

export default CalculatePrice;