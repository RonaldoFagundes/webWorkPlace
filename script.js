
  

  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  //const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";

  //const endpointPhp = "http://127.0.0.1/_ehs-api";

  const endpointPhp = "https://app.ehsss.com.br";


 // const endpointPhp = "https://ddbabb23-115a-4fbc-ac05-d7c225982170-00-xbc9ar2bh5gb.janeway.replit.dev/";



 const list_construction = document.getElementById('list_construction');

 const list_report = document.getElementById('list_report');


 const list_report_number  = document.getElementById('list_report_number');




 list_construction.addEventListener('click', function () {
      listConstruction();
})




list_report.addEventListener('click', function () {
      listReport();
})



list_report_number.addEventListener('click', function () {
    listReportByNumber();
})









const listConstruction = async () => {
    await fetch(endpointPhp + "?action=list_construction")     
      .then(res => res.json())
      .then(      
        (result) => {       
            console.log(result);         
        }
      )
      .catch(() => {
        console.log('Erro', 'Não foi possível carregar os dados da construtora');
      });
   }






const idConstruction = 1 ;

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
            console.log(result);  
        })
      .catch((error) => console.error(error));
  }





  const  reportNumber = 1;

  const listReportByNumber = async () => {
    await fetch(endpointPhp + "?action=list_report_by_number", {
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
            console.log(result);        
        })
      .catch((error) => console.error(error));
  }