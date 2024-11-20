const express = require('express');
const app = express();
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')



app.use(morgan('dev'))
app.use(express.json());
app.use((req,res,next)=>{
  console.log("Hello fromm the middlwware ")
  next()
})
app.use((req,res,next)=>{
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)



const port = 8000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});