import {EventEmitter} from "events";

export abstract class AbstractView extends EventEmitter {

    protected placeHolder: HTMLElement;
    protected template: string = '';
    // TODO: Сделай поддержку templateUrl
    // TODO: Если есть template - вставляем его, если нет - грузим по templateUrl и вставляем

    //protected playButton: HTMLButtonElement;
    //protected pauseButton: HTMLButtonElement;
    //protected muteButton: HTMLButtonElement;
    // protected seekBar: HTMLInputElement;
    //protected volumeBar: HTMLInputElement;

    constructor(placeHolder: HTMLElement) {
        super();
        this.placeHolder = placeHolder;

    }

    abstract videoEnd(): void; // TODO: Эвент
    abstract get seekBarValue(): string; // TODO: position
    abstract set seekBarValue(value: string);
    abstract get volumeValue(): number; // TODO: просто volume

    get currentQuality(): number {
        return null
    };

    set currentQuality(value: number) {
    };

    set qualityLevels(value: string[]) {
    };
}
