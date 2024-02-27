const Message = require("../models/Message");

exports.addMessage = async (req, res) => {
    if (
      req.body.name !== "" &&
      req.body.email !== "" &&
      req.body.message !== "" 
    ) {
        Message.create({
        user_name: req.body.name,
        user_email: req.body.email,
        user_message: req.body.message
      })
      .then(() => {
        res.send("New Message inserted Succefully");
      })
      .catch((err) => {
        res.json({ error: err });
      });
    } else {
      return res.status(400).json({
        erreur: "fill all the fields",
      });
    }
  };


exports.getMessage = (req, res) => {
  const id = req.params.id;
  Message.findById(id, { include: Message })
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Message with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Message with id=" + id,
      });
    });
};


exports.updateMessage = async (req, res) => {
    const id = req.params.id;
    if (
      req.body.name !== "" &&
      req.body.email !== "" &&
      req.body.message !== "" 
    ) {
      try {
        const updatedMessage = await Message.findOneAndUpdate(
          { _id: id }, // Assuming _id is the unique identifier for the product
          {
            user_name: req.body.name,
            user_email: req.body.email,
            user_message: req.body.message
          }
          ,
          { new: true } // Return the updated document
        )
        if (!updatedMessage) {
          return res.status(404).json({ message: 'Message not found' });
        }
        
        return res.status(200).json(updatedMessage);
        // Handle the updated message as needed
      } catch (error) {
        console.error('Error updating message:', error);
        return res.status(500).json({ message: 'Error updating message', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllMessages = async (req, res) => {
    try {
        const allMessages = await Message.find()
        return res.status(200).json(allMessages);
        // Handle the retrieved messages as needed
    } catch (error) {
        console.error('Error getting messages:', error);
        return res.status(500).json({ message: 'Error retrieving messages', error: error });
    }
};


exports.dealOfMessage = (req, res) => {
    // Assuming your Message model has a field named "_id"
    Message.findByIdAndDelete(req.params.id)
      .then((deletedMessage) => {
        if (!deletedMessage) {
          return res.status(404).send('Message not found');
        }
        res.send('Message Removed Successfully');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };