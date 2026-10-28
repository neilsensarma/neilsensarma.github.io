const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const dotGroup = document.querySelector('#cell-dots');
if (dotGroup) {
  let seed = 29;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const clusters = [{x:98,y:88,sx:40,sy:27,color:'#5be0c4'},{x:205,y:65,sx:42,sy:23,color:'#8aa9ff'},{x:275,y:123,sx:44,sy:25,color:'#5bc7dd'}];
  for (const cluster of clusters) {
    for(let i=0;i<65;i++) {
      const r=Math.sqrt(-2*Math.log(Math.max(.001,random()))), theta=2*Math.PI*random();
      const x=cluster.x + Math.cos(theta)*r*cluster.sx*.62, y=cluster.y + Math.sin(theta)*r*cluster.sy*.62;
      if(x<10||x>380||y<8||y>172)continue;
      const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
      c.setAttribute('cx',x.toFixed(1));c.setAttribute('cy',y.toFixed(1));c.setAttribute('r',(1+random()*1.5).toFixed(1));c.setAttribute('fill',cluster.color);c.setAttribute('opacity',(0.45+random()*.5).toFixed(2));dotGroup.appendChild(c);
    }
  }
}
