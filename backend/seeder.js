const dotenv = require('dotenv');
const products = require('./data/products');
const sports_products = require('./data/sports_products');
const users = require('./data/users');
const ProductModel = require('./models/productModel');
const UserModel = require('./models/userModel');
const OrderModel = require('./models/orderModel');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sample_sportsProducts = sports_products.map((product) => {
      return { ...product, user: adminUser };
    });
    await ProductModel.insertMany(sample_sportsProducts);

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await ProductModel.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await OrderModel.deleteMany();
    await ProductModel.deleteMany();
    await UserModel.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// node seeder -d
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
