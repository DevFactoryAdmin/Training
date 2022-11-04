var a={"username":"test", "password":"pwd"};
//console.log(a.password);//correct

var b=[{"username":"test", "password":"pwd"}];
//console.log(b.password);//wrong
//console.log(1.password);//wrong
//console.log(b[0].password)//correct

var c=[{"username":"test"},{"password":"pwd"}];
//console.log(c[1].password)//correct

var d={"users":[{"id":"1", "name":"test", "password":"pwd"}]}
//console.log(d.users[0].password)


