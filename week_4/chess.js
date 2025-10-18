let selectedCell = null;

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    const piece = cell.textContent.trim();

    if (!selectedCell && piece !== "") {
      selectedCell = cell;
      cell.style.outline = "2px solid red";
    } else if (selectedCell && cell !== selectedCell) {
      cell.textContent = selectedCell.textContent;
      selectedCell.textContent = "";
      selectedCell.style.outline = "none";
      selectedCell = null;
    } else if (cell === selectedCell) {
      selectedCell.style.outline = "none";
      selectedCell = null;
    }
  });
});
