import { Contrat } from "../entities/contrat.entities";
import { ContratCriteria } from "./Contrat-criteria.daos";


export interface ContratBean {
    criteria: ContratCriteria,
	line : Contrat,
    contrats: Contrat[],
}