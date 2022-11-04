const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

con.connect(() => {
  console.log("Connected");
});

app.post("/projectdetailfetch", function (req, res) {
  var pownerid = req.body.poid;
  console.log(pownerid);
  var project = [];
  var epic = [];
  var task = [];
  //var sql = "select tp.id,tp.txtName AS projectName,te.refAssignee as assignee,te.txtTitle AS Epic,te.id as Epicid ,te.txtStatus as Epicstatus,tt.txtTitle AS Task,tt.txtStatus AS taskstatus,tu.txtUserName as Projectowner FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId join tblusers tu on te.refAssignee=tu.id WHERE tp.refProjectOwner = '3';";

  // con.query("SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner ='" + pownerid + "';", function (err, result) {
  //console.log(result);
  project = [{ id: 1, txtName: "test", txtUserName: "ntest" }];

  // })
  // con.query("select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;", function (err, result) {
  //console.log(result);

  // epic = [...result];
  epic = [
    { id: 1, refProjectId: 1, refAssignee: "t", txtTitle: "t", txtStatus: "t" },
  ];

  // })
  // con.query("select id,refEpicid,txtTitle,txtStatus from tbltasks;", function (err, result) {
  // task = [...result];
  task = [{ id: 1, refEpicid: 1, txtTitle: "t", txtStatus: "sdf" }];
  //})
  taskobj = {};
  epicobj = {};
  projectobj = {};
  task.forEach((element) => {
    if (taskobj[element.refEpicid] == undefined)
      taskobj[element.refEpicid] = [element];
    else {
      temparray = taskobj[element.refEpicid];
      temparray.push(element);
    }
  });

  epic.forEach((element) => {
    if (epicobj[element.refProjectId] == undefined)
      epicobj[element.refProjectId] = [element];
    else {
      temparray1 = epicobj[element.refProjectId];
      temparray1.push(element);
    }
    element["task"] = taskobj[element.id];
  });

  project.forEach((element) => {
    if (projectobj[element.refProjectId] == undefined)
      projectobj[element.refProjectId] = [element];
    else {
      temparray = projectobj[element.refEpicid];
      temparray.push(element);
    }
    element["Epic"] = epicobj[element.id];
  });

  console.log(JSON.stringify(project));
  res.send(project);

  // })
});

app.post("/projectdetailfetchnew", function (req, res) {
  var pownerid = 4; //req.body.poid;
  console.log(pownerid);
  var project = [];
  var epic = [];
  var task = [];
  //var sql = "select tp.id,tp.txtName AS projectName,te.refAssignee as assignee,te.txtTitle AS Epic,te.id as Epicid ,te.txtStatus as Epicstatus,tt.txtTitle AS Task,tt.txtStatus AS taskstatus,tu.txtUserName as Projectowner FROM tblprojects tp JOIN tblepic te ON tp.id = te.refProjectId JOIN tbltasks tt ON tt.refEpicid = te.refProjectId join tblusers tu on te.refAssignee=tu.id WHERE tp.refProjectOwner = '3';";

  con.query(
    "SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner ='" +
      pownerid +
      "';",
    function (err, result) {
      //console.log(result);
      project = [...result];
      project = [
        { id: 1, txtName: "Project Management", txtUserName: "krishnan" },
      ];
      console.log(JSON.stringify(project));
      //   project = [{ id: 1, txtName: "test", txtUserName: "ntest" }];
    }
  );
  con.query(
    "select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;",
    function (err, result) {
      //console.log(result);

      epic = [...result];
      //   epic = [
      //     {
      //       id: 1,
      //       refProjectId: 1,
      //       refAssignee: "t",
      //       txtTitle: "t",
      //       txtStatus: "t",
      //     },
      //   ];
    }
  );
  con.query(
    "select id,refEpicid,txtTitle,txtStatus from tbltasks;",
    function (err, result) {
      task = [...result];
      //   task = [{ id: 1, refEpicid: 1, txtTitle: "t", txtStatus: "sdf" }];
      //})
      taskobj = {};
      epicobj = {};
      projectobj = {};
      task.forEach((element) => {
        if (taskobj[element.refEpicid] == undefined)
          taskobj[element.refEpicid] = [element];
        else {
          temparray = taskobj[element.refEpicid];
          temparray.push(element);
        }
      });

      epic.forEach((element) => {
        if (epicobj[element.refProjectId] == undefined)
          epicobj[element.refProjectId] = [element];
        else {
          temparray1 = epicobj[element.refProjectId];
          temparray1.push(element);
        }
        element["task"] = taskobj[element.id];
      });

      console.log("Project: " + JSON.stringify(project));
      project.forEach((element) => {
        console.log("Element: " + JSON.stringify(element));
        if (projectobj[element.refProjectId] == undefined)
          projectobj[element.refProjectId] = [element];
        else {
          temparray = projectobj[element.refEpicid];
          temparray.push(element);
        }
        element["Epic"] = epicobj[element.id];
      });

      //   console.log(JSON.stringify(project));
      res.send(project);
    }
  );
});

const fetchProjects = () => {
  con.query(
    "SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner =4",
    function (err, result) {
      return result;
    }
  );
};
const fetchEpics = () => {
  con.query(
    "select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;",
    function (err, result) {
      return result;
    }
  );
};
const fetchTask = () => {
  con.query(
    "select id,refEpicid,txtTitle,txtStatus from tbltasks",
    function (err, result) {
      return result;
    }
  );
};
// app.post("/fetchTest", async (req, res) => {

test();
async function test() {
  const project = new Promise((resolve, reject) => {
    con.query(
      "SELECT  tp.id,tp.txtName,tu.txtUserName FROM tblprojects tp join tblusers tu on tp.refProjectOwner=tu.id where refProjectOwner =4",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });
  
  const epic = new Promise((resolve, reject) => {
    con.query(
      "select id,refProjectId,refAssignee,txtTitle,txtStatus from tblepic;",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });

  const task = new Promise((resolve, reject) => {
    con.query(
      "select id,refEpicid,txtTitle,txtStatus from tbltasks",
      function (err, result) {
        if (err) resolve(err);
        resolve(result);
      }
    );
  });

  Promise.all([project, epic, task]).then((values) => {
    var project = values[0];
    var epic = values[1];
    var task = values[2];

    var taskobj = {};
    for (element of task) {
      if (taskobj[element.refEpicid] == undefined) {
        taskobj[element.refEpicid] = [element];
      } else {
        var temp = taskobj[element.refEpicid];
        taskobj[element.refEpicid] = [...temp, element];
      }
    }

    for (element of epic) {
        if (taskobj[element.id] == undefined) element.task = [];
        else {
          element.task = taskobj[element.id];
        }
    }

    var epicobj = {};
    for (element of epic) {
      if (epicobj[element.refProjectId] == undefined) {
        epicobj[element.refProjectId] = [element];
      } else {
        var temp = epicobj[element.refProjectId];
        epicobj[element.refProjectId] = [...temp, element];
      }
    }
    for (element of project) {
      if (epicobj[element.id] == undefined) element.epic = [];
      else {
        element.epic = epicobj[element.id];
      }
    }
    console.log(JSON.stringify(project));
  });
}
// );

app.listen(8000, () => {});
