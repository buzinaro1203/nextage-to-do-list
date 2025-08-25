export function showLoading() {
  const div = document.createElement("div");
  div.classList.add("loading", "centralize");

  const label = document.createElement("label");
  label.innerText = "Loading...";

  div.appendChild(label);

  document.body.appendChild(div);
}

export function hideLoading() {
  const loadings = document.getElementsByClassName("loading");
  if (loadings.length > 0) {
    loadings[0].remove();
  }
}
