const ProductModel = require("./Models/prodmodels")
const createProduct = async (title, Model, price) => {
    console.log("Product Created successfully");
    let product = new ProductModel();
    product.title = title;
    product.Model = Model;
    product.price = price;
    await product.save();
    return product;
}

const getProduct = async () => {
    let product = await ProductModel.find();
    return product;
}

const updateProduct = async (_id, title, Model, price) => {
    let product = await ProductModel.findById(_id);
    if (!product) {
        throw new Error("Product not found");
    }
    console.log("Product Updated successfully!");
    product.title = title;
    product.Model = Model;
    product.price = price;
    await product.save();
    return product;
}

const deleteProduct = async (_id) => {
    let product = await ProductModel.findByIdAndDelete(_id);
    return product;
}

module.exports.createProduct = createProduct;
module.exports.getProduct = getProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
