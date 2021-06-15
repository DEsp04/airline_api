const AirlineCompany = require("../models/airlineCompany");
const HomeCountry = require("../models/homeCountry");



const createAirline = async (req, res) => {
  try {
    const airline = await new AirlineCompany(req.body);
    await airline.save();
    return res.status(201).json({ airline });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllAirline = async (req, res) => {
  try {
    const airlines = await AirlineCompany.find();
    return res.status(200).json({ airlines });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAirlineById = async (req, res) => {
  try {
    const { id } = req.params;
    const airline = await AirlineCompany.findById(id);
    if (airline) {
      return res.status(200).json({ airline });
    }
    return res.status(404).send("airline not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateAirline = async (req, res) => {
  try {
    const { id } = req.params;
    await AirlineCompany.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, airline) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!airline) {
          res.status(500).send("airline not found")
        }
        return res.status(200).json(airline);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAirline = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AirlineCompany.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("airline deleted");
    }
    throw new Error("airline not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getArlinesByCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const countries = await HomeCountry.find({ car_brand: id });
    return res.status(200).json({ countries });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const createHomeCountry = async (req, res) => {
  try {
    const country = await new HomeCountry(req.body);
    await car.save();
    return res.status(201).json({ country });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getAllHomeCountry = async (req, res) => {
  try {
    const country = await HomeCountry.find();
    return res.status(200).json({ country });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const getHomeCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await HomeCountry.findById(id);
    if (car) {
      return res.status(200).json({ car });  
    }
    return res.status(404).send("country not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const updateHomeCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await HomeCountry.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, car) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!car) {
          res.status(500).send("country not found")
        }
        return res.status(200).json(car);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteHomeCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HomeCountry.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("country deleted");
    }
    throw new Error("country not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createAirline,
  getAllAirline,
  getAirlineById,
  updateAirline,
  deleteAirline,
  getArlinesByCountry,
  createHomeCountry,
  getAllHomeCountry,
  getHomeCountryById,
  updateHomeCountry,
  deleteHomeCountry
};