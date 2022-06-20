d3.json("samples.json").then(function(data){
    var samples = data.samples
    console.log(data.samples);
    console.log(data.samples[0].otu_ids)
});



d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});
