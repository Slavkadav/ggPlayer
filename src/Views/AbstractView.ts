import {EventEmitter} from "events";

export abstract class AbstractView extends EventEmitter{

    protected placeHolder:HTMLElement;

    constructor(placeHolder:HTMLElement){
        super();
        this.placeHolder = placeHolder;
    }

}
