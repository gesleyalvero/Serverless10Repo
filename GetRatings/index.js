module.exports = function (context, req) {

    var documents = context.bindings.inputDocument;
    var totalDocuments = documents.length;
    context.log('Found '+ totalDocuments +' record/s');

    if(totalDocuments === 0){
        context.res = {
            status: 404,
            body : "No record found"
        };
    }

    else {
        context.res = {
            body: documents
        };
    }

    context.done();

};