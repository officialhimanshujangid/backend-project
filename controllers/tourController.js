const fs = require('fs')
const tours = JSON.parse(
    

    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
  exports.getAllTours =   (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
      status: 'success',
      requestedAt : req.requestTime,
      results: tours.length,
      data: {
       tours
      },
    });
  }
  exports. getTour =  (req, res) => {
    const id = req.params.id * 1
    
      if(id > tours.length){
      return res.status(404).json({
        status:"fail",
        message : 'Innvalid Id'
      })
    }
    
    const tour = tours.find(el => el.id === id)
      res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
          ...tour
        }
      });
    }
    exports. createTour =  (req, res) => {
      const newId = tours[tours.length - 1].id + 1;
      const newTour = Object.assign({ id: newId }, req.body);
      tours.push(newTour);
    
      fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
          res.status(201).json({
            status: 'success',
            data: {
              tour: newTour,
            },
          });
        }
      );
    }
    exports. updateTour = (req,res)=>{
      if(req.params.id * 1 > tours.length){
        return res.status(404).json({
          status:"fail",
          message : 'Invalid Id'
        })
      }
      res.status(200).json({
        status:"success",
        data:{
          tours :"updated Data"
        }
      })
    }
    
    exports. deleteTour = (req,res)=>{
      if(req.params.id * 1 > tours.length){
        return res.status(404).json({
          status:"fail",
          message : 'Invalid Id'
        })
      }
      res.status(204).json({
        status:"success",
        data:'delete'
      })
    }