import { PageDto } from "./page.daos";

export interface ContratCriteria{
    numeroBank: number,
	numeroProduit: number,
	numeroClient: number,
	type: string;
	envigeur: boolean,
	emit: boolean,
	page: PageDto
}