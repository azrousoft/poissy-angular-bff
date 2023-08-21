import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { PageActionEvent } from "./produit.state";

@Injectable(
    {providedIn: "root"}
)
export class EventDriverService{
    contratSourceEventSubject: Subject<PageActionEvent> = new Subject<PageActionEvent>();
    contratSourceEventSubjectObservable = this.contratSourceEventSubject.asObservable();

    /**
     * 
     * @param event Pour publier des event dans le subject
     * Chaque component qui veut recevoir cet event doit subscribe to contratSourceEventSubjectObservable
     * contratSourceEventSubject: broker
     */
    publishEvent(event: PageActionEvent){
        this.contratSourceEventSubject.next(event);
    }

}