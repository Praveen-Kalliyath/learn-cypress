///<reference types="cypress"/>

import { Homecreen } from "../pages/homescreen"
let hs = new Homecreen()
it('Google',()=>{
    hs.navigate('https://google.com')
    hs.enterData()
    hs.clickElement()
    
})

