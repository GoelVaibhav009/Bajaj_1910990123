const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl",(req, res) => {

    var data = req.body;
    var num = [];
    var alpha = [];
    for (let i = 0; i < data["data"].length; i++) {
        if(isNaN(data["data"][i])){
            alpha.push(data["data"][i]);
        }else{
            num.push(data["data"][i])
        }
    }
      
    //["A","1","334","B","8"]

    try {
        res.status(200).json(
            {
                "is_success": true,
                "user_id":"vaibhav_goel_1910990123",
                "email":"vaibhavgoel0123.cse19@chitkara.edu.in",
                "roll_number":"1910990123",
                "numbers":num,
                "alphabets":alpha
            }
        );
      } catch (error) {
        res.status(500).json(error);
      }
})

app.listen(8000, () => {
  console.log("Backed Is Conected");
});