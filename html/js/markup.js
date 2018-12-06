var Markup = function(){
}
Markup.prototype.classy = function(el,tag,classes){
      var h = el.getElementsByTagName(tag);
      for(var i=0;i<h.length;i++){
         classes.forEach((c) => h[i].classList.add(c) );
      }
}
Markup.prototype.load = function(el){
	var loader = this;
  var url = el.getAttribute('markup');
  fetch(url)
   .then((response) => response.text())
   .then((markdown) => {
      el.innerHTML = marked(markdown);
     // add some nice things for bulma css
      for(var level = 1; level < 5; level++){
	loader.classy(el,'h'+level,['title','is-'+level]);
      }
      loader.classy(el,'table',['table']);
   }).catch(function(e){
      console.log('could not load '+url,e);
      el.innerHTML='could not load markup, see browser console';
    });
};
Markup.prototype.loadall = function(){
  var wanted = document.querySelectorAll('[markup]');
  for(var i=0;i<wanted.length;i++){
	  this.load(wanted[i]);
   }
};

document.addEventListener('DOMContentLoaded', function(){
  new Markup().loadall();
});

