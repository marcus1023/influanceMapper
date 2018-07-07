
module.exports = {
  allUserAccounts: function(req, res, next){
    console.log('somthing works...')
    res.status(200).json(users)
  },
  connect: function(req, res, next){
    res.status(200).json(UserConnect)
  },
  checkUserPass: function(req, res, next){
    console.log(req.body)
    var email = req.body.email;
    var password = req.body.password;
    var accountNeeded;
    for(var i = 0; i < users.length; i++){
      if(email === users[i].email){
        var userId = users[i].id;
        accountNeeded = userInfo[userId];
        UserConnect.splice(0,1,accountNeeded)
        console.log(UserConnect)
      }
    }
    res.status(200).json(accountNeeded)
  },
}
