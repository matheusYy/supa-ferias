import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addUsers = async (req, res) => {
   // Create new home
   if (req.method === 'POST') {
    try { 
      const { image, title, description, price, guests, beds, baths } = req.body;

    const home = await prisma.home.create({
      data: { image, title, description, price, guests, beds, baths },
    });
      res.status(200).json(home)

    } catch(e) {
     res.status(500).json({message: 'error'})
    }
    // TODO
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}

export default addUsers;