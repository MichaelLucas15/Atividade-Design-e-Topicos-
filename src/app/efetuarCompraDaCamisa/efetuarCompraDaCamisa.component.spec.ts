import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarCompraDaCamisaComponent } from './efetuarCompraDaCamisa.component';

describe('ImagensComprasComponent', () => {
    let component: EfetuarCompraDaCamisaComponent;
    let fixture: ComponentFixture<EfetuarCompraDaCamisaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EfetuarCompraDaCamisaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EfetuarCompraDaCamisaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
