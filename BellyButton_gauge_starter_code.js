// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    
    // Create a variable that filters the samples for the object with the desired sample number.
    var metadata = data.metadata
    var filtered_metadata = metadata.filter(array => array.id == sample);
    // Create a variable that holds the first sample in the array.
    var first = filtered_metadata[0];
    var 
    console.log(first)
    // 2. Create a variable that holds the first sample in the metadata array.
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    var washing_freq = first.wfreq
    // Create the yticks for the bar chart.
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        type: "indicator",
        mode: "gauge+number+delta",
        value: 420,
        title: { text: "Scrubs per Week", font: { size: 24 } },
        delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
        gauge: {
          axis: { range: [null, 10], tickwidth: 1, tickcolor: "Black" },
          bar: { color: "darkblue" },
          bgcolor: "white",
          borderwidth: 2,
          bordercolor: "gray",
          steps: [
            { range: [0, 1], color: "red" },
            { range: [1 ,2], color: "orange" },
            {range : [2 ,3], color: "limegreen"},
            {range: [3, 4], color: "green"}
          ],
          threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: 490
          }
        }
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width: 500,
      height: 400,
      margin: { t: 25, r: 25, l: 25, b: 25 },
      paper_bgcolor: "lavender",
      font: { color: "darkblue", family: "Arial" }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
