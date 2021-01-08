window.addEventListener("keydown", (e) => {
    console.log(e);
  document.getElementById("container").innerHTML = `<div class="key">
				<small>code</small>
				<span>${e.code}</span>
			</div>
			<div class="key">
				<small>KeyCode</small>
				<span>${e.keyCode}</span>

			</div>
			<div class="key">
				<small>Key</small>
				<span>${e.key}</span>
			</div>`;
});
