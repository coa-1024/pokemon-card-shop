const cards = [
  {
    id: 1,
    name: "리자몽 EX",
    price: 150000,
    image: "https://picsum.photos/200?random=1"
  },
  {
    id: 2,
    name: "피카츄 VMAX",
    price: 80000,
    image: "https://picsum.photos/200?random=2"
  },
  {
    id: 3,
    name: "뮤 V",
    price: 60000,
    image: "https://picsum.photos/200?random=3"
  }
];

const container = document.getElementById("card-container");

cards.forEach(card => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  cardDiv.innerHTML = `
    <img src="${card.image}" />
    <h3>${card.name}</h3>
    <p>${card.price.toLocaleString()}원</p>
    <button onclick="goDetail(${card.id})">상세보기</button>
  `;

  container.appendChild(cardDiv);
});

function goDetail(id) {
  localStorage.setItem("selectedCard", id);
  window.location.href = "detail.html";
}
