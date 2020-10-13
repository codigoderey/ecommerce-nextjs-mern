import mongoose from "mongoose"

const connection = {}

async function connectDB(){
    if(connection.isConnected){
        // use existing db connection
        console.log("Using existing connection")
    }
    
    // use new db connection
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("DB connected")
    connection.isConnected = db.connections[0].readyState
}

export default connectDB
