const selectionDOM = document.querySelector('#selection');
const inputDOM = document.querySelector('#input');
const labelDOM = document.querySelector('#label');
const submitDOM = document.querySelector('#submit');

submitDOM.addEventListener('click', submitValidation);

function submitValidation(e){
    
    let selectOption = e.target.parentElement.children[0].children[0];
    
    switch(selectOption.value){
        case 'email':
            validateEmail();
            labelDOM.textContent = validateEmail();
            inputDOM.value = '';
            break;
        
            case 'phone':
                validatePhone();
                labelDOM.textContent = validatePhone();
                inputDOM.value = '';
                break;
            
            case 'postcode':
                validatePostCode();
                labelDOM.textContent = validatePostCode();
                inputDOM.value = '';
                break;
            
            case 'nooption':
                showError();
                labelDOM.textContent = showError();
                inputDOM.value = '';
                break;
        
    }

    // e.preventDefault();
}


function validateEmail(){
            let emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            let emailResult = emailVal.test(inputDOM.value)
            let value;
            if(emailResult == false){
               value = `This Email is not valid`;
            } else{
                value = `This Email is valid`;
    
            }
            return value;
        
        }


function validatePhone(){
            let phoneVal = /^(\+)?(88)?01[0-9]{9}$/;
            let phoneResult = phoneVal.test(inputDOM.value)
            let value;
            if(phoneResult == false){
               value = `This Phone No. is not valid`;
            } else{
                value = `This Phone No. is valid`;
    
            }
            return value;
        
        }

function validatePostCode(){
            let postCodeVal = /^[0-9]{4}$/;
            let postCodeResult = postCodeVal.test(inputDOM.value)
            let value;
            if(postCodeResult == false){
               value = `This Post Code is not valid`;
            } else{
                value = `This Post Code is valid`;
    
            }
            return value;
        
        }


function showError(){
            let value = `First select the option`
            return value;
        }
