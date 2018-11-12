/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#dispatcherVM',
  data: {
    orders: []
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = [];
      (this.orders).push(data.orders);
      console.log("INITIALIZE");
    }.bind(this));

    socket.on('currentQueue', function (data) {
      (this.orders).push(data.orders);
      console.log("QUEUING");
    }.bind(this));
  }
});
