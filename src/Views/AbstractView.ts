import {EventEmitter} from "events";

export abstract class AbstractView extends EventEmitter{

    protected placeHolder:HTMLElement;
    protected template: string = '';

    constructor(placeHolder:HTMLElement){
        super();
        this.placeHolder = placeHolder;

    }

}
