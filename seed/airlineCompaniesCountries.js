const db = require("../db");
const AirlineCompany = require("../models/airlineCompany");
const HomeCountry = require("../models/homeCountry");

db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  const homeCountry1 = await new HomeCountry(
    {
      name: "Ireland",
      country_flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
    }
  );
  homeCountry1.save();

  const homeCountry2 = await new HomeCountry(
    {
      name: "Russia",
      country_flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
    }
  );
  homeCountry2.save();

  const homeCountry3 = await new HomeCountry(
    {
      name: "France",
      country_flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
    }
  );
  homeCountry3.save();

  const homeCountry4 = await new HomeCountry(
    {
      name: "South Korea",
      country_flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
    }
  );
  homeCountry4.save();

  const homeCountry5 = await new HomeCountry(
    {
      name: "Colombia",
      country_flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
    }
  );
  homeCountry5.save();
  

  const airlineCompanies = [
    {
      name: "Aer Lingus",
      IATA_code: "EL",
      website_link: "https://www.aerlingus.com",
      home_country:  homeCountry1._id,
      overview: "Founded in 1936, Aer Lingus (EI) is Ireland oldest airline and the national flag carrier. It is also the country's second-largest carrier after Ryanair. The company has operating bases at George Best Belfast City Airport (BHD), Cork Airport (ORK) and Shannon Airport (SNN), as well as a hub at Dublin Airport (DUB). It flies to more than 80 destinations across Europe, as well as Turkey, Morocco and the United States. Aer Lingus also has codeshare agreements with seven airlines in the Oneworld, Star Alliance and SkyTeam alliances. Its fleet of 48 aircraft includes planes with both all-Economy Class configurations as well as Business Class and Economy class cabins.",
    },
    {
      name: "Aeroflot",
      IATA_code: "SU",
      website_link: "http://www.aeroflot.com/ru-en",
      home_country: homeCountry2._id,
      overview: "A member of the SkyTeam alliance, Aeroflot (SU) is Russia's flag carrier and the country's largest airline. Founded in 1923, it is also one of the world's oldest airlines. Operating from a hub at Sheremetyevo International Airport (SVO), Aeroflot flies to about 130 destinations. This includes dozens of domestic destinations, as well as airports elsewhere in Europe, and in Asia, Africa, the Middle East, North America and the Caribbean. It also has codeshare agreements with more than 25 other carriers. Aeroflot's fleet of 161 planes include a variety of one cabin (Economy Class), two cabin (Business Class and Economy Class, or Premium Economy Class and Economy Class) and three cabin (Business Class, Premium Economy Class and Economy Class) configurations.",
    },
    {
      name: "AirFrance",
      IATA_code: "AF",
      website_link: "https://www.airfrance.us/",
      home_country: homeCountry3._id,
      overview: "French airline Air France (AF) is the country's flag carrier. Operating from hubs at Paris-Charles de Gaulle Airport (CDG) and Paris Orly Airport (ORY), the airline flies to more than 200 destinations. This includes about 35 domestic airports and more than 90 countries in Europe, Africa, Asia, the Middle East, North America and South America. A member of the SkyTeam alliance, Air France also has codeshare agreements with about 30 other airlines. Its fleet of 234 passenger aircraft consists of both Airbus and Boeing planes with a variety of cabin configurations. Although cabin classes vary by route and plane, the airline offers First Class, Business Class, Premium Economy Class and Economy Class cabins.",
    },
    {
      name: "AirFrance",
      IATA_code: "AF",
      website_link: "https://flyasiana.com/",
      home_country: homeCountry4._id,
      overview: "Formerly known as Seoul Airlines, Asiana Airlines (OZ) was founded in 1988 and is one of South Korea's two major carriers. It is a member of the Star Alliance, and a major owner of low-cost carrier Air Busan (BX). The airline operates from hubs at Seoul Gimpo International Airport (GMP) and Seoul Incheon International Airport (ICN). Asiana flies to about 110 destinations in Asia, Europe, Oceania and North America. In addition to Star Alliance members, the airline has codeshare agreements with about a dozen other carriers. Its fleet of 73 passenger aircraft includes planes configured with a single Economy Class cabin, as well as two- and three-cabin configurations with First Class and Business Class cabins.",
    },
    {
      name: "AirFrance",
      IATA_code: "AF",
      website_link: "https://flyasiana.com/",
      home_country: homeCountry4._id,
      overview: "Formerly known as Seoul Airlines, Asiana Airlines (OZ) was founded in 1988 and is one of South Korea's two major carriers. It is a member of the Star Alliance, and a major owner of low-cost carrier Air Busan (BX). The airline operates from hubs at Seoul Gimpo International Airport (GMP) and Seoul Incheon International Airport (ICN). Asiana flies to about 110 destinations in Asia, Europe, Oceania and North America. In addition to Star Alliance members, the airline has codeshare agreements with about a dozen other carriers. Its fleet of 73 passenger aircraft includes planes configured with a single Economy Class cabin, as well as two- and three-cabin configurations with First Class and Business Class cabins.",
    },
    {
      name: "Avianca Brasil",
      IATA_code: "Avianca",
      website_link: "http://www.avianca.com/us/en.html",
      home_country: homeCountry5._id,
      overview: "Colombia's national airline and flag carrier, Avianca (AV) was founded in 1919 as SCADTA. It is the country's largest airline and the second largest in North and South America. The carrier operates a primary hub at El Dorado International Airport (BOG) and secondary hubs at El Salvador International Airport (SAL) and Jorge Chávez International Airport (LIM). It flies to about 90 destinations in 22 countries in South America, North America and Europe. The airline has a number of subsidiaries, including Avianca Brazil, Avianca Costa Rica, Avianca Ecuador, Avianca El Salvador, Avianca Guatemala, Avianca Honduras, Avianca Peru and Sansa.",
    },
  ]

  await AirlineCompany.insertMany(airlineCompanies);

  console.log("created all aireline companies")

};



const run = async () => {
  await main();
  db.close();
}

run();