const express = require('express');
const fs = require('fs');


const forAdd = async (req, res) => {
    try {
        const { name, phonenumber, Date,Purpose, PersontoMeet } = req.body
        let data2 = {
            name,
            phonenumber,
            Date,
            Purpose,
            PersontoMeet
        }
        console.log("helloooo");
        if (!fs.existsSync('data.json')) {
            fs.writeFileSync('data.json', '[]');
        }
        const data = fs.readFileSync('data.json');
        const json = JSON.parse(data);

        //   const newData = req.body;
        json.push(data2);

        const jsonData = JSON.stringify(json);
        fs.writeFileSync('data.json', jsonData);

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};



const forget = async (req, res) => {
    try {
        const data = fs.readFileSync('data.json');
        const json = JSON.parse(data);
        console.log(json)
        res.json(json);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



const forfirstPage = async (req, res) => {
    res.render('index.ejs')
  }

  const forsecondPage = async (req, res) => {
    res.render('home.ejs')
  }

module.exports = { forAdd, forget , forfirstPage , forsecondPage };
