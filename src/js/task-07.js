const refs = {
  fontSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

function handleInput() {
  const input = refs.fontSize.value;
  refs.text.style.fontSize = `${input}px`;
}

refs.fontSize.addEventListener("input", handleInput);
