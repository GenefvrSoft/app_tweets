import Swal from 'sweetalert2';


export const alertDeleteItems = async (msgTitle , title = "¡No podrás revertir esto!") => {
    const { isConfirmed } = await Swal.fire({
        title,
        text: msgTitle,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        width: '455px',
    })

    if (isConfirmed) return true;
    else return false;
}

export const alertSuccess = (msg, position = 'top-end') => {
    Swal.fire({
        position,
        icon: 'success',
        text: msg,
        showConfirmButton: false,
        timer: 1300
    })
}


