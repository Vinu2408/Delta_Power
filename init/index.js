const mongoose = require ("mongoose");
const initData = require("./data.js");
const MongoUrl = 'mongodb://127.0.0.1:27017/wanderlust';

const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MongoUrl);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj, 
        owner: "660f4b93e09d7661c3158e8c"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();