import {EventEmitter} from "events";

export abstract class AbstractView extends EventEmitter {

    protected placeHolder: HTMLElement;
    protected template: string = '';

    //protected playButton: HTMLButtonElement;
    //protected pauseButton: HTMLButtonElement;
    //protected muteButton: HTMLButtonElement;
    // protected seekBar: HTMLInputElement;
    //protected volumeBar: HTMLInputElement;

    constructor(placeHolder: HTMLElement) {
        super();
        this.placeHolder = placeHolder;

    }

    abstract videoEnd(): void;
    abstract get seekBarValue(): string;
    abstract set seekBarValue(value: string);
    abstract get  volumeValue(): number;

    get currentQuality(): number {
        return null
    };

    set currentQuality(value: number) {
    };

    set qualityLevels(value: string[]) {
    };
}
