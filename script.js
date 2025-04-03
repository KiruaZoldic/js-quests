// Déclaration et définition de trois variables avec une valeur numérique
const a = 3;
const b = 5;
const c = 9;

// Vérification des conditions
if (a === b && b === c) {
	console.log("Les trois variables sont identiques");
} else if (a === b || a === c || b === c) {
	console.log("Deux variables sont identiques");
} else {
	console.log("Toutes les variables sont différentes");
}
