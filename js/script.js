var app = document.getElementById('typewritter');

var typewriter = new Typewriter(app, 
{
	loop: true
});

typewriter.pauseFor(500)
	.typeString('I am a <strong>student</strong>.')
	.pauseFor(1000)
	.deleteChars(8)
	.typeString('<strong>developer</strong>.')
	.pauseFor(1000)
	.deleteAll()
	.typeString('Follow me on <strong>Github</strong>!')
	.pauseFor(1500)
	.deleteAll()
	.pauseFor(2000)
	.start();
	
particlesJS.load('particles-js', './particles/particles.json', function()
{
	console.log('particles.js loaded');
});