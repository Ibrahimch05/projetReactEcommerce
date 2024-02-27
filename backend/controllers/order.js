const Order = require("../models/Order");
const Product = require("../models/Product");
exports.addOrder = async (req, res) => {
    if (
      req.body.name !== "" &&
      req.body.address !== "" &&
      req.body.phone !== "" &&
      req.body.product !== "" &&
      req.body.quantity !== "" &&
      req.body.priceTotal !== "" 
    ){
        Order.create({
        order_name: req.body.name,
        order_address: req.body.address,
        order_phone: req.body.phone,
        order_product: req.body.product,
        order_quantity: req.body.quantity,
        order_priceTotal: req.body.priceTotal
      })
      .then(() => {
        res.send("New Oredr inserted Succefully");
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




// exports.getOrder = (req, res) => {
//   const id = req.params.id;
//   Order.findById(id, { include: Product }).populate('order_product')
//     .then((data) => {
//       if (data ) {
        
//         res.status(200).send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Order with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Order with id=" + id,
//       });
//     });
// };


exports.getOrder = (req, res) => {
    const id = req.params.id;
    Order.findById(id).populate('order_product')
      .then((data) => {
        if (data ) {
          
          res.status(200).send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Order with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Order with id=" + id,
        });
      });
  };

exports.updateOrder = async (req, res) => {
    const id = req.params.id;
    if (
        req.body.name !== "" &&
        req.body.address !== "" &&
        req.body.phone !== "" &&
        req.body.product !== "" &&
        req.body.quantity !== "" &&
        req.body.priceTotal !== ""  
    ) {
      try {
        const updatedOrder = await Order.findOneAndUpdate(
          { _id: id }, // Assuming _id is the unique identifier for the product
          {
            order_name: req.body.name,
            order_address: req.body.address,
            order_phone: req.body.phone,
            order_product: req.body.product,
            order_quantity: req.body.quantity,
            order_priceTotal: req.body.priceTotal
          }
          ,
          { new: true } // Return the updated document
        )
        if (!updatedOrder) {
          return res.status(404).json({ message: 'Order not found' });
        }
        
        return res.status(200).json(updatedOrder);
        // Handle the updated order as needed
      } catch (error) {
        console.error('Error updating order:', error);
        return res.status(500).json({ message: 'Error updating order', error: error });

      }
    } else {
      return res.status(400).json({
        erreur: "Fill all the fields",
      });
    }
  };


exports.showAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find().populate('order_product')
        return res.status(200).json(allOrders);
        // Handle the retrieved order as needed
    } catch (error) {
        console.error('Error getting orders:', error);
        return res.status(500).json({ message: 'Error retrieving order', error: error });
    }
};


exports.dealOfOrder = (req, res) => {
    // Assuming your Order model has a field named "_id"
    Order.findByIdAndDelete(req.params.id)
      .then((deletedOrder) => {
        if (!deletedOrder) {
          return res.status(404).send('Order not found');
        }
        res.send('Order Removed Successfully');
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      });
  };