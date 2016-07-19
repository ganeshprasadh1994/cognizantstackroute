(function(){
  var doc=document,
    el=doc.createElement("p");
  content=doc.createTextNode("<strong>This was dynamically created</strong>"),
  pFoo=doc.getElementById("foo");
  el.appendChild(content);
  pFoo.parentNode.appendChile(el);
  document.body.appendChild(el);
  alert(pElements.length);
}());
