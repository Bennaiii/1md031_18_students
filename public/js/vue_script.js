//vue_script

var vm = new Vue({
    //Here comes the optional elements of the Vue object
    el: '#vue',
    data: {
        title: 'Select Burger',
        headline: 'Choose a Burger!',
        burgers: burgerList,
        givenInformation: '',
        fullname: '',
        email: '',
        street: '',
        house: '',
        gender: '',
        recipient: ''
    },
    methods: {
        submitOrder: function(){          
            this.$data.givenInformation = readCustomerInformationJS();
        }
    }
});

function readCustomerInformationVUE() {
    var info = [];
    info.push("customer information");
    info.push("fullname: " + this.fullname.value);
    info.push("email: " + this.email.value);
    info.push("street: " + this.street.value);
    info.push("house: " + this.house.value);
    info.push("recipient: " + this.recipient.value);
    info.push("gender: " + this.gender.value); //does not give the selected radio button value :(
    return info;
}