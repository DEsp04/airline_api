const AirlineCompany = require("../models/airlineCompany");
const HomeCountry = require("../models/homeCountry");



const createAirline = async (req, res) => {
  try {
    const brand = await new AirlineCompany(req.body);
    await brand.save();
    return res.status(201).json({ brand });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllAirline = async (req, res) => {
  try {
    const brands = await AirlineCompany.find();
    return res.status(200).json({ brands });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAirlineById = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await AirlineCompany.findById(id);
    if (brand) {
      return res.status(200).json({ brand });
    }
    return res.status(404).send("car brand not found");
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
      (err, brand) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!brand) {
          res.status(500).send("car brand not found")
        }
        return res.status(200).json(brand);
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
      return res.status(200).send("car brand deleted");
    }
    throw new Error("car brand not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const getArlinesByCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const cars = await HomeCountry.find({ car_brand: id });
    return res.status(200).json({ cars });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const createHomeCountry = async (req, res) => {
  try {
    const car = await new HomeCountry(req.body);
    await car.save();
    return res.status(201).json({ car });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getAllHomeCountry = async (req, res) => {
  try {
    const cars = await HomeCountry.find();
    return res.status(200).json({ cars });
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
    return res.status(404).send("car not found");
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
          res.status(500).send("car not found")
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
      return res.status(200).send("car deleted");
    }
    throw new Error("car not found");
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