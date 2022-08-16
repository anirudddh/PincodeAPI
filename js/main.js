document.querySelector('button').addEventListener('click',get)

function get(){
  let PINCODE= document.querySelector('.form-input').value
  fetch(`https://api.postalpincode.in/pincode/${PINCODE}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0].PostOffice)
      document.querySelector('.cityh2').innerText=data[0].PostOffice[0].District
      document.querySelector('.stateh2').innerText=data[0].PostOffice[0].State
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

