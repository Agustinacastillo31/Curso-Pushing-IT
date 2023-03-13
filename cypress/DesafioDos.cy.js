/// <reference types="cypress" />

describe('DesafioDos', () => {
    let loginData;

        before("Datos para inicio sesion" , () => {
          cy.fixture('MisDatosTest').then(data => {
            loginData = data;
          });
        });
   
        beforeEach('Loguearse', ()=> {
            cy.visit('');
            cy.get('#registertoggle').dblclick();

        })
     

        it('Iniciar sesion + Agregar 5 tareas en ToDoList', () => {
           cy.get('#user').type(loginData.usuario);
           cy.xpath("//input[@id='pass']").type(loginData.contraseña);
           cy.contains('Log in').click();
           cy.contains('To Do List').click();
           cy.get('#task').type(loginData.tareauno);
           cy.get('#sendTask').click();
           cy.get('#task').type(loginData.tareados);
           cy.get('#sendTask').click();
           cy.get('#task').type(loginData.tareatres);
           cy.get('#sendTask').click();
           cy.get('#task').type(loginData.tareacuatro);
           cy.get('#sendTask').click();
           cy.get('#task').type(loginData.tareacinco);
           cy.get('#sendTask').click();

    })
        it('Verificar', () => {
        cy.get('#user').type(loginData.usuario);
        cy.get('#pass').type(loginData.contraseña);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
        cy.get('#all').should('have.text', 'All');
        cy.get('#completed').should('have.text', 'Completed');
        cy.get('#active').should('have.text', 'Active');
        cy.get('#removeAll').should('have.text', 'Remove all');
    })
        it('Agregar 2 y eliminar la segunda', () => {
        cy.get('#user').type(loginData.usuario);
        cy.get('#pass').type(loginData.contraseña);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
        cy.get('#task').type(loginData.tareauno);
        cy.get('#sendTask').click();
        cy.get('#task').type(loginData.tareados);
        cy.get('#sendTask').click();
        cy.contains('Tarea 1').click();
        cy.contains('Tarea 2').click();
        cy.get(':nth-child(2) > .css-vuy1kp > .chakra-button').click();

    })

        it.only('Agregar 2 y eliminar la primera', () => {
        cy.get('#user').type(loginData.usuario);
        cy.get('#pass').type(loginData.contraseña);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
        cy.get('#task').type(`${loginData.tareauno} {enter}`);
        cy.get('#task').type(`${loginData.tareados} {enter}`);
        cy.get(':nth-child(1) > .css-vuy1kp > .chakra-button').click();
    })

});

