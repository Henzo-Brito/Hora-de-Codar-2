export function sair() {
	const sair = document.getElementById("sair")

    sair.addEventListener("click", () => {
		let confirma = confirm('Você deseja sair?');
		if (confirma) {
			window.close();
		} else {
			inicio();
		}
	})
}

sair()