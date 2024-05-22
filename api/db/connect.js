import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
    } catch(err) {
        if(err) throw err;
    }
}

export default connect