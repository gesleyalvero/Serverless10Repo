module.exports = function (context, req) {

    context.log('Detected ' + req.body.length + ' incoming documents');
    context.bindings.outputDocument = [];

    for(let i = 0, len=req.body.length; i<len;i++){

        const doc = req.body[i];
        doc["Id"] = guid();
        doc["timestamp"] = new Date();
        context.bindings.outputDocument.push(doc);
    }

    context.done(null, {
            status: 201, body: 'Processed ' + req.body.length + ' documents'
        });

};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}