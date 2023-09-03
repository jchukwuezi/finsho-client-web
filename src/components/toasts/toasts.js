export const createSuccessToast = (title, description) => {
    const success = {
        title: title,
        description: description,
        status: 'success',
        duration: 9000
    }   
    
    return success;
}

export const createFailureToast = (title, description) => {
    const failure = {
        title: title,
        description: description,
        status: 'error',
        duration: 9000
    }

    return failure;
}

export const createWarningToast = (title, description) => {
    const warning = {
        title: title,
        description: description,
        status: 'warning',
        duration: 9000
    }

    return warning
}


