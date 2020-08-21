const Validator = require('validator');
const isEmpty   = require('./is-empty');

module.exports = function ValidThreadInputs(data) {
    let errors    = {};
    data.pName    = !isEmpty(data.pName) ? data.pName : '';
    data.pValue   = !isEmpty(data.pValue) ? data.pValue : '';
    data.cName    = !isEmpty(data.cName) ? data.cName : '';
    data.cEmailId = !isEmpty(data.cEmailId) ? data.cEmailId : '';

    if(Validator.isEmpty(data.pName)) {
        errors.pName = 'pollutant name is required';
    }

    if(Validator.isEmpty(data.pValue)) {
        errors.pValue = 'pollutant value is required';
    }

    if(Validator.isEmpty(data.cName)) {
        errors.cName = 'customer name is required';
    }

    if(Validator.isEmpty(data.cEmailId)) {
        errors.cEmailId = 'customer email  is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
