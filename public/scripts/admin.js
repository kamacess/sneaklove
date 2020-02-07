import apiHandler from "/scripts/apiHandler.js";
const api = new apiHandler("http://localhost:9000");

// Product Management Dashboard

const productList = document.querySelector(".product-manage-table");
const deleteBtn = productList.querySelectorAll(".fa-trash");

deleteBtn.forEach(btn => {
  btn.onclick = () => {
    api.deleteSneaker(btn.getAttribute("data-id-sneaker"), result => {
      console.log("------->", result);
    });
    btn.closest(".table-row").remove();
  };
});
