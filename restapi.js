$(document).ready(function() {
    $('#countriesTable').DataTable({
        "ajax": {
            "url": "https://restcountries.com/v2/all",
            "dataSrc": ""
        },
        "columns": [
            { "data": "name" },
            { 
                "data": "capital",
                "render": function(data) {
                    return data ? data : "BRAK DANYCH";
                }
            },
            { 
                "data": "region",
                "render": function(data) {
                    return data ? data : "BRAK DANYCH";
                }
            },
            { 
                "data": "population",
                "render": function(data) {
                    return data ? data : "BRAK DANYCH";
                }
            }
        ]
    });
});
