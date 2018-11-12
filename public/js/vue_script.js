//vue_script
'use strict';
var socket = io();

var vm = new Vue({
    //Here comes the optional elements of the Vue object
    el: '#vue',

    data: {
        title: 'Select Burger',
        headline: 'Choose a Burger!',
        burgers: burgerList, //from menu.js
        fullname: 'Tom Tester',
        email: 'testname@testmail.com',
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

    methods: {
        submitOrder: function(event){ 
            if (checkInsertedData()){
                this.orderNumber = this.orderNumber + 1;
                
                var order = {   
                    number: this.orderNumber, //getNext,
                    position: this.position,
                    items: this.selectedburgers,
                    info: [               
                        this.fullname,  
                        this.email, 
                        this.recipient, 
                        this.gender
                    ]
                };
                this.orders.push(order);

                this.addOrder(event, order);
            }            
            return false;
        },
        displayOrder: function(event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.position = {   x: event.clientX - 10 - offset.x,
                                y: event.clientY - 10 - offset.y
            };
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                                                                return Math.max(last, next);
                                                            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event, order) {
            socket.emit("addOrder", order);
        }
    }
})

function checkInsertedData() {
    if ((vm.fullname.length > 0) &&
        (vm.email.length > 0) &&
        (vm.recipient.length > 0) &&
        (vm.gender.length > 0)){
            if ((vm.position.x == null) || 
                (vm.position.y == null)){
                alert("no position selected!")
                return false;
            }
            if (vm.selectedburgers.length > 0){
                return true;   
            }
            
        alert("no burger selected!");
    }
    else {
        alert("missing values");
    }
    return false;
}