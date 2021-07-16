const crypto = require('crypto');

const ClientModel = mongoose.model('Order');

exports.createOrder = (req, res, next) => {
    var newClient = new ClientModel();

    crypto.createHash("sha256").update("<user_password_here>" + process.env.SALT_KEY).digest("hex");

    // May use "guid" to generate IDs...

    // must wrap around TRY/CATCH
    // newOrder.save(); // async function that saves product to database
};