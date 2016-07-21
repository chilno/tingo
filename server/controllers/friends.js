console.log('-------------------friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
    	if(err){
    		console.log('blablablaaa');
    	}else{
    		res.json(friends);
    	}
    })
  };
  this.create = function(req,res){
    console.log('made it in server friends controller', req.body);
    var friend = new Friend(req.body);
    friend.save(function(err){
    	if(err){
    		console.log("Ooops something went wrong")
    	}else{
    		res.json(friend);
    	}
    })
  };

  this.update = function(req,res){
    console.log('made it in the server fr ctrl update method', req.body.name);
    Friend.findOneAndUpdate({'_id': req.params.id},{$set:{ name: req.body.name}}, {new: true},function(err, result){
      if(err){
        console.log('Porblem updating!', result);
      }else{
        res.json(result);
      }
    })
  };

  this.delete = function(req,res){
    Friend.remove({'_id': req.params.id}, function(err){
      if(err){
        console.log('Error deleting!!!')
      }else{
        res.json({placeholder:'delete'});
      }
    })
  };

  this.show = function(req,res){
    Friend.findOne({'_id': req.params.id}, function(err, friend){
      if (err){
        console.log('problem getting user');
      }else{
        res.json(friend);
      }
    })
  };

}
module.exports = new FriendsController(); // what does this export?