const credentials = {
    email:"admin@gmail.com",
    password:"admin123"
}



exports.login = (req,res)=>{
    if(req.session.isLoggedIn){
        return res.redirect('/dashboard');
       }
    
    res.render('login',{title:'Login',success:req.flash('success'),error:req.flash('error')});
}

exports.postLogin =(req,res)=>{
   
   const {email,password} = req.body;
   console.log(email,password);

   if(!email || !password ){
       req.flash("error","All fields are required");
        res.redirect('/');
   }
    if(password.length < 8){
    req.flash("error","Password must be at least 8 characters");
     res.redirect('/');
   }
    if (email===credentials.email && password === credentials.password){
        req.session.isLoggedIn = true;
         req.session.user = email;
         res.redirect('/dashboard');
    

   }else{
    req.flash("error","Invalid Credentials");
    res.redirect('/');
   }
}


exports.dashboard= (req,res)=>{


 if(req.session.user){
    res.render('dashboard',{title:'Dashboard',user:req.session.user});

 }else{
    res.send("Unauthorize User");
 }
}

exports.logout = (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }else{
           
        res.redirect('/',);
        }
    })
  
        
   
}
