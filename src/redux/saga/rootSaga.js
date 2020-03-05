import { takeEvery, take} from 'redux-saga/effects'

function* tentativa() {
    yield console.log('Primeiro Disparo');
    yield console.log('Segundo Disparo');
    yield console.log('Terceiro Disparo');
}

function tentativa2() {
    console.log('Oito Disparo');
    console.log('Nove Disparo');
    console.log('Dez Disparo');
}


let disparo = async () =>{
    return(
        new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    console.log('Vinte Disparo');
                    console.log('Quarenta Disparo');
                    console.log('Cem Disparo');
                    resolve();
                }, 15000)
            }
        )
    )
}

let tentativa3 = async () =>{
    await disparo()
    console.log("Fim da minha promessa")
    return 
}


function* rootSaga(){
    const teste = tentativa();
    yield   take('Second')
    // teste.next()
    // teste.next()
    // teste.next()
    yield tentativa3();
    tentativa2();
    yield tentativa();
    console.log("Isso passou da tentativa")
    yield takeEvery('Second', () => {console.log('Hello')})
    yield takeEvery('First', () => {console.log('Hello World')})
}

export default rootSaga;
