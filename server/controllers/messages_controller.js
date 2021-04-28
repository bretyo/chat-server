let messages = [
    // {
    //     // id: 0,
    //     // text: '',
    //     // time: ''
    // }
];
let id = 0;

module.exports = {
    create: (req, res)=>{
        const {text, time} = req.body;
        
        // if(!text || !time){
        //     return res.status(500).send(`didn't have correct body`)
        // }
        
        const newMessage = {
            id,
            text,
            time
        }
        id++;
        messages = [...messages, newMessage]
        res.status(200).send(messages);
    },

    read: (req, res)=>{
        res.status(200).send(messages);
    },

    udpate: (req, res)=>{
        const {id} = req.params;
        const {text} = req.body
        const index = messages.findIndex(msg=> msg.id === parseInt(id, 10))
        if(index === -1 ){
            return res.status(500).send('error in server');
        }
        let message = messages[index]
        messages[index] = {
            id: +id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages);
    },

    delete: (req, res)=>{
        const {id} = req.params;
        const index = messages.findIndex(msg=> msg.id === parseInt(id, 10))
        if(index === -1 ){
            return res.status(500).send('error in server');
        }
        messages.splice(index, 1)
        res.status(200).send(messages);
    },
}