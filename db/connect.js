import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('connected to mongodb atlas');
        
    } catch(err) {
        if(err) throw err;
    }
}

export default connect;