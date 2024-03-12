const devil = document.querySelector('.divul')

const btnSearch = document.querySelector('.btn')


btnSearch.addEventListener('click', () => {
    devil.hidden = false
    if (devil != 'none') {
        btnSearch.style.display = 'none'
    }
})

document.querySelector('#elastic').oninput = function sasha(){
    let val = this.value.toLowerCase();
    let elasticItems = document.querySelectorAll('.elastic a');
   

    
    
    if (val != '') {
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
            
        })
    }
       
        


        
    
}