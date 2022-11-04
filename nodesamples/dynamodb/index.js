var AWS = require("aws-sdk");

const aws_remote_config = {
  accessKeyId: "AKIAXNLLRF4MT4Y4H67M",
  secretAccessKey: "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",
  region: "us-west-2",
};

AWS.config.update(aws_remote_config);
const docClient = new AWS.DynamoDB.DocumentClient();
// const params = {
//   TableName: "test",
// };
// docClient.scan(params, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const insertparams = {
//   TableName: "test",
//   Item: {
//     pkid: "7",
//     skid: "17",
//     name: "seventeensampletwonew",
//     address: "newaddress",
//     newcolumn: "value",
//   },
// };
// docClient.put(insertparams,function (err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// const insertUserT = {
//   9567878207: {
//     "P#9567878207": {
//       unm: "Ajith Nambiaruveetil",
//       eml: "ajith.n@dhisigma.com",
//       sts: "ACTIVE",
//       id: "9567878207",
//     },
//     "R#0001": {
//       unm: "Ajith Nambiaruveetil",
//       eml: "ajith.n@dhisigma.com",
//       sts: "ACTIVE",
//       id: "0001",
//       rnm: "Sales Executive",
//     },
//     "T#1001": {
//       unm: "Ajith Nambiaruveetil",
//       eml: "ajith.n@dhisigma.com",
//       sts: "ACTIVE",
//       id: "0001",
//       tnm: "White Mart",
//     },
//   },
// };

// const insertUser = {
//   TableName: "usrs",
//   Item: {
//     PK: "9567878207",
//     SK: "R#0001",
//     unm: "Ajith Nambiaruveetil",
//     eml: "ajith.n@dhisigma.com",
//     sts: "ACTIVE",
//     id: "0001",
//     rnm: "Sales Executive",
//   },
// };
// docClient.put(insertUser, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

const params = {
  TableName: "usrs",
  FilterExpression: "#u_name = :value and #u_n=:nex",
  ExpressionAttributeNames: {
    "#u_name": "sts",
    "#u_n": "rnm",
  },
  ExpressionAttributeValues: {
    ":value": "ACTIVE",
    ":nex": "Sales Executive"
  },
};
docClient.scan(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
