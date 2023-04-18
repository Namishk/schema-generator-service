const { jsonToPrismaSchema } = require("../prisma");
const { formatSchema } = require("@prisma/sdk");
const express = require("express");

var generateRoute = express.Router();

generateRoute.post("/", async (req, res) => {
  console.log("🚀 ~ file: index.ts:30 ~ app.post ~ req.body.schema:", req.body);
  const formattedSchema = await formatSchema({
    schema: jsonToPrismaSchema(req.body),
  });
  res.send(formattedSchema);
});

module.exports = generateRoute;
