document.getElementById('signup-form').addEventListener('submit', function(e){
  e.preventDefault()
  

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const address = document.getElementById('address').value;

  const user = {
    email,
    phone,
    password,
    address,
  }


  firebase.auth()
  .createUserWithEmailAndPassword(user.email,user.password)
  .then(function (response) {
    console.log('dang ki thanh cong',response.user)
    Swal.fire({
      title: 'Success!',
      text: 'Đăng ky thanh cong',
      html: `
        <button class="btn btn-warning" >
          <a href="./loginform.html">dang nhap</a>
        </button>
      `,
      icon: 'success',
      showConfirmButton: false,
    })
    
    db.collection('users').add({
      email,
      phone,
      address,
      password,
    })
  })
  .catch(function(error){
    console.log(error)
    Swal.fire({
      icon: 'error',
      text: 'Password should be at least 6 characters!',
    })
  })
})