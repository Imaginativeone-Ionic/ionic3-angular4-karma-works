import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('Second Test', ()=>{

    let dateVar = new Date();

    it('Date Test', ()=>{
        
        expect(dateVar).toBeTruthy();

    });

    it('Located Near the Application Module', ()=>{

        expect(true).toBeTruthy();

    });

    describe('A', ()=>{

        it('B', ()=>{

            expect(true).toBeTruthy();

        });

    });

});