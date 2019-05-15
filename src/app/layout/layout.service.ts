import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LayoutService {
    isCollapsedSubject: Subject<any>;

    constructor() {
        this.isCollapsedSubject = new Subject();
    }

    setIsCollapsed(value) {
        this.isCollapsedSubject.next(value);
    }
    getIsCollapsed() {
        return this.isCollapsedSubject.asObservable();
    }
}
