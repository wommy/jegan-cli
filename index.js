(async ()=>{
	console.log(await require('prompts')({
		type: 'number',
		name: 'value',
		message: 'how old are you',
		validate: value => value < 18 ?`18+ only` :true
	}))
})()
