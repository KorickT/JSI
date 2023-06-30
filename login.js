document.getElementById('signin-form').addEventListener('submit', function(e){
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        email,
        password,
    }
    console.log(user)
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(function(response){
        Swal.fire({
            title: 'Success!',
            text: 'Đăng nhap thanh cong',
            icon: 'success',
            showConfirmButton: false,
          })
        //Chuyển user về trang index.html//
        window.location.href = "index.html";
    })
    .catch(function(error){
        //xử lý lỗi//
        console.log(error)
        Swal.fire({
            icon: 'error',
            text: 'The password is invalid',
          })
    })
})