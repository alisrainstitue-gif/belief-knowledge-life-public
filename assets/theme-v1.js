/* Local reader preference only; no network requests or account data. */
(function(){
  'use strict';
  var root=document.documentElement,key='bkl-reader-theme',saved=null;
  var system=window.matchMedia('(prefers-color-scheme: dark)');
  try{saved=localStorage.getItem(key);}catch(e){}
  if(saved!=='light'&&saved!=='dark')saved=null;
  function apply(theme){
    root.setAttribute('data-theme',theme);
    var meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute('content',theme==='dark'?'#1e1824':'#fff8ee');
    var ur=root.lang==='ur';
    document.querySelectorAll('[data-theme-toggle]').forEach(function(button){
      var dark=theme==='dark';
      button.textContent=ur?(dark?'روشن':'تاریک'):(dark?'Light':'Dark');
      button.setAttribute('aria-label',ur?(dark?'روشن انداز اختیار کریں':'تاریک انداز اختیار کریں'):(dark?'Switch to light mode':'Switch to dark mode'));
      button.setAttribute('title',button.getAttribute('aria-label'));
    });
  }
  apply(saved||(system.matches?'dark':'light'));
  function setup(){
    apply(root.getAttribute('data-theme'));
    document.querySelectorAll('[data-theme-toggle]').forEach(function(button){
      button.addEventListener('click',function(){
        saved=root.getAttribute('data-theme')==='dark'?'light':'dark';
        try{localStorage.setItem(key,saved);}catch(e){}
        apply(saved);
      });
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
  function changed(){if(!saved)apply(system.matches?'dark':'light');}
  if(system.addEventListener)system.addEventListener('change',changed);else if(system.addListener)system.addListener(changed);
})();
