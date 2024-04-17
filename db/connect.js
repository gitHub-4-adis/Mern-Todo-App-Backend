import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to mongodb atlas');
        
    } catch(err) {
        if(err) throw err;
    }
}

export default connec