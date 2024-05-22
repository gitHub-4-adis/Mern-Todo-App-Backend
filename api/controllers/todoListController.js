import listModel from '../models/listModel.js';

export default class todoListController {

    static async fetchTodo(req, res) {
        try {
            const items = await listModel.find({});
            res.json(items);

        } catch(err) {
            throw 'error is this man: ' + err;
        }
    }

    static async fetchTodoItem(req, res) {
        try {
            const data = await listModel.findOne({_id: req.params.id});
            res.status(200).json({
                title: data.title,
                desc: data.desc
            });
            
        } catch (err) {
            if(err) throw err;
        }
    }

    static async updateTodoItem(req, res) {
        if(req.body && Object.keys(req.body).length > 0) {
            try {
                const item = await listModel.findOneAndUpdate({
                        _id: req.body.id
                    }, {
                        $set: {
                            title: req.body.title,
                            desc: req.body.desc
                        }
                    }, {
                        new: true
                });
                res.json(item);
    
            } catch(err) {
                throw 'error is this man: ' + err;
            }

        } else {
            res.status(200).json({
                status: 200,
                data: "Empty request body"
            });
        }
    }

    static async addTodoItem(req, res) {
        try {
            const item = await listModel.create({
                title: req.body.title,
                desc: req.body.desc
            });
            res.json(item);

        } catch(err) {
            throw 'error is this man: ' + err;
        }
    }

    static async deleteTodoItem(req, res) {
        try {
            const item = await listModel.deleteOne({_id: req.params.id});
            res.json(item);

        } catch(err) {
            throw 'error is this man: ' + err;
        }
    }
}