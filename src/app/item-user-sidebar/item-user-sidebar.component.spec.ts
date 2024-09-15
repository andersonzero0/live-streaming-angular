import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUserSidebarComponent } from './item-user-sidebar.component';

describe('ItemUserSidebarComponent', () => {
  let component: ItemUserSidebarComponent;
  let fixture: ComponentFixture<ItemUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemUserSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
