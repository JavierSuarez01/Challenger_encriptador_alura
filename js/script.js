const encriptar = document.getElementById("boton__encriptar");
const desencriptar = document.getElementById("boton__desencriptar");
const copiar = document.getElementById("boton__copiar");
const textoInicial = document.getElementById("ingreseTexto");
const textFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("munecoM");
const textInfo = document.getElementById("textoInformativo");
const rigth = document.getElementById("right")
	
const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajustar")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Ingrese Texto Aqui";
	muneco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copiar.classList.remove("bn_ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajustar")
	textFinal.classList.remove("ajustar");
	muneco.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copiar.classList.add("bn_ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

encriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encriptar(nuevotexto) {
			for (let i = 0; i < remplazar.length; i++) {
				if (nuevotexto.includes(remplazar[i][0])) {
					nuevotexto = nuevotexto.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return nuevotexto;
		};
		remplace(encriptar(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
});

desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencriptar(nuevotexto) {
			for (let i = 0; i < remplazar.length; i++) {
				if (nuevotexto.includes(remplazar[i][1])) {
					nuevotexto = nuevotexto.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return nuevotexto;
		};
		remplace(desencriptar(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reset();
	};
});

copiar.addEventListener("click", () => {
	let texto = textFinal;
	navigator.clipboard.writeText(texto.value);
	alert("Texto copiado con exito");
	reset();
});
//auto ajuste de textarea
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});