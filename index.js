const { prompt } = require('enquirer')

prompt([
	{
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'What is your password?'
  }
])
  .then(answer => console.log('Answer:', answer))

