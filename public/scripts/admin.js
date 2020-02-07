import apiHandler from "/scripts/apiHandler.js";
const api = new apiHandler("http://localhost:9000");

// Product Management Dashboard
const productList = document.querySelector(".product-manage-table");

if (productList) {
  const deleteBtn = productList.querySelectorAll(".fa-trash");
  deleteBtn.forEach(btn => {
    btn.onclick = () => {
      api.deleteSneaker(btn.getAttribute("data-id-sneaker"), result => {
        console.log("------->", result);
      });
      btn.closest(".table-row").remove();
    };
  });
}

// Add Product
const addTagBtn = document.getElementById("btn_new_tag");

if (addTagBtn) {
  addTagBtn.onclick = e => {
    const name = document.querySelector("#new_tag_name").value;
    api.addTag(name, result => {
      api.getAllTags(result => {
        renderTagSelect(result);
      });
    });
  };
}

function renderTagSelect(data) {
  const tagSelect = document.getElementById("tags");
  tagSelect.innerHTML = "";
  tagSelect.innerHTML += `<option value="-1" disabled selected>Choose a Tag</option>`;
  data.forEach(el => {
    tagSelect.innerHTML += `<option value="${el._id}">${el.name}</option>`;
  });
}
