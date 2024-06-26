const mentorRouter = require('./Routers/MentorRouter')
const studentRouter = require('./Routers/StudentRouter')

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());  /* To avoid cross origin error */

app.use(express.json());  

const PORT = process.env.PORT || 4100;
const URL = process.env.MONGODB_URL;

const mongoose = require('mongoose');

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
const connection = mongoose.connection;
connection.on('open',() => console.log("MongoDB Connected"));



app.get('/',(req,res) => res.send(`
<div>
<p> In Home Page </p>
<p>To get all mentor List - https://assign-mentor-3vlk.onrender.com/Mentors </p>
<br>
<p>To get all Students List - https://assign-mentor-3vlk.onrender.com/Students </p>
<br>
<p>To get mentor based on ID - https://assign-mentor-3vlk.onrender.comMentors/get-mentor/:id<p>
 

<p> To test Post and update - visit Frontend page of the application - https://github.com/jaganarasu/assign-mentor </p>
</div>
`))

app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))
