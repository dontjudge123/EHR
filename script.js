// Fetch data from the backend and visualize using D3.js
async function fetchData() {
  const response = await fetch('http://localhost:3000/api/patients');
  const data = await response.json();
  visualizeData(data);
}

function visualizeData(data) {
  const width = 800;
  const height = 400;

  const svg = d3.select("#chart")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  // Example visualization: Number of patients by gender
  const genderCount = d3.rollup(data, v => v.length, d => d.gender);

  const x = d3.scaleBand()
              .domain([...genderCount.keys()])
              .range([0, width])
              .padding(0.1);

  const y = d3.scaleLinear()
              .domain([0, d3.max(genderCount.values())])
              .range([height, 0]);

  svg.append("g")
     .selectAll("rect")
     .data([...genderCount.entries()])
     .enter()
     .append("rect")
     .attr("x", d => x(d[0]))
     .attr("y", d => y(d[1]))
     .attr("width", x.bandwidth())
     .attr("height", d => height - y(d[1]))
     .attr("fill", "steelblue");

  svg.append("g")
     .attr("transform", `translate(0, ${height})`)
     .call(d3.axisBottom(x));

  svg.append("g")
     .call(d3.axisLeft(y));
}

fetchData();
