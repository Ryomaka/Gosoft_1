const connection = require("../services/database");

 const getStocks =async (req, res)=>{
    const barcode = req.params.barcode
    const [stocks] = await connection.query('select * from stocks where barcode =?',[barcode]);
    // const [stocks] = await connection.query('select * from stocks ');
    // console.log(stocks);
    res.status(200).send(stocks);
 }

 const postStocks = async (req, res)=>{
  


    const array = req.body;

   const string = `${array.map(data => 
                                
     `(${data.num},${data .id},'${data.name}',${data.qty},${data.price},${data.sum})`).join(',')}`;
    
    console.log(string);    

       await connection.query(`INSERT INTO shopping_cart (receipNo, productNo, productName, qty, price, priceSum) VALUES ${string}`);

     
      res.status(200).send('stocks1');
   }



module.exports = {
    getStocks,
    postStocks
}