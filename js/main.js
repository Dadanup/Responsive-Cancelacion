let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}


// ------

function onConfirmed(){
  let timerInterval
  const modalConEstilosBootstrap = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn m-3'
    },
    buttonsStyling: false
  })
  modalConEstilosBootstrap.fire({
    title: '¿Estas seguro de que deseas cancelar la póliza 1234567890?',
    text: "Despues de cancelar la póliza, se generará un comprobante.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cancelar Póliza',
    cancelButtonText: 'No Cancelar Póliza',
    reverseButtons: true,
   
  }).then((result)=>{
    if(result.isConfirmed){
      
      modalConEstilosBootstrap.fire(
        'Póliza Borrada',
        '',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      modalConEstilosBootstrap.fire(
        'La Póliza no se Canceló.',
        '',
        'error'
      )
    }
  })
}

function onModify(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Datos guardados exitosamente.'
  })
}