var http = require("http")

var users = [
  {
    id: 1,
    firstname: "test1",
    lastname: "test1",
    email: "test1@gmail.com"
  },
  {
    id: 2,
    firstname: "test2",
    lastname: "test2",
    email: "test2@gmail.com"
  },
  {
    id: 3,
    firstname: "test3",
    lastname: "test3",
    email: "test3@gmail.com"
  },
]

http.createServer(function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}
  else if (req.url === "/" && req.method === "GET") {
    res.writeHead(200)
    res.end("hello this is / request")
  } else if (req.url === "/user" && req.method === "GET") {
    res.writeHead(200)
    res.end(JSON.stringify(users))
  } else if (req.method === "DELETE") {
    const data = req.url.split("/")
    console.log(data[2])
    let filteredUsers = users.filter(function (item) {
      return item.id !== Number(data[2]);
    })
    users =[...filteredUsers]
    res.writeHead(200)
    res.end(JSON.stringify(filteredUsers))

  }
  else {
    res.writeHead(404)
    res.end("page not found")
  }
}).listen(4000)
