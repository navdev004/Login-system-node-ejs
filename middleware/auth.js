exports.isAuthenticated =(req,res,next)=>{
    if(!req.session.isLoggedIn){
        return res.redirect('/');
    }
    next();
    
}