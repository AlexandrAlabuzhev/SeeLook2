const btnjs = document.querySelector('.btn')
const intro = document.querySelector('.intro')
const header = document.querySelector('.header_logo');
const nav = document.querySelector('.nav')
const button= document.querySelector('.button')
const info= document.querySelector('.info')
const body = document.querySelector('body')
const conteiner = document.querySelector('.conteiner')
const img = document.querySelector('.img-js-123')
const buttonJs= document.querySelector('.b-class')
const textone = document.querySelector('.text')
const bclass= document.querySelector('.b-class-b')
const devil = document.querySelector('.divul')
const search = document.querySelector('.point-btn')
const btn= document.querySelector('.btn-js')
const cards = Array.from(document.querySelectorAll('.js-card'))
const input = document.querySelector('.search-input')
const ul = document.querySelector('ul')






 

/*img.addEventListener('click',()=>{
    window.scrollBy({
        top:900,
        behavior: "smooth"})
})


buttonJs.addEventListener('click' ,function sss(){
    let a = index;
   
    if (a.style.display != 'none' ){
        index.style.display = 'none'
       
    }

    else if (a.style.display == 'none') {
        index.style.display = 'flex'
        
    }

    if (a.style.display != 'none' ){
        textone.style.display = 'none'
       
    }

    else if (a.style.display == 'none') {
        textone.style.display = 'flex'
        
    }
})

bclass.addEventListener('click' ,function sss(){
    if (index.style.display != 'none' ){
        index.style.display = 'none'
       
    }

    else if (index.style.display == 'none') {
        index.style.display = 'flex'
        
    }

    if (index.style.display != 'none' ){
        textone.style.display = 'none'
       
    }

    else if (index.style.display == 'none') {
        textone.style.display = 'flex'
        
    }
})
*/





document.querySelector('#elastic').oninput = function sasha(){
    let val = this.value.toLowerCase();
    
    let elasticItems = document.querySelectorAll('.elastic a');
   
   

    
    
    if (val != '') {
        ul.style.display = 'block'
        intro.style.opacity = '0.1'
        elasticItems.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide')
            }

            else  {
                elem.classList.remove('hide')
                elem.classList.remove('i')
            }
          
        });
    }else {
        elasticItems.forEach(function(elem) {
            elem.classList.add('hide')
            intro.style.opacity = '1'
            
        })
    }  
   
       
}





function responce1 () {
    if (window.innerWidth >989) {
        btn.classList.add('hidden');
        cards.forEach((item,index)=>{
            item.classList.add('hidden')
            if (index<=9) {
                item.classList.remove('hidden')
            }else if (index>9) {
                btn.classList.remove('hidden')

            }
            openCatalog()
        } )
    }
}

responce1()

function openCatalog () {
    btn.addEventListener('click' , ()=> {
        cards.forEach(item =>item.classList.remove('hidden'));
        btn.classList.add('hidden')
    })
}

function responce2 () {
    if (window.innerWidth<=989 && window.innerWidth >659) {
        btn.classList.add('hidden');

        cards.forEach((item,index)=>{
           item.classList.add('hidden');
           if (index<= 5 ) {
              item.classList.remove('hidden');

           }else if (index > 5 ) {
               btn.classList.remove('hidden');

           }
           openCatalog()

        })

    }
}

responce2()

function responce3 () {
    if (window.innerWidth<=659 ) {
        btn.classList.add('hidden');

        cards.forEach((item,index)=>{
           item.classList.add('hidden');
           if (index<= 2 ) {
              item.classList.remove('hidden');

           }else if (index > 2 ) {
               btn.classList.remove('hidden');

           }
           openCatalog()

        })

    }
}

responce3()
    










const buttonInput = document.querySelector('.button-js').onclick = function () {
    input.value = '' 
    intro.style.opacity = '1'
    ul.style.display = 'none'
   
  
    

}           








  
       
        


        
    









    


    
      
       


    
    
    
    
   

    

        

