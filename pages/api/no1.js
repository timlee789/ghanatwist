import { connectToDb } from '../../Lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    
    switch (req.method) {
        case 'GET': {
            return getPost(req, res);
        }
        case 'POST': {
            return addPost(req, res);
        }
        case 'PUT': {
            return updatePost(req, res);
        }
        case 'DELET': {
            return deletePost(req, res);
        }
    }
    async function getPost(req,res){
        try {
            // connect to the database
            let { db } = await connectToDb();
            // fetch the posts
            let posts = await db
                .collection('no1')
                .find({})
                .sort({ published: -1 })
                .toArray();
            // return the posts
            return res.json({
                message: JSON.parse(JSON.stringify(posts)),
                success: true,
            });
          
        } catch (error) {
            // return the error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    }
    
    async function addPost(req, res) {
        try {
            // connect to the database
            let { db } = await connectToDb();
            // add the post
            await db.collection('no1').insertOne(req.body);
            // return a message
            return res.json({
                message: 'Post added successfully',
                success: true,
            });
        } catch (error) {
            // return an error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    }
    
    async function deletePost(req, res) {
        try {
            // Connecting to the database
            let { db } = await connectToDb();
    
            // Deleting the post
            await db.collection('no1').deleteOne({
                _id: new ObjectId(req.body),
            });
    
            // returning a message
            return res.json({
                message: 'Post deleted successfully',
                success: true,
            });
        } catch (error) {
    
            // returning an error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    }
    
    async function updatePost(req, res) {
       
        try {
            // connect to the database
            let { db } = await connectToDb();

            // update the published status of the post
            await db.collection('no1').updateOne(
                {
                    _id: ObjectId(JSON.parse(req.body).id),
                },
                { $set:JSON.parse(req.body) }
            );
    
            // return a message
            return res.json({
                message: 'Post updated successfully',
                success: true,
            });

            

        } catch (error) {
    
            // return an error
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    }
}