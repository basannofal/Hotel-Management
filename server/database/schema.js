const mongoose = require('mongoose')

const hotelschema = mongoose.Schema({

    // hotel basic info
    hname: {
        type: String,
        required: true
    },
    honame: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    psw: {
        type: String,
        required: true
    },
    foodtype: {
        type: String,

    },


    // Hotel Facilities
    computer: String,
    meeting: String,
    gym: String,
    health: String,
    parking: String,
    restaurant: String,
    wifi: String,
    himage: String,






    // hotel services

    carrent: String,
    catering: String,
    courier: String,
    doctor: String,
    ticket: String,
    ironing: String,
    laundry: String,
    massages: String,
    roomservice: String,



    // ADD MENU 

    addmenu: [{
        dishname: {
            type: String,
            required: true
        },
        prize: {
            type: Number,
            required: true
        },
        dishcategory: {
            type: String,
            required: true
        }
    }],



    //hotel contact information

    hotelcontactnumber: String,
    hotellenline: String,
    hoteladdress: String,
    hotelemailaddress: String,
    whychoose: String,













    mainmenu: [{
        
                 arrname: String ,

                    submenuarray: [
                        
                        {
                
                            dishname1: {
                                type: String,
                                required : true
                            },
                            prize1: {
                                type: Number,
                                required : true
                            },
                            dishcategory1: {
                                type: String,
                                required : true
                            }
                        }]
            
    }],


    select_menu : String,
    





})

const sharehotelschema = mongoose.model('signup', hotelschema)

module.exports = sharehotelschema;