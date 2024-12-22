import mongoose from 'mongoose'
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONDO_DB_URL}`);
        console.log('DB Connected successfully.')
    } catch (error) {
        console.log(`Error on connect DB ${error}`)
    }
}

export default connectDB
