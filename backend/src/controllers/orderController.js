// Not following CRUD rigidly, but the idea remains...

const OrderModel = mongoose.model('Order');

exports.createOrder = (req, res, next) => {
    var newOrder = new OrderModel();

    

    // May use "guid" to generate IDs...

    // must wrap around TRY/CATCH
    // newOrder.save(); // async function that saves product to database
};