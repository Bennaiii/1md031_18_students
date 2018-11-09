//vue_script
'use strict';
var socket = io();

var vm = new Vue({
    //Here comes the optional elements of the Vue object
    el: '#vue',
    data: {
        title: 'Select Burger',
        headline: 'Choose a Burger!',
        burgers: burgerList,
        givenInformation: [],
        fullname: 'A',
        email: 'a@a',
        position: {},
        //street: '',
        //house: '',
        recipient: 'Credit card',
        gender: 'not specified',
        info: '',
        orderNumber: 0,
        selectedburgers: [],
        orders: [],
        orderT: "T"        
    },
    /*created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));
    
        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },*/
    methods: {
        submitOrder: function(event){ 
            this.orderNumber = this.orderNumber + 1;
            var newgivenInformation = [
                " ----------------- ",
                "Order Number #" + this.orderNumber,
                "fullname: " + this.fullname, 
                "email: " + this.email, 
                //"street: " + this.street, 
                //"house nr: " + this.house, 
                "position: " + this.position.x + ":" +this.position.y,
                "payment: " + this.recipient, 
                "gender: " + this.gender,
                "ordered: " + this.selectedburgers
            ];
            this.givenInformation = (this.givenInformation).concat(newgivenInformation, " ");
            
            this.addOrder(event);

            return false;// = readCustomerInformationVUE();
        },
        displayOrder: function(event) {
            //this.orders.length = 0;
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.position = {   x: event.clientX - 10 - offset.x,
                                y: event.clientY - 10 - offset.y
            };
            console.log(this.position.x + " : " + this.position.y);
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                                                                return Math.max(last, next);
                                                            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            socket.emit("addOrder", [   this.orderNumber, //ordernumber0
                                        this.position,
                                        this.selectedburgers, //selection3
                                        [               
                                            this.fullname,   //info4
                                            this.email, 
                                            this.recipient, 
                                            this.gender
                                        ]
                                    ]
            );
        }
    }
})