const mongoose = require('mongoose');

const HomePage = new mongoose.Schema({
    // fname: String
    id :  {type: String, required:true},
    title :  {type: String, required:true},
    Image :  {type: String, required:true},
    category :  {type: String, required:true},
    description :  {type: String, required:true}
},
{
   collection: "user",
}
);

// const homepage = 
 mongoose.model("user", HomePage);
// module.exports = homepage;
