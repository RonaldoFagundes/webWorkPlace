
  

  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  //const endpointPhp = "http://127.0.0.1/_ehs-api";



 const endpointPhp = "https://app.ehsss.com.br";

// const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";


 const list_construction = document.getElementById('list_construction'); 
 
 const delete_construction  = document.getElementById('delete_construction');
 
 const list_report = document.getElementById('list_report');

 const list_report_number  = document.getElementById('list_report_number');
 
 const delete_report  = document.getElementById('delete_report');




 const  idConstruction = 11 ;
 const  reportNumber = 1;






 list_construction.addEventListener('click', function () {    
      listConstruction();
 })
 
 
 delete_construction.addEventListener('click', function () {
    deleteConstruction();
})




list_report.addEventListener('click', function () {
      listReport();
})



list_report_number.addEventListener('click', function () {
    listReportByNumber();
})


delete_report.addEventListener('click', function () {
    deleteReport();
})



const displayResult  = document.getElementById('diplay-result');

const ul  = document.getElementById('ul');

const list = [];

const listConstruction = async () => {   
    await fetch(endpointPhp + "?action=list_construction")     
      .then(res => res.json())
      .then(  

        (result) => {

          displayResult.innerHTML = "action=list_construction";            

           result.map(
             (item ) =>         
               list.push (item.id_cts , item.name_cts)     
            )              

           for(var i = 0;  i< list.length; i++){ 

            const li = document.createElement("li");
                  li.innerHTML = "  "+list[i]; 
                  ul.appendChild(li);
            } 
        }
     )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados da construtora');
      });
   }





 

 
 const deleteConstruction = async () => {
    await fetch(endpointPhp + "?action=delete_construction", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConstruction
      })
    })
      .then((res) => res.json())
      .then(

        (result) => {         
            console.log(" action=delete_construction  id   "+idConstruction);          
			console.log(result);
        })
      .catch(function (error) {
        console.log('erro => ' + error.message);
      });
  }






const listReport = async () => {
    await fetch(endpointPhp + "?action=list_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConstruction
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {
            console.log("action=list_report   idConstruction  "+idConstruction);  
			console.log(result);
        })
      .catch((error) => console.error(error));
  }





const listReportByNumber = async () => {
    await fetch(endpointPhp + "?action=list_report_by_number", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idConstruction,
        reportNumber
      })
    })
      .then((res) => res.json())
      .then(
        (result) => {          
            console.log(" action=list_report_by_number  "+reportNumber+" id construction "+idConstruction);        
			console.log(result);  
        })
      .catch((error) => console.error(error));
  }




 const deleteReport = async () => {
    await fetch(endpointPhp + "?action=delete_report", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        reportNumber
      })
    })
      .then((res) => res.json())
      .then(

        (result) => {         
            console.log(" action=delete_report  number   "+reportNumber);          
			console.log(result);
        })
      .catch(function (error) {
        console.log('erro => ' + error.message);
      });
  }



	
