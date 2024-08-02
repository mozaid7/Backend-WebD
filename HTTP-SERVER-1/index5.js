// ZOD let's you check or validate whether the provided input is valid or not.

const express = require("express");
const zod = require("zod");
const app = express();

// How to write zod conditions for different schema
// {
//     email: string
//     password: atleast 8 letters
//     country: "IN", "US"
// }
// const schema = zod.object({
//     email: zod.string(),
//     password: z.string(),
//     country: z.literal("IN").or(z.literal("US")),
//     kidneys: z.array(z.number())
// })

function validateInput(obj) {
    const schema = zod.object ({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}
validateInput ({
    email: "hkirat@gmail.com",
    password: "1235456789"
});

app.use(express.json());
app.post("/login", (req, res) => {
  const response = validateInput(req.body)
  if (!response.success) {
    res.json({
        msg: "Input is invalid"
    })
    return
  }
});

// const schema = zod.array(zod.number());
// app.use(express.json());
// app.post("/health-checkup", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys)
//   if (!response.success) {
//     res.status(411).json({
//         msg: "input is invalid"
//     })
//   } else {
//     res.send({
//         response
//       })
//   }
// });
  
  app.listen(3000);