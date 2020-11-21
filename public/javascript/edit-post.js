const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];
async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
    

    await fetch(`/api/edit/${post_id}}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    document.location.replace('/dashboard');
    
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);