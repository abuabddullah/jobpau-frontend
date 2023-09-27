# Tutorial from JOBPAU-serverStarterTemplate

> tutorial link :
>
> [](https://github.com/abuabddullah/jobPortalBackend/blob/main/README.MD)

# Backend Environment & Database connection

> **steps:**
>
> 1. backend এর জন্এয কটা fresh ফোল্ডার **jobpau-server** বানিয়ে তা **vs code** এ open করি
>    1. D:\Black Belt Coder\Professional Peojcts\JOBPAU\*\*jobpau-server\*\*
> 2. installation করি নিচের code এর সাহায্যে (এখানে index.js == server.js of **6PP**)
>
>    ```jsx
>    npm init --y
>    ```
>
> 3. **jobpau-server** ফোল্ডার এ **index.js+app.js** নামের 2 টা **file বানাতে হবে**
> 4. 1. আবারো terminal দিয়ে "**jobpau-server**" folder এ npm দিয়ে **express, mongoose, dotenv, cors, nodemon** install করতে হবে
>
>    ```jsx
>    npm i express mongoose dotenv cors nodemon
>    ```
>
> 5. এবার "**jobpau-server**/**app.js**" file এ **express, cors** কে import করে তা দিয়ে **app** বানিয়ে **_app.use()_** method দিয়ে **_cors() & express.json()_** function কে invoke করে তারপর app কে এই file থেকে **export** করে দিয়ে হবে যাতে অন্য file থেকেও এই app টার access পাওয়া যায়
>    1. পাশাপাশি এখানে **_NOT FOUND_** route বানিয়ে দেয়া হয়েছে যাতে যেকোন ভুল লিঙ্ক এ **req** দিলে যাতে **error** না খেয়ে একটা meaningfull message আসে
>
>       ```jsx
>       const express = require("express");
>       const cors = require("cors");
>       const app = express();
>       app.use(cors());
>       app.use(express.json());
>
>       // Not found route
>       app.all("*", (req, res) => {
>         res.send("NO route found.");
>       });
>       module.exports = app;
>       ```
> 6. এবার **jobpau-server** folder এ একটা config নামের folder বানাতে হবে "**jobpau-server**/**config**" তার ভিতরে একটা **_.env_** file বানাতে হবে "**jobpau-server**/config/**config.env**" এবং এই file এ একটা **_PORT_** নামের environment variable বানাতে হবে
>
>    ```jsx
>    PORT = 5000;
>    ```
>
> 7. এবার "**jobpau-server**/**index.js**" file এ **app, dotenv** কে import করে নিতে হবে, তারপর **_dotenv_** কে file এর সাথে connect করে নিতে হবে (_line: 4_) এবং **_app.listen()_** method দিয়ে একটা server establish করতে হবেএবার **jobpau-server** folder এ একটা config নামের folder বানাতে হবে "**jobpau-server**/**config**" তার ভিতরে একটা **_.env_** file বানাতে হবে "**jobpau-server**/config/**config.env**" এবং এই file এ একটা **_PORT_** নামের environment variable বানাতে হবে
>    1. { path: "config/config.env" } correct
>    2. { path: "/config/config.env" } incorrect
>
>       ```jsx
>       const app = require("./app");
>       const dotenv = require("dotenv");
>       //config
>       dotenv.config({ path: "config/config.env" });
>       app.listen(process.env.PORT, () => {
>         console.log(
>           `Server is working on http://localhost:${process.env.PORT}`
>         );
>       });
>       ```
> 8. 1. এবার nodemon দিয়ে server কে run করার জন্য **_start & start-dev_** script add করতে হবে "**jobpau-server**/**package.json**" file এ
>
>    ```jsx
>    {
>      "name": "jobpau-server",
>      "version": "1.0.0",
>      "description": "",
>      "main": "index.js",
>      "scripts": {
>        "start": "node index.js",
>        "dev": "nodemon index.js",
>        "test": "echo \"Error: no test specified\" && exit 1"
>      },
>      "keywords": [],
>      "author": "",
>      "license": "ISC",
>      "dependencies": {
>        "cors": "^2.8.5",
>        "dotenv": "^16.3.1",
>        "express": "^4.18.2",
>        "mongoose": "^7.5.2",
>        "nodemon": "^3.0.1"
>      }
>    }
>    ```
>
> 9. 1. এবার **nodemon** দিয়ে project run করার জন্য terminal দিয়ে **"jobpau-server"** folder এ নিচের command দিতে হবে
>    1. যদি port **5000** দেখায় তাহলে server ঠিক আছে port **undefined** দেখা **wrong**
>
>       ```jsx
>       npm run dev
>       ```
>
>       ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9e2ba8-83b7-45af-9811-f07fb6a7a7e2/61c20c9d-f54b-49f7-8604-059df5a21824/Untitled.png)

# Trial Backend Route without DB Connected

> **Steps:**
>
> 1. **jobpau-server** folder এ দুটা নতুন folder বানাতে হবে "**jobpau-server**/**controllers/v1**" & "**jobpau-server**/**routes/v1**" তারপর **controllers** folder এ **users** এর জন্য একটা file বানাতে হবে "**jobpau-server**/controllers/v1/**testController.js**" ।
>    1. _এই **contoller** file গুলো মূলত **API** এর **async** function কে hold করে_
> 2. 1. **testController _API_** এর জন্য **_testController_** function বানাতে হবে যা **inline exported** হবে
>
>    ```jsx
>    // test Route are ok to work or not
>    exports.testController = (req, res) => {
>      res.status(200).json({
>        success: true,
>        message: "test route is working",
>      });
>    };
>    ```
>
> 3. এবার "**jobpau-server**/**routes/v1**" folder এ **_testController_** function কে **_get request দিয়ে routing_** করার জন্য জন্য একটা file বানাতে হবে "**jobpau-server**/routes/v1/**testRoutes.js**"
> 4. 1. "**jobpau-server**/routes/v1**testRoutes.js**" file এ **express, _testController_** কে import করে **express** এর সাহায্যে **_express.Router()_** method দিয়ে **router** create করতে হবে, এরপর **_router.route().get()_** method দিয়ে প্রতিটা **API requests** এর aginst এ route বানাতে হবে এবং সবার নিচে **router** কে exports করে দিতে হবে ।
>    1. _এখানে মূলত সকল **API**s এর জন্য যে http req আছে যেমন **.get, .post, .put, .delete** আছে সেগুলোকে **pathName** অনুযায়ি line by line declare করা হয় এবং **pathName** যদি same হয় তাহলে সবগুলো request কে একই line এও declare করা যায়_
>
>       ```jsx
>       const express = require("express");
>       const { testController } = require("../controllers/v1/testController");
>
>       const router = express.Router();
>
>       router.route("/test").get(testController);
>
>       module.exports = router;
>       ```
> 5. 1. এবার "**jobpau-server**/**app.js**" file এ **testRoutes** variable কে import করে তারপর **_app.use()_** method দিয়ে **commonURL & usersRoutes** সহ invoke করতে হবে।
>    1. _এই **commonURL** সব সময় url এর সাথে fixed থাকে_
>    1. এখানে **commonURL** হচ্ছে **"_/api/v1_"**
> 6. http://localhost:5000/api/v1/test _থাকে link এ ঢুকে আমাদের api ঠিক আছে কিনা চেক করে নিব_
>    1. যদি api ঠিক থাকে তাহলে নিচের মত দেখাবে
>
>       ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9e2ba8-83b7-45af-9811-f07fb6a7a7e2/f20e0203-0f49-48cc-bc6e-fb36ebb10e4e/Untitled.png)

# **Connect Database** MongoDB Compass

> **steps:**
>
> 1. MongoDB Compass open করে তা connect করতে হবে
>    1. **mongodb://localhost:27017/** এই link এই connect করতে হবে শেষে কোন **“/jobpau”** দেয়া যাবে না
>
>       ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9e2ba8-83b7-45af-9811-f07fb6a7a7e2/a3f9cdb0-3c96-4b00-bc8a-18c7144cae72/Untitled.png)
> 2. প্রথমে "**jobpau-server**/config/**config.env**" file এ **_DB_URI_** নামের আরো একটা environment variable বানাতে হবে
>    1. এই **_DB_URI_** টা **MongoCompass** এর জন্য কেবল অর্থাৎ যখন direct **mongoDB** তে **database connenct** করা হবে তখন কিন্তু এইটাকে change করে **mongoDB** database এর **_DB_URI_** ব্যবহার করতে হবে
>
>       ```jsx
>       PORT = 5000;
>       DB_URI = "mongodb://localhost:27017/jobpau";
>       ```
> 3. Database connect করার জন্য "**jobpau-server**/config/**database.js**" নামের একটা file বানাতে হবে, তারপর সেখানে **mongoose** কে import করে নিতে হবে, এবার **connectDatabase** function এ নিচে দেখানো code এর মত করে **database connect** করে সবার নিচে **connectDatabase** কে এখান থেকে export করে দিতে হবে
>    1. তবে মনে রাখতে হবে বর্তমান version এ **_useCreateIndex: true_** লিখলে **error\* দেয় তাই এই line টাকে **comment out\*\* করে দিতে হবে
>
>       ```jsx
>       const mongoose = require("mongoose");
>       const connectDatabase = () => {
>         mongoose
>           .connect(process.env.DB_URI, {
>             useNewUrlParser: true,
>             useUnifiedTopology: true,
>             family: 4,
>           })
>           .then((data) => {
>             console.log(
>               `Mongodb connected with server: ${data.connection.host}`
>             );
>           })
>           .catch((err) => {
>             console.log("error:", err);
>           });
>       };
>       module.exports = connectDatabase;
>       ```
> 4. এবার "**jobpau-server**/**index.js**" file এ **_connectDatabase_** function কে import করে invoke করে দিতে হবে
>
>    ```jsx
>    const app = require("./app");
>    const dotenv = require("dotenv");
>    const connectDatabase = require("./config/database");
>    //config
>    dotenv.config({ path: "config/config.env" });
>
>    // Connecting to database
>    connectDatabase();
>
>    app.listen(process.env.PORT, () => {
>      console.log(`Server is working on http://localhost:${process.env.PORT}`);
>    });
>    ```

# Backend errorhandlling with node.js in built Error method

> **Handle Errors for : Wrong Mongodb Id, async error handleing, Mongoose duplicate key error, Wrong JWT, JWT EXPIRE error, http status code error**
>
> ## 1. **Handling Wrong Mongodb Id error (get ,delete, update product by id)**
>
> **steps:**
>
> 1. এবার backend folder এর ভিতরে "**jobpau-server**/**utils**" folder বানিয়ে তার ভিতরে একটা file বানাতে হবে "**jobpau-server**/**utils**/**errorhander.js**" নামের
> 2. এবার এখানে আমরা একটা js class generate করব **ErrorHandler** নামের যা inherited হবে node.js এর default **_Error Class_** feature থেকে , এরপর সবার নিচ থেকে **_ErrorHandler_** class টাকে export করে দিবা যাতে অন্যসব file থেকে এর সাহায্যে আমরা প্রয়োজনিয় error generate করতে পারি।
>    1. **ErrorHandler** class এর সাহায্যে আমরা error কে invoke করার সময় যে **agrument** হিসেবে **message** & **statusCode** পাঠাব **constructor** তা recieve করবে।
>    2. **super** এর সাহায্যে আমরা **parent class অর্থাত "Error"** Class এর যে error-message show করার যে default function আছে তাকে **child-class *ErrorHandler*** এ **inherrit** করেছি
>    3. এখানে **super** বলতে মূলত **parent class(Error)** এর constructor কে বুঝায়
>    4. **captureStackTrace** হচ্ছে **"Error"** Class এর default function যাকে আমরা **inherrit** করেছি **_ErrorHandler_** এ। এই **captureStackTrace** function ই মুলত কোন error আসলে তা আমাদের **stack** এ trace করে দেয় । এটা দুটা parameter নেয় যা হচ্ছে,
>
>       1. **child class নিজেই এক্ষেত্রে "ErrorHandler" (অর্থাৎ this)** এবং
>       2. **child class এর constructor (অর্থাৎ this.constructor)**
>
>       ```jsx
>       class ErrorHandler extends Error {
>         constructor(message, statusCode) {
>           super(message);
>           this.statusCode = statusCode;
>           Error.captureStackTrace(this, this.constructor);
>         }
>       }
>       module.exports = ErrorHandler;
>       ```
> 3. এবার এই erro কে conditionally implement করার জন্য আমাদের একটা **middleware** বানাতে হবে এজন্য, **jobpau-server** folder এর ভিতরে "**jobpau-server**/**middleware**" folder বানিয়ে তার ভিতরে একটা file বানাতে হবে "**jobpau-server**/middleware/**error.js**" নামের
> 4. এই "**jobpau-server**/middleware/**error.js**" file এ **_ErrorHandler_** কে import করি নিব , তারপর **module.exports** করব একটা **callback** function কে যা চারটি **parameter** নিবে **_err, req, res, next_**
>    1. এটা মূলত **express.js** এর default error handling method , extra হিসেবে just কিছু **condition** implement করা হয়েছে
>
>       ```jsx
>       const errorMiddleware = (err, req, res, next) => {
>         err.statusCode = err.statusCode || 500;
>         err.message = err.message || "Internal Server Error";
>
>         res.status(err.statusCode).json({
>           success: false,
>           message: err.message,
>         });
>       };
>       module.exports = errorMiddleware;
>       ```
> 5. এবার "**jobpau-server**/**app.js**" file এ এই **_errorMiddleware_** কে import করে নিব, তারপর **_app.use()_** method এর সাহায্যে সর্ব শেষ middleware হিসেবে **_errorMiddleware_** কে রাখব
>
>    1. এটাই মূলত নিয়ম যে, **errorMiddleware** সবার last এ invoke করা থাকে যাতে অন্যকোন একটা middleware এ কোন সমস্যা হলে programm jump করা এই last middleware এ hit করবে তারপর error show করবে
>
>       ```jsx
>       const express = require("express");
>       const cors = require("cors");
>       const errorMiddleware = require("./middleware/error");
>
>       const app = express();
>
>       app.use(cors());
>       app.use(express.json());
>
>       //Route imports
>       const testRouter = require("./routes/v1/testRoutes");
>
>       //invoking routes
>       app.use("/api/v1", testRouter);
>
>       // Not found route
>       app.all("*", (req, res) => {
>         res.send("NO route found.");
>       });
>
>       // Middleware for Errors
>       app.use(errorMiddleware);
>
>       module.exports = app;
>       ```
>
>    ### testing : **Handling Wrong Mongodb Id error**
>
> 6. এবার **postman software** এ test করব **_mongDb id_** last এর digit 9 কে অন্যকিছু দিয়ে replace করব
>
>    https://camo.githubusercontent.com/0e0bf239c59bcd3d05ce3d011e9c970de8ef85ff00bae1a5b3a92461c374b9b2/68747470733a2f2f692e6962622e636f2f394754664a63642f7863762e706e67
>
> ## 2. Handling asynchronus error
>
> **steps:**
>
> 1. এবার **_asynch error_** কে handle করার জন্য আরো একটা middleware বানাতে হবে **jobpau-server**/middleware/**catchAsyncErrorsMiddleware.js** নামের
>
>    1. এই **middleware** টা মূলত **parameter** হিসেবে একটা **function** কে recieve করবে তারপর javaScript এর default class **Promise** এর **Promise.resolve().catch()** method এর সাহায্যে যদি কোন error না থাকে তাহলে **try** করবে আর থাকলে **catch** করে **next** করবে
>
>    ```jsx
>    const catchAsyncErrorsMiddleware = (theFunc) => (req, res, next) => {
>      Promise.resolve(theFunc(req, res, next)).catch(next);
>    };
>    module.exports = catchAsyncErrorsMiddleware;
>    ```
>
> 2. এবার "**jobpau-server\controllers\v1\testController.js**" file এ **catchAsyncErrorsMiddleware** কে import করে নিয়ে তারপর সবগুলো asynchronus function এর যেখানে আমরা **_asynch()_** function use করেছিলাম তাকে **_catchAsyncErrorsMiddleware_** দিয়ে নিচের মত মুড়িয়ে দিব,
>
>    1. **catchAsyncErrorsMiddleware(async(req,res,next){})**
>
>    ```jsx
>    const catchAsyncErrorsMiddleware = require("../../middleware/catchAsyncErrorsMiddleware");
>
>    // test Route are ok to work or not
>    exports.testController = catchAsyncErrorsMiddleware(
>      async (req, res, next) => {
>        res.status(200).json({
>          success: true,
>          message: "test route is working",
>        });
>      }
>    );
>    ```
>
>    ### testing : Handling asynchronus error
>
> 3. এবার **postman software** এ test করব কোন একটা post request এর জন্য
>
>    https://camo.githubusercontent.com/a12e94e182f0e62a70cb25abb832714f2132b44f1dc41f190767c7d1ff1581c3/68747470733a2f2f692e6962622e636f2f4c70516e46506a2f7863762e706e67
>
> ## 3. Handling unhadled promise rejection error
>
> > **_unhadled promise rejection_** error বলতে , কোন কারনে link এ কোন spelling mistake হয়ে গেলে যাতে server forcedly shut down হয়ে যায়.
>
> সেই কাজ করার জন্য **unhadled promise rejection error** কে অবশ্যি **jobpau-server**/**index.js** file এর সবার নিচে just **export** করার আগে define করতে হয়
>
> >
>
> **steps:**
>
> 1. 1. এজন্য **jobpau-server**/**index.js** file এ গিয়ে প্রথমে **_app.listen()_** কে একটা **_server_** নামের varibale এ রাখব, তারপর **_process.on()_** method এ **_unhandledRejection_** event use করে একটা **callback** function input দিব যা প্রয়োজনিয় message **console** করবে, **server** close করবে, **process** exit করবে
>    1. **server.close()** method ও একটা **callback** function recieve করবে যেখানে **process.exit()** method invoke
>
>       ```jsx
>       const app = require("./app");
>       const dotenv = require("dotenv");
>       const connectDatabase = require("./config/database");
>       //config
>       dotenv.config({ path: "config/config.env" });
>
>       // Connecting to database
>       connectDatabase();
>
>       const server = app.listen(process.env.PORT, () => {
>         console.log(
>           `Server is working on http://localhost:${process.env.PORT}`
>         );
>       });
>
>       // unHandled promise rejection
>       process.on("unhandledRejection", (err, promise) => {
>         console.log(`Error: ${err.message}`);
>         console.log(
>           `Shutting down the server due to Unhandled Promise Rejection`
>         );
>         server.close(() => {
>           process.exit(1);
>         });
>       });
>       ```
>
>    ### testing : Handling unhadled promise rejection error
>
> 2. এবার **terminal** এ test করার জন্য আগে কিছু error create করতে হবে তাই **jobpau-server**/config/**database.js** file এর **_.catch_()** method কে comment out করে দিব যাতে error auto catch হয় এ solve না হয়ে যায় এবং
>
>    ```jsx
>    const mongoose = require("mongoose");
>    const connectDatabase = () => {
>      mongoose
>        .connect(process.env.DB_URI, {
>          useNewUrlParser: true,
>          useUnifiedTopology: true,
>          family: 4,
>        })
>        .then((data) => {
>          console.log(`Mongodb connected with server: ${data.connection.host}`);
>        })
>    /*
>        .catch((err) => {
>          console.log("error:", err);
>        });
>    };
>    */
>    module.exports = connectDatabase;
>    ```
>
> 3. এবং ExpressBoilerTemplate/backend/config/**config.env** file এর **_DB_URI_** variable এর value নষট করে দিব দেখব **terminal** এ error আসবে
>
>    ```jsx
>    PORT = 5000;
>    DB_URI = "mongodb1234://localhost:27017/jobpau";
>    ```
>
> 4. এবার **postman software** এ test করব কোন একটা post request এর জন্য
>
>    https://camo.githubusercontent.com/a12e94e182f0e62a70cb25abb832714f2132b44f1dc41f190767c7d1ff1581c3/68747470733a2f2f692e6962622e636f2f4c70516e46506a2f7863762e706e67
>
> 5. test success হলে again **jobpau-server\config\config.env** file এর **_DB_URI_** variable এর value ঠিক করে দিব এবং **jobpau-server\config\database.js** এর **.catch()** কে uncomment করে আগের মত ঠিক করে দিব
>    1. **jobpau-server\config\config.env**
>
>       ```jsx
>       PORT = 5000;
>       DB_URI = "mongodb://localhost:27017/jobpau";
>       ```
>
>    2. **jobpau-server\config\database.js**
>
>       ```jsx
>       const mongoose = require("mongoose");
>       const connectDatabase = () => {
>         mongoose
>           .connect(process.env.DB_URI, {
>             useNewUrlParser: true,
>             useUnifiedTopology: true,
>             family: 4,
>           })
>           .then((data) => {
>             console.log(
>               `Mongodb connected with server: ${data.connection.host}`
>             );
>           })
>           .catch((err) => {
>             console.log("error:", err);
>           });
>       };
>       module.exports = connectDatabase;
>       ```
>
> ## 4. Handling uncaught error
>
> > **_uncaught_** error বলতে , যদি project এ কোণ **undefined variable** থাকার কারনে যেই error টা দেয় তাকে handle করতে হবে
>
> **_uncaught_** কে অবশ্যই **jobpau-server/index.js** file এর সবার উপরে define করতে হয়
>
> >
>
> **steps:**
>
> 1. 1. এজন্য **jobpau-server/index.js**  file এ গিয়ে একদম শুরুতে **_process.on()_** method এ **_uncaughtException_** event use করে একটা **callback** function input দিব যা প্রয়োজনিয় message **console** করবে, তারপর **process** exit করবে
>    1. **server.close()** method কে invoke করা লাগবে না
>
>    ```jsx
>    const app = require("./app");
>    const dotenv = require("dotenv");
>    const connectDatabase = require("./config/database");
>
>    // Handling Uncaught Exception
>    process.on("uncaughtException", (err) => {
>      console.log(`Error: ${err.message}`);
>      console.log(`Shutting down the server due to Uncaught Exception`);
>      process.exit(1);
>    });
>
>    //config
>    dotenv.config({ path: "config/config.env" });
>
>    // Connecting to database
>    connectDatabase();
>
>    const server = app.listen(process.env.PORT, () => {
>      console.log(`Server is working on http://localhost:${process.env.PORT}`);
>    });
>
>    // unHandled promise rejection
>    process.on("unhandledRejection", (err, promise) => {
>      console.log(`Error: ${err.message}`);
>      console.log(
>        `Shutting down the server due to Unhandled Promise Rejection`
>      );
>      server.close(() => {
>        process.exit(1);
>      });
>    });
>    ```
>
>    ### testing : Handling uncaught error
>
> 2. এবার **terminal** এ test করার জন্য আগে কিছু error create করতে হবে তাই **jobpau-server/index.js** file এ কোণ undefined variable কে **console** করে দেখা যেতে পারে
>
>    ```jsx
>    const app = require("./app");
>    const dotenv = require("dotenv");
>    const connectDatabase = require("./config/database");
>
>    // Handling Uncaught Exception
>    process.on("uncaughtException", (err) => {
>      console.log(`Error: ${err.message}`);
>      console.log(`Shutting down the server due to Uncaught Exception`);
>      process.exit(1);
>    });
>    console.log(undefinedVariable);
>    //config
>    dotenv.config({ path: "config/config.env" });
>
>    // Connecting to database
>    connectDatabase();
>
>    const server = app.listen(process.env.PORT, () => {
>      console.log(`Server is working on http://localhost:${process.env.PORT}`);
>    });
>
>    // unHandled promise rejection
>    process.on("unhandledRejection", (err, promise) => {
>      console.log(`Error: ${err.message}`);
>      console.log(
>        `Shutting down the server due to Unhandled Promise Rejection`
>      );
>      server.close(() => {
>        process.exit(1);
>      });
>    });
>    ```
>
>    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9e2ba8-83b7-45af-9811-f07fb6a7a7e2/6ccf12a9-d803-4bf9-886d-028c5e95db17/Untitled.png)
>
> 3. test success হলে again **jobpau-server/index.js** এর \*\*\*\*কে uncomment করে আগের মত ঠিক করে দিব
>
>    ```jsx
>    const app = require("./app");
>    const dotenv = require("dotenv");
>    const connectDatabase = require("./config/database");
>
>    // Handling Uncaught Exception
>    process.on("uncaughtException", (err) => {
>      console.log(`Error: ${err.message}`);
>      console.log(`Shutting down the server due to Uncaught Exception`);
>      process.exit(1);
>    });
>    // console.log(undefinedVariable)
>    //config
>    dotenv.config({ path: "config/config.env" });
>
>    // Connecting to database
>    connectDatabase();
>
>    const server = app.listen(process.env.PORT, () => {
>      console.log(`Server is working on http://localhost:${process.env.PORT}`);
>    });
>
>    // unHandled promise rejection
>    process.on("unhandledRejection", (err, promise) => {
>      console.log(`Error: ${err.message}`);
>      console.log(
>        `Shutting down the server due to Unhandled Promise Rejection`
>      );
>      server.close(() => {
>        process.exit(1);
>      });
>    });
>    ```
>
> ## 5. Handling castError error
>
> > **_castError_** error বলতে , যদি mongoDB তে **_GET req_** করার সময় **id** এর জায়গায় অন্য কিছু দেইয় অথবা **id** shortend হয়ে যায় তখন এই error দেয়
>
> **steps:**
>
> 1. এজন্য **jobpau-server**/middleware/**error.js** file এ গিয়ে **_errorMiddleware_** এ **_err.stack_** কে console করে সেখান থেকে **_err.name_** এর উপরে condtion apply করে এই error টা handle করব
>
>    ```jsx
>    const errorMiddleware = (err, req, res, next) => {
>      err.statusCode = err.statusCode || 500;
>      err.message = err.message || "Internal Server Error";
>
>      // console.log(err.stack);
>      // Wrong Mongodb Id error
>      if (err.name === "CastError") {
>        const message = `Resource not found. Invalid: ${err.path}`;
>        err = new ErrorHandler(message, 400);
>      }
>
>      res.status(err.statusCode).json({
>        success: false,
>        message: err.message,
>      });
>    };
>    module.exports = errorMiddleware;
>    ```
>
>    ### testing : Handling castError error
>
> 2. post man এ গিয়ে **_GET req_** করার সময় **id** এর জায়গায় অন্য কিছু দেইয় অথবা **id** short করে দিই
>
>    https://camo.githubusercontent.com/5201f585913616f282796cdf0283332ecbe2d6d411ee24d4acbf2e5a9537c7cb/68747470733a2f2f692e6962622e636f2f7076785a4a59672f7863762e706e67

# **[Creating Standard Model,Controller,Route with all errorhandlers](https://github.com/abuabddullah/jobPortalBackend/tree/main#creating-standard-modelcontrollerroute-with-all-errorhandlers)**

>

# **[Deploy in MongoDB](https://github.com/abuabddullah/jobPortalBackend/tree/main#deploy-in-mongodb)**
