const StandContainer = document.querySelector('.stand-container') 
const Spinner = document.querySelector('.spinner-container')
const copyButton = document.querySelector('.copy-button')

Spinner.style.display = "none"

const loading = (FS) =>{
    FS.style.display = "flex"
    StandContainer.appendChild(FS)
}

const fetchStd = (part) => {

    cloneSpinner = Spinner.cloneNode(true)
    let stands = []
    loading(cloneSpinner)
    fetch(`https://apijojos.onrender.com/part/${part}`)
    .then((res) => res.json())
    .then((data) => {
        stands = data.slice()
        clearStands()
        for(let indice in stands){
            createStand(indice, stands)
        }
    })
}

const RatingPage = () =>{
    const a = 1 
}
let copied = ''


const setArticle = () =>{

    const symbol = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('symbol')
        sym.textContent = s
        return sym
    }

    const functions = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('function')
        sym.textContent = s
        return sym
    }

    const variable = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('variable')
        sym.textContent = s
        return sym
    }

    const postvariable = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('postvariable')
        sym.textContent = s
        return sym
    }

    const string = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('string')
        sym.textContent = s
        return sym
    }

    const keyword = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('keyword')
        sym.textContent = s
        return sym
    }

    const point = (s)=>{
        const sym = document.createElement('span')
        sym.classList.add('point')
        sym.textContent = s
        return sym
    }

    const txtcontainer = document.createElement('div')
    txtcontainer.classList.add('txt-container')

    const title = document.createElement('h2')
    title.textContent = 'Api JoJo stands'

    const text = document.createElement('p')
    text.textContent = 'The stands API has all the references as well as its first appearance.'

    const title2 = document.createElement('h3')
    title2.textContent = 'How is it used?'

    const text2 = document.createElement('p')
    text2.textContent = 'To use the API, the first step is to fetch the API link.'
    
    const link = document.createElement('div')
    link.classList.add('link-container')

    const api = 'https://apijojos.onrender.com/'

    const plink = document.createElement('p')
    plink.classList.add('string')
    plink.textContent = '"https://apijojos.onrender.com/"'

    
    
    const copy = ()=>{
        navigator.clipboard.writeText(api)
        console.log('Texto copiado con exito')
    }
    const copyButton = document.createElement('button')
    copyButton.classList.add('copy-button')
    copyButton.onclick = copy
    
    link.appendChild(plink)
    link.appendChild(copyButton)

    const text3 = document.createElement('p')
    text3.textContent = 'Code example'

    const fetchexample = document.createElement('div')
    fetchexample.classList.add('code-container')

    const f1 = document.createElement('p')
    
    f1.appendChild(keyword('fetch'))
    f1.appendChild(symbol('('))
    f1.appendChild(string('`https://apijojos.onrender.com/part/'))
    f1.appendChild(functions('${'))
    f1.appendChild(postvariable('part'))
    f1.appendChild(functions('}'))
    f1.appendChild(string('`'))
    f1.appendChild(symbol(')'))
    

    const f2 = document.createElement('p')
    
    f2.appendChild(point('.'))
    f2.appendChild(functions('then'))
    f2.appendChild(symbol('(('))
    f2.appendChild(postvariable('res'))
    f2.appendChild(point(''))
    f2.appendChild(symbol(')'))
    f2.appendChild(functions('=>'))
    f2.appendChild(postvariable(' res'))
    f2.appendChild(point('.'))
    f2.appendChild(functions('json'))
    f2.appendChild(symbol('())'))

    const f3 = document.createElement('p')
    f3.appendChild(point('.'))
    f3.appendChild(functions('then'))
    f3.appendChild(symbol('(('))
    f3.appendChild(postvariable('data'))
    f3.appendChild(point(''))
    f3.appendChild(symbol(')'))
    f3.appendChild(functions('=>'))
    f3.appendChild(functions('{'))

    const f4 = document.createElement('p')
    f4.appendChild(postvariable('stands'))
    f4.appendChild(functions(' = '))
    f4.appendChild(postvariable('data'))
    f4.appendChild(point('.'))
    f4.appendChild(functions('slice'))
    f4.appendChild(symbol('()'))

    const f5 = document.createElement('p')
    f5.appendChild(functions('}'))

    const f6 = document.createElement('p')
    f6.appendChild(functions('}'))
    f6.appendChild(symbol(')'))
    
    fetchexample.appendChild(f1)
    fetchexample.appendChild(f2)
    fetchexample.appendChild(f3)
    fetchexample.appendChild(f4)
    fetchexample.appendChild(f5)
    fetchexample.appendChild(f6)

    
    const text4 = document.createElement('p')
    text4.textContent = 'This fetch will return all stands from JoJos Bizarre Adventure (all parts).'

    txtcontainer.appendChild(title)
    txtcontainer.appendChild(text)
    txtcontainer.appendChild(title2)
    txtcontainer.appendChild(text2)
    txtcontainer.appendChild(link)
    txtcontainer.appendChild(text3)
    txtcontainer.appendChild(fetchexample)
    StandContainer.appendChild(txtcontainer)
}

setArticle()
// fetchStd(0)



function createStand(inx, stands) {
    
    const flipcard = document.createElement('div')
    flipcard.classList.add('flip-card')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    flipcard.appendChild(cardContainer)

    const card = document.createElement('div')
    card.classList.add('stand-block')

    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = stands[inx].address

    spriteContainer.appendChild(sprite)

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = stands[inx].name

    card.appendChild(spriteContainer)
    card.appendChild(name)

    const cardBack = document.createElement('div')
    cardBack.classList.add('stand-block-back')

    const t1 = document.createElement('h3')
    t1.textContent = 'Usuario'
    const User = document.createElement('p')
    User.textContent = stands[inx].user

    const t2 = document.createElement('h3')
    t2.textContent = 'Primera Aparición'
    const firstapparition = document.createElement('p')
    firstapparition.textContent = stands[inx].part

    const t3 = document.createElement('h3')
    t3.textContent = 'Referencia'

    const reference = document.createElement('ul')

    for (let i = 0; i < stands[inx].reference.length; i++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = stands[inx].reference[i]
        a.href = stands[inx].link[i]
        a.target = "_blank"
        li.appendChild(a)
        reference.appendChild(li)
    }

    cardBack.appendChild(t1);
    cardBack.appendChild(User);
    cardBack.appendChild(t2);
    cardBack.appendChild(firstapparition);
    cardBack.appendChild(t3);
    cardBack.appendChild(reference);

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    StandContainer.appendChild(flipcard);
}

function clearStands() {
    while (StandContainer.firstChild) {
        StandContainer.removeChild(StandContainer.firstChild);
    }
}

let allS = []

const isRepeat = (value) => {
    for (let indice in allS) {
        if (allS[indice].name === value) {
            return true
        }
    }
    return false
}

const fillout = (partJojo) => {
    for (let indice in partJojo) {
        const value = partJojo[indice].name
        if (!isRepeat(value)) {
            allS.push(partJojo[indice])
        }

    }

}

function allStands() {
    fillout(standspart1)
    fillout(standspart2)
    fillout(standspart3)
    fillout(standspart4)
    fillout(standspart5)
    fillout(standspart6)
}



const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');
const a5 = document.querySelector('#a5');
const a6 = document.querySelector('#a6');
const all = document.querySelector('#all');

a1.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(1)
});

a2.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(2)
});

a3.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(3)
});

a4.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(4)
});

a5.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(5)
});

a6.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(6)
});

all.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(0)
});




