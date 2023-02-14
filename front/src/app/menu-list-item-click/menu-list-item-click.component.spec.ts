import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListItemClickComponent } from './menu-list-item-click.component';

describe('MenuListItemClickComponent', () => {
  let component: MenuListItemClickComponent;
  let fixture: ComponentFixture<MenuListItemClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListItemClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuListItemClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
