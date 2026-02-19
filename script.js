const list = document.getElementById("infi-list");
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    const itemNumber = list.children.length + 1;
    li.textContent = `Item ${itemNumber}`;
    list.appendChild(li);
  }
}
addItems(10);
list.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = list;
  if (scrollTop + clientHeight >= scrollHeight - 1) {
    addItems(2);
  }
});
