import React, {Component } from 'react';

class App extends Component {
    constructor(props){

        super(props);

        this.state.data =   [
            {
                name: 'Rohan LLC Shoes',
                merchant_id: 'A1201',
                "pricing": {
                    "subsidy": 9,
                    "discount_subsidy": 6,
                    "discount_cutoff": 600
                },
                "transactions": [
                    {
                        "description": "Granite Keyboard",
                        "date": "2019-02-20T15:06:32.153Z",
                        "price": 1675
                    },
                    {
                        "description": "Generic Wooden Bacon",
                        "date": "2019-03-08T17:58:17.636Z",
                        "price": 2540
                    },
                    {
                        "description": "Pants",
                        "date": "2019-03-11T11:48:04.699Z",
                        "price": 1558
                    },
                    {
                        "description": "Awesome Mouse",
                        "date": "2019-03-10T14:57:47.403Z",
                        "price": 2002
                    }
                ]
            }
        ]

    }

    render(){

        return (
            <div>
             {

                this.state.data.map((rowdata, i) =>
                    <div>
                        <div>
                            { 'Name' + rowdata.name }
                        </div>
                        <div>
                            { 'Merchant ID' + rowdata.merchant_id }
                        </div>
                        
                        (typeof(rowdata.transactions) == 'object')?
                        <div>
                            rowdata.transactions.map((subRowData, k) =>
                                <div>
                                    <div>
                                        { 'Description' + subRowData.description }
                                    </div>
                                    <div>
                                        { 'Date' + subRowData.date }
                                    </div>
                                    <div>
                                        { 'Price' + subRowData.price }
                                    </div>
                                </div>
                            )
                        </div>
                        :
                        null
                    </div>
                )
             }
            </div>
        )
    }
   
}

