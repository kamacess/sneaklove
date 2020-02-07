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

// Filter products
const tagFilters = document.getElementById("tag_list");

if (tagFilters) {
  const tagListItems = document.querySelectorAll(".tag-list-item input");
  tagListItems.forEach(item => {
    item.onclick = () => {
      if (item.checked) {
        api.getSneakersByTag(item.getAttribute("data-tag-id"), result => {
          filterProducts(result);
        });
      } else {
        api.getAllSneakers(result => {
          filterProducts(result);
        });
      }
    };
  });
}

function filterProducts(data) {
  const productList = document.getElementById("products_grid");
  const productCount = document.getElementById("products_count");
  productCount.innerHTML = `(${data.length})`;
  productList.innerHTML = "";
  data.forEach(el => {
    productList.innerHTML += `
    <a href="/products/one-product/${el._id}" class="product-item-wrapper">
    <div class="product-img">
        <img src="${el.image}" alt="${el.name}">
    </div>
    <p class="product-name">${el.name}</p>
    <p class="product-cat">${el.category}</p>
    <p class="product-price">${el.price}</p>
  </a>
  `;
  });
}
