import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  console.log(req);
  console.log(res);

  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;

    // Connect to MongoDB server
    const client = await MongoClient.connect(
      'mongodb+srv://joonhabaak:9rpAKJZFWcDrLF6s@cluster0.rfkrpzi.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    /**
     * Create a new Db instance sharing the current socket connections.
     *
     * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.
     * @param options - Optional settings for Db construction
     */
    // The **Db** class is a class that represents a MongoDB Database.
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    // close DB connection
    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default handler;
