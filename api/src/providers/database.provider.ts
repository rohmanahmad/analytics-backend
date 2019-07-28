import * as mongoose from 'mongoose'

export const DatabaseProvider = [
    {
        provide: 'MongoDB_1_Connection',
        useFactory: async () : Promise<typeof mongoose> =>
            await mongoose.connect(
                'mongodb://localhost:27017/malangsoftware',
                { useNewUrlParser: true }
            )
    }
]