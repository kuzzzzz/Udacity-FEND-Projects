
const polarity = document.getElementById('polarity');
const subjectivity = document.getElementById('subjectivity');
const text = document.getElementById('text');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")
    console.log(formText)



    if(Client.validateUrl(formText)){
      postData(formText)
      .then(function(data) {
        // Call uiUpdate once data has been sent back from server
        uiUpdate(data);
      })
    }else{
      alert(`enter a valide url
      For Example 
      "https://blog.udacity.com/2020/04/what-you-need-to-know-about-ai-development.html"
      `)
    }


}

const postData = async function(url = '') {
  
  const response = await fetch('http://localhost:8081/article', {
    method: 'POST', 
    credentials: 'same-origin', 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({"url": url})
  });
  try {
    const dataObject = await response.json();
    return dataObject;
  } catch(error) {
    console.log('error', error);
    errorDiv.innerHTML = `<p class="error-text">An error was encountered. Try a different url</p>`
  }
}


// Update the results on the UI
function uiUpdate(data) {

  polarity.innerHTML = `<p>Polarity:${data[0].polarity}</p>
                        <p>Polarity Confidence:${data[0].polarity_confidence}</p>`

  subjectivity.innerHTML = `<p>Subjectivity:${data[0].subjectivity}</p>
                            <p>Subjectivity Confidence:${data[0].subjectivity_confidence}</p>
                            `
  text.innerHTML = `Article:<p>${data[0].text}</p>`
}

export { handleSubmit, postData, uiUpdate }

