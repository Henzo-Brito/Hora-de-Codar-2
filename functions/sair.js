export function sair() {
	var confirma = confirm('Você deseja sair?');
	if (confirma) {
		window.close();
	} else {
		inicio();
	}
}