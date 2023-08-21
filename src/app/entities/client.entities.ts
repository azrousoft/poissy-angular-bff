
import { Civilite, Sexe, TypeClient, UniqueId } from "../state/produit.state";
import { Adresse } from "../entities/adresse.entities";

export interface ClientDto {
	id : number;
	nom: string;
	prenom: string;

	tel: string;
	email: string;
	dateNaissance: string;
	
	uniqueId: UniqueId; 
	typeId: TypeClient;  
	civilite: Civilite;
	sexe: Sexe;
	adresse : Adresse;
}
