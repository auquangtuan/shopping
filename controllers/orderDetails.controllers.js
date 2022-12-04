const {
  Order_Details,
  Order,
  User,
  Product_Size,
  sequelize,
} = require("../models");
const bcrypt = require("bcrypt");
const getAllOrderDetails = async (req, res) => {
  const allOrderDetails = await Order_Details.findAll({
    include: [
      {
        model: Order,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
  });
  res.status(200).send(allOrderDetails);
};
const getOrderDetailsChart = async (req, res) => {
  const [allChart] = await sequelize.query(
    `
        SELECT order_details.id, order_details.price, order_details.number, categories.name FROM shopping_db.order_details
        inner join product_sizes on product_sizes.id  = order_details.productSize
        inner join products on products.id = product_sizes.product_ID
        inner join categories on categories.id = products.category_id
        `
  );
  res.status(200).send(allChart);
};
const createOrderDetails = async (req, res) => {
  const { order_ID, price, number, productSize } = req.body;
  const id = productSize;
  const addOrderDetails = await Order_Details.create({
    order_ID,
    price,
    number,
    productSize,
  });
  const updateNumber = await Product_Size.findOne({
    where: {
      id,
    },
  });
  console.log(updateNumber);
  updateNumber.amount = updateNumber.amount - number;
  await updateNumber.save();
  res.status(201).send(addOrderDetails);
};
const getOneOrderDetails = async (req, res) => {
  const { id } = req.params;
  const oneOrderDetails = await Order_Details.findAll({
    where: {
      id,
    },
    include: [
      {
        model: Order,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
  });
  res.status(200).send(oneOrderDetails);
};

const editOrderDetails = async (req, res) => {
  const { id } = req.params;
  const { order_ID, price, number, productSize } = req.body;
  const OrderDetailsEdit = await Order_Details.findOne({
    where: {
      id,
    },
  });
  OrderDetailsEdit.order_ID = order_ID;
  OrderDetailsEdit.price = price;
  OrderDetailsEdit.number = number;
  OrderDetailsEdit.productSize = productSize;
  await OrderDetailsEdit.save();
  res.status(201).send(OrderDetailsEdit);
};
const deleteOrderDetails = async (req, res) => {
  const { id } = req.params;
  await Order_Details.destroy({
    where: {
      id,
    },
  });
  res.status(200).send("Đã Xóa");
};
const postOrder = async (req, res) => {
  const { user_ID, fullname, email, phone, address, note, arr, password } =
    req.body;
  if (password) {
    // const { fullname, email, phone, address, password } = req.body

    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      res.status(404).send({ error: "Email Đã Tồn Tại" });
    } else {
      const salt = bcrypt.genSaltSync(3);
      const hashPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create({
        fullname,
        email,
        phone,
        address,
        password: hashPassword,
      });
      res.status(201).send(newUser);
      return (user_ID = newUser.id);
    }
    const createOrder = await Order.create({
      user_ID,
      fullname,
      email,
      phone,
      address,
      note,
    });

    for (let i = 0; i < arr.length; i++) {
      const [getProductSizes] = await sequelize.query(
        `
                select Product_Sizes.id from Product_Sizes
                where Product_Sizes.product_ID = ${arr[i].product_ID} and Product_Sizes.size_ID = ${arr[i].size_ID}
                `
      );

      const productSizes = getProductSizes[0].id;

      await Order_Details.create({
        order_ID: createOrder.id,
        price: arr[i].price,
        number: arr[i].number,
        productSize: productSizes,
      });

      const updateAmount = await Product_Size.findOne({
        where: {
          id: productSizes,
        },
      });
      updateAmount.amount = updateAmount.amount - arr[i].number;
      await updateAmount.save();
    }
    res.status(201).send({ messgage: "Đặt Hàng Thành Công", createOrder });
  } else {
    const createOrder = await Order.create({
      user_ID,
      fullname,
      email,
      phone,
      address,
      note,
    });

    for (let i = 0; i < arr.length; i++) {
      const [getProductSizes] = await sequelize.query(
        `
                    select Product_Sizes.id from Product_Sizes
                    where Product_Sizes.product_ID = ${arr[i].product_ID} and Product_Sizes.size_ID = ${arr[i].size_ID}
                    `
      );

      const productSizes = getProductSizes[0].id;

      await Order_Details.create({
        order_ID: createOrder.id,
        price: arr[i].price,
        number: arr[i].number,
        productSize: productSizes,
      });

      const updateAmount = await Product_Size.findOne({
        where: {
          id: productSizes,
        },
      });
      updateAmount.amount = updateAmount.amount - arr[i].number;
      await updateAmount.save();
    }
    res.status(201).send({ messgage: "Đặt Hàng Thành Công", createOrder });
  }
};
module.exports = {
  getAllOrderDetails,
  getOrderDetailsChart,
  createOrderDetails,
  editOrderDetails,
  deleteOrderDetails,
  getOneOrderDetails,
  postOrder,
};
