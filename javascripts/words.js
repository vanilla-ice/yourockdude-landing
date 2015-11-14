var words=['Draggable','Throwops','SplitText','MorphSvg','Physics2D','DrawSVG','TweenMax'],
    centerT=document.getElementById('center-txt'),
    leftT=document.getElementById('left-txt');
    W1=leftT.offsetWidth,
    W2=centerT.offsetWidth,
    tl= TimelineMax({repeat:-1});
    console.log(W1)
TweenLite.set('#center-txt',{left:W1});
TweenLite.set('#right-txt',{left:W1+W2});

for(var i=0;i<words.length;i++){
  centerT.innerHTML=words[i];
  var W3=centerT.offsetWidth;
  tl.to('#right-txt',1,{x:120,ease:Sine.easeOut},'+=3')
    .to('#center-txt',1,{text:{value:words[i]},ease:Sine.easeOut},'-=0.7')
    .to('#right-txt',1.7,{x:W3-W2,ease:Bounce.easeOut},'-=0.1')
};