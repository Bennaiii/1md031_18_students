//js_script
/*
function readCustomerInformationJS(){
    console.log("Order Button clicked!");
    //functionality
    var info = [];
    info.push("customer information");
    info.push("fullname: " + document.getElementById('fullname').value);
    info.push("email: " + document.getElementById('email').value);
    info.push("street: " + document.getElementById('street').value);
    info.push("house: " + document.getElementById('house').value);
    info.push("recipient: " + document.getElementById('recipient').value);
    info.push("gender: " + document.querySelector("input[name='rb_gender']").value);
    var str = "";
    console.log(document.querySelectorAll("input[type=checkbox]:checked"));
    for (i=0; i<document.querySelectorAll("input[type=checkbox]:checked").length; i++){
        var node = document.querySelectorAll("input[type=checkbox]:checked")[i];
        str += "#" + node.value + " ";
        console.log(node);
    }
    info.push("selection: " + str);
    return info;
}



function MenuItem(nm, img_url, kcal, glut, lact, amount) {
    // The this keyword refers to the object itself
    this.name = nm; 
    this.image = img_url;
    this.kcalories = kcal;
    this.gluten = glut;
    this.lactose = lact;
    this.stock = amount;
    this.attributelist = [this.kcalories, this.gluten, this.lactose];
    this.attributes = function() {
        return ("calories: " + this.kcalories + "kCal \ngluten: " + this.gluten + "\nlactose: " + this.lactose + "\navailable: " + this.stock);
    };
    this.display = function() {
    		if (this.gluten == false && this.lactose == false){
   					return (this.name + " attributes: " + this.kcalories + " kCal - available: " + this.stock);
        } else {
            return (this.name + " attributes: " + this.kcalories + " kCal, gluten: " + this.gluten + ", lactose: " + this.lactose + " - available: " + this.stock);
        }
    };
}


//document.getElementById("myID").innerHTML = "Choose a burger";

// Objects are then instantiated using the new keyword
var burgerA = new MenuItem("Super Burger", "https://s.yimg.com/ny/api/res/1.2/fdcPd00QwQu9R21fBSNycA--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9Mzg0O2g9NTYw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/646369acf159a9fc0a78ae1f60f59681", 9000, true, true, 40);
var burgerB = new MenuItem("Standart Burger", "http://smokeybones.com/wp-content/uploads/2015/11/loaded-bbq-burger.jpg", 842, true, true, 72);
var burgerC = new MenuItem("Kids Burger", "https://www.peta.org/wp-content/uploads/2014/05/Fancy-Veggie-Burger.jpg",  333, true, true, 20);
var burgerD = new MenuItem("Veggie Burger", "http://smokeybones.com/wp-content/uploads/2015/11/loaded-bbq-burger.jpg",  777, false, true, 12);
var burgerE = new MenuItem("Vegan Burger", "https://www.peta.org/wp-content/uploads/2014/05/Fancy-Veggie-Burger.jpg",  500, false, false, 18);

var burgerList = [burgerA, burgerB, burgerC, burgerD, burgerE];*/
