import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  // const users = [
  //   { email: 'user1@test.com', password: 'test1' },
  //   { email: 'user2@test.com', password: 'test2' },
  //   { email: 'user3@test.com', password: 'test3' }
  // ]


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //cuando crea
  it('se renderiza', () => {
    expect(component).toBeTruthy();
  });

  //si el formulario es valido
  it('debe detetar que el formulario es valido', () => {
    fixture.nativeElement.querySelector('button').click();
    expect(component.login()).toEqual('invalid_form');
  }); 


  //para validar usuario y contraseña
  it('test validar para el usuario 1', () => {
    component.loginForm = formBuilder.group({
      email: 'user1@test.com',
      password: 'test1'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.login()).toEqual('login_valido');
  });

  it('test validar para el usuario 2', () => {
    component.loginForm = formBuilder.group({
      email: 'user2@test.com',
      password: 'test2'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.login()).toEqual('login_valido');
  });
  it('test validar para el usuario 3', () => {
    component.loginForm = formBuilder.group({
      email: 'user3@test.com',
      password: 'test3'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.login()).toEqual('login_valido');
  });

  //para validar usuario y contraseña
  // it('validar uno de los usuarios de manera correcta', () => {
  //   component.loginForm = formBuilder.group({
  //     email: 'user2@test.com',
  //     password: 'test2'
  //   });

  //   let usuarioEncontrado = users.find(usuario => usuario.email === component.loginForm.value.email && usuario.password === component.loginForm.value.password);
  //   expect(usuarioEncontrado).toBeTruthy();

  //   // fixture.nativeElement.querySelector('button').click();
  //   // expect(component.login()).toEqual('login_valido');
  // });

});