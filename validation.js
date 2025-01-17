const titleObj = document.getElementById('title')
const authorObj = document.getElementById('author')
const pagesObj = document.getElementById('pages')
const isReadObj = document.getElementById('isRead')
const submitObj = document.getElementById('button')

// const titleObj = document.querySelector('.title')
// const authorObj = document.querySelector('.author')
// const pagesObj = document.querySelector('.pages')
// const isReadObj = document.querySelector('.isRead')
// const submitObj = document.querySelector('.button')

export const _inputValidation = function() {
    if (titleObj.validity.typeMismatch) {
        titleObj.setCustomValidity('We\'re looking for a title here...')
    } else if (titleObj.validity.valueMissing) {
        titleObj.setCustomValidity('Don\'t leave me blank and all alone!')
    } else {
        titleObj.setCustomValidity('')
    }
    if (authorObj.validity.typeMismatch) {
        authorObj.setCustomValidity('We\'re looking for a author here...')
    } else if (authorObj.validity.valueMissing) {
        authorObj.setCustomValidity('Don\'t leave me blank and all alone!')
    } else {
        authorObj.setCustomValidity('')
    }
    if (pagesObj.validity.typeMismatch) {
        pagesObj.setCustomValidity('Are you sure that\'s a page number?')
    } else if (pagesObj.validity.valueMissing) {
        pagesObj.setCustomValidity('Don\'t leave me blank and all alone!')
    } else {
        pagesObj.setCustomValidity('')
    }
}

export const _clickValidation = function() {
    if ((
        titleObj.validity.typeMismatch || 
        titleObj.validity.valueMissing || 
        authorObj.validity.typeMismatch || 
        authorObj.validity.valueMissing || 
        pagesObj.validity.typeMismatch || 
        pagesObj.validity.valueMissing
    )) {
        submitObj.setCustomValidity('Did you fill out all the fields correctly?')
    } else {
        submitObj.setCustomValidity('')
    }
}