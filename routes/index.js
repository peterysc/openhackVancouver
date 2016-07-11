
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('views/index.html', { title: 'Open Farm Market' });
};