var ghpages = require('gh-pages');

ghpages.publish(
  'public', 
  {
    branch: 'gh-pages',
    repo: 'https://github.com/David245M/svelte-todo.git', // Update to point to your repository  
    user: {
      name: 'David245M', // update to use your name
      email: 'misha2479k@gmail.com' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)