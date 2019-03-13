import React from 'react';
import styled from 'styled-components';
import { Container, ListGroup, ListGroupItem, Button, Collapse, Label, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ReceiptList extends React.Component {
    constructor() {
        super();
        this.state = {
            receipts: [
                {
                    id: 1,
                    name: 'Spaghetti',
                    collapse: false,
                    addReceipt: false,
                    ingredients: 
                    [
                        {
                            name: 'Tomatoes',
                            measureUnit: 'KG',
                            standardUnit: 1
                        },
                        {
                            name: 'Noodles',
                            measureUnit: 'KG',
                            standardUnit: 1
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Pancakes',
                    collapse: false,
                    addReceipt: false,
                    ingredients: [
                        {
                            name: 'Eggs',
                            measureUnit: 'KG',
                            standardUnit: 1
                        }
                    ]
                }
            ],
            currentItem: 0
        };
    }

    toggle = id => {
        if(this.state.receipts[id-1].addReceipt){
            this.setState(() => this.state.receipts[id-1].addReceipt = !this.state.receipts[id-1].addReceipt)
        }

        this.setState(() => {
            let newState = this.state.receipts.map((receipt)=> {
                if(receipt.id === id){
                    receipt.collapse = !receipt.collapse
                }
            })
            return newState;
        })
    }

    addNewReceipt = (id) => {
        this.setState(() => this.state.receipts[id-1].addReceipt = !this.state.receipts[id-1].addReceipt)
    }
    
    render() {
        let dynamicItemList = (id) =>
        this.state.receipts[id].ingredients.map((ingredient)=> 
            <p key={ingredient.name}>{ingredient.standardUnit} {ingredient.measureUnit} {ingredient.name}</p>
        );

        let listItems = this.state.receipts
            .map( (receipt, key) =>
                <ListGroupItem style={{display: "flex",flexFlow: "column",flex: "1",justifyContent: "center",alignItems:"center"}}key={receipt.id}>
                    <Button color="primary" onClick={() => this.toggle(receipt.id)} style={{ marginBottom: '1rem', width: "50%"}}>
                        {receipt.name}
                    </Button>
                    <Collapse isOpen={receipt.collapse}>
                        {dynamicItemList(key)}
                        <Button color="primary" onClick={() => this.addNewReceipt(receipt.id)} style={{ marginBottom: '1rem' }}>
                            {receipt.addReceipt ? `Hide` : `Show`} Add section
                        </Button>
                    </Collapse>

                    <Collapse isOpen={receipt.addReceipt}>
                        <Label for="Ingredient">Ingredient</Label>
                        <Input type="text" name="ingredient" id="Ingredient" placeholder="Enter Ingredient"/>
                        <Label for="Measure Unit">Measure Unit</Label>
                        <Input type="select" name="measureUnit" id="Measure Unit">
                            <option>kg</option>
                            <option>ml</option>
                            <option>tsp</option>
                        </Input>
                        <Label for="Amount">Amount</Label>
                        <Input type="text" name="standardUnit" id="Amount" placeholder="Enter Amount here"/>
                    </Collapse>
                </ListGroupItem>
            );

        return(
            <div style={{marginLeft: "15%", marginRight: "15%"}}>
                <ListGroup>
                    {listItems}
                </ListGroup>
            </div>
        )
    };
}

export default ReceiptList;