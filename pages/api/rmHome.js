import { PrismaClient } from "@prisma/client";

const rmHome = async (req, res) => {
 const prisma = new PrismaClient()
 const home = await prisma.home.findMany()

 res.status(200).json({home})
}

export default rmHome;