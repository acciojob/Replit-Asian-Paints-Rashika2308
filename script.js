const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Change specific block's color
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  } else {
    alert("Invalid Block ID! Please enter a number from 1 to 9.");
  }
});

resetButton.addEventListener("click", () => {
  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});

