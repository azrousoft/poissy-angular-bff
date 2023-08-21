export enum DataStateEnum{
    LOADING, LOADED, ERROR
}

export enum Civilite {
	Mr, Mme, Mlle, Dr
}

export enum Sexe {
	M, F
}

export enum TypeClient {
	BANCASS,CLASSIC 
}

export enum UniqueId {
	CIN, PASSPORT
}

export interface AppDataState<T>{
    dataState?: DataStateEnum,
    data?: T,
    errorMessage?: string
}

export enum PageCommand {
   ALL, INIT, PAGE, SEARCH, ADD, UPDATE, CONSULT, DELETE
}

export interface PageActionEvent{
    type: PageCommand,
    payload?: any
}