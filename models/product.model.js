const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
	{
		name: { // property name of the model
			type: String, // attribute type
			required: [true, "Product name is required"] // check if requred and message to pair 
		}, // add a common by default even if no other property are added
		quantity: {
			type: Number,
			required: true,
			default: 0
		},
		price: {
			type: Number,
			required: true,
			default: 0
		},
		image: {
			type: String,
			required: false
		},
	},
	{
			timestamps: true
	}
);

// allows mongodb to use the schema
const Product = mongoose.model("Product", ProductSchema);
// mongodb will add an s
// and will make it all lowercase
// so end result is "products"

//exports the schema
module.exports = Product;