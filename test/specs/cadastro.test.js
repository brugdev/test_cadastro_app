import { expect, driver  }  from '@wdio/globals';
//import { faker } from '@faker-js/faker';
//import profilePage from './../pageobjects/profile.page.js'




describe('Cadastrar no app', () => {
    
    it('Deve se cadastrar no app, validar o cadastro aguarda 10 seg e sair', async () => {
        await $(`id:tab-${'profile'}`).click()//abrir profile
        await $('//android.widget.TextView[@text="Sign up"]').click() //clicar para se cadastrar
        //await driver.pause(10000)

        //preencherform
        await $('//android.widget.EditText[@resource-id="firstName"]').addValue('Bruno')
        await $('//android.widget.EditText[@resource-id="lastName"]').addValue('Gomes')
        await $('//android.widget.EditText[@resource-id="phone"]').addValue('21 968294085')
        await $('//android.widget.EditText[@resource-id="email"]').addValue('teste16@gmail.com')
        await $('//android.widget.EditText[@resource-id="password"]').addValue('teste123')
        await $('//android.widget.EditText[@resource-id="repassword"]').addValue('teste123')
        await $('//android.widget.TextView[@text="Create"]').click()
        await $('//android.widget.TextView[@resource-id="cart"]').click()
        await $('//android.widget.TextView[@text=""]').click()
        await $(`id:tab-${'profile'}`).click()
        await driver.pause(10000)






        //await driver.pause(20000)
        


        //cadastro


    })
})