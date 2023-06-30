console.log("index");
fetch("https://649ed17a245f077f3e9cf17e.mockapi.io/cars").then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data);
    document.getElementById("product-list").innerHTML = `
    <div class="col-3">
        <div class="my-product card border-0 shadow-p">
          <img
            src="${data[2].img}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${data[2].name}</h5>

            <span href="#" class="text-primary">${data[2].salePrice}</span>
            <spam href="#" class="text-decoration-line-through">${data[1].price}</spam>
          </div>
        </div>
      </div>
      `;
});
