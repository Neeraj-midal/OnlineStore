'use server';

import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { log } from 'console';

const app = express();
const prisma = new PrismaClient();
// const PORT = 3004;

app.use(cors());
app.use(express.json());

// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   console.log(req.body)

//   if (!username || !email || !password) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     // const existingUser = await prisma.user.findUnique({ where: { email } });

//     // if (existingUser) {
//     //   return res.status(409).json({ error: 'Email already registered' });
//     // }

//     const user = await prisma.user.create({
//       data: { name: username, email: email, password: password }
//     })

//     res.status(200).json({ message: 'User registered successfully', user });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ error: 'Server error' });
//   } 
// });


app.post('/admin', async (req, res) => {
  console.log(req.body);

  try {
    const { name, adminId, email, password, status, resetToken, resetTokenExpiry } = req.body;

    const newadmin = await prisma.admin.create({
      data: {
        name,
        adminId,
        email,
        password,
        status,
        resetToken,
        resetTokenExpiry
      },
    });
    res.status(200).json(newadmin);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create admin', detail: error.message });
  }
});



app.get("/api/getAdmin", async (req, res) => {
  try {
    const mappings = await prisma.admin.findMany({

    });
    res.json(mappings);
  } catch (error) {
    console.error("GET /api/admin error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});


app.post('/user', async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, phoneNumber, password, gender, profilePicture, isEmailVerified, resetToken, resetTokenExpiry } = req.body;

    const newuser = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        password,
        gender,
        profilePicture,
        isEmailVerified,
        resetToken,
        resetTokenExpiry
      },
    });

    res.status(200).json(newuser);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create user', detail: error.message });
  }
});


app.get("/api/getUser", async (req, res) => {
  try {
    const mappings = await prisma.user.findMany({

    });
    res.json(mappings);
  } catch (error) {
    console.error("GET /api/User error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});



app.post('/StoreDetail', async (req, res) => {
  console.log(req.body);

  try {
    const { userId, name, email, phoneNumber, location } = req.body;

    const newStore = await prisma.storeDetails.create({
      data: {
        userId,
        name,
        email,
        phoneNumber,
        location
      },
    });

    res.status(200).json(newStore);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create store', detail: error.message });
  }
});


app.get("/getStore", async (req, res) => {
  try {
    const mappings = await prisma.storeDetails.findMany({
      include: {
        user: true,
        MainCategory: true
      }
    });
    res.json(mappings);
  } catch (error) {
    console.error("GET /api/User error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});




app.post('/MainCategory', async (req, res) => {
  console.log(req.body);

  try {
    const { title, status, storeId } = req.body;

    const newMain = await prisma.mainCategory.create({
      data: {
        storeId,
        title,
        status
      },
    });

    res.status(200).json(newMain);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create maincategory', detail: error.message });
  }
});



app.get("/getMain", async (req, res) => {

  const { id } = req.params;


  try {
    const mappings = await prisma.mainCategory.findMany({

  where: {
     storeId: id,
      },

    });

    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});


app.post('/subChildCategory', async (req, res) => {
  console.log(req.body);

  try {
    const { title, status, mainCategoryId, } = req.body;

    const newsubChildCategory = await prisma.subChildCategory.create({
      data: {
        mainCategoryId,
        title,
        status,
      },
    });

    res.status(200).json(newsubChildCategory);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create subChildCategory', detail: error.message });
  }
});



app.get("/getSubchild", async (req, res) => {
  try {
    const mappings = await prisma.subChildCategory.findMany({
      include:{
        mainCategory:true
      }
    });

    console.log(mappings);
    
    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});



app.post('/product', async (req, res) => {
  console.log(req.body);

  try {
    const { title, imageUrl, price, realCost, sellingPrice, discount, status, subChildCategoryId, addedBy } = req.body;

    const mainId = await fetch.mainCategory.findMany()
    const mainCategoryId= await mainId.json()
    console.log(mainCategoryId);
    
    const newproduct = await prisma.product.create({
      data: {
        title,
        imageUrl,
        price,
        realCost,
        sellingPrice,
        discount,
        status,
        mainCategoryId,
        subChildCategoryId,
        addedBy
      },
    });

    res.status(200).json(newproduct);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create product', detail: error.message });
  }
});


app.get("/getProduct", async (req, res) => {
  try {
    const mappings = await prisma.product.findMany({
      include: {
        images: true,
        details: true
      }
    });

    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});



app.post('/productImage', async (req, res) => {
  console.log(req.body);

  try {
    const { pId, imagePath, createdBy, updatedBy } = req.body;

    const newproductImage = await prisma.productImage.create({
      data: {
        pId,
        imagePath,
        createdBy,
        updatedBy
      },
    });

    res.status(200).json(newproductImage);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create productImage', detail: error.message });
  }
});




app.get("/getproductImage", async (req, res) => {
  try {
    const mappings = await prisma.productImage.findMany({
      include: {
        Product: true,
      }
    });

    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});



app.post('/productDetail', async (req, res) => {
  console.log(req.body);

  try {
    const { pId, key, value, addedAt, createdBy, updatedBy } = req.body;

    const newproductDetail = await prisma.productDetail.create({
      data: {
        pId,
        key,
        value,
        addedAt,
        createdBy,
        updatedBy

      },
    });

    res.status(200).json(newproductDetail);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create productDetail', detail: error.message });
  }
});

app.get("/getproductDetails", async (req, res) => {
  try {
    const mappings = await prisma.productDetail.findMany({
      include: {
        Product: true,
      }
    });

    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});



app.post('/cart', async (req, res) => {
  console.log(req.body);

  try {
    const { userId, pId, pieces, addedBy } = req.body;

    const newcart = await prisma.cart.create({
      data: {
        userId,
        pId,
        pieces,
        addedBy,
      },
    });

    res.status(200).json(newcart);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create cart', detail: error.message });
  }
});



app.get("/getCart", async (req, res) => {
  try {
    const mappings = await prisma.cart.findMany();

    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});


app.post('/order', async (req, res) => {
  console.log(req.body);

  try {
    const { orderId, userId, paymentAmount, paymentId, paymentMethod, orderStatus, orderDate } = req.body;

    const neworder = await prisma.order.create({
      data: {
        orderId,
        userId,
        paymentAmount,
        paymentId,
        paymentMethod,
        orderStatus,
        orderDate
      },
    });

    res.status(200).json(neworder);
  }
  catch (error) {
    res.status(400).json({ error: 'Failed to create order', detail: error.message });
  }
});


app.get("/getOrder", async (req, res) => {
  try {
    const mappings = await prisma.order.findMany();

    res.status(200).json(mappings);
  } catch (error) {
    console.error("GET /getMain error:", error);
    res.status(500).json({ error: "Failed to fetch mappings" });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});








// app.get("/getproductDetails", async (req, res) => {
//   try {
//     const mappings = await prisma.productDetail.deleteMany();

//     res.status(200).json(mappings);
//   } catch (error) {
//     console.error("GET /getMain error:", error);
//     res.status(500).json({ error: "Failed to fetch mappings" });
//   }
// });