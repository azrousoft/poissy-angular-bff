export interface Contrat {
	id :number;
	numero :number;
	numeroProduit :number;
	numeroClient :number;
	dateEmission : string;
	dateSystem : string;
	dateAnnulation : string;
	dateSuspenssion : string;
	type : string;
	gamme : string;
	option : string;
	emit: boolean;
	envigeur: boolean;
}