let express = require('express')
let app = express();
app.use(express.json());

app.get("/:id", async (req, res) => {
    let place = req.params.id;
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5ab3501786a94ecca00130226251211&q=${place}&aqi=yes`)
    let data = await response.json();
    console.log(data)
    res.send({
        status : true, 
        msg : data
    })
})

app.listen("8000",()=>{
    console.log("http://localhost:8000")
})