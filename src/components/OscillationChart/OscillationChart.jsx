import React from "react";
import Plot from "react-plotly.js";

const OscillationChart = ({
  deformation,
  velocity,
  time,
  stiffness,
  viscosity,
  mass,
}) => {
  const calculateOscillations = () => {
    const k = Math.sqrt(stiffness / mass);
    const n = viscosity / (2 * mass);

    if (n >= k) {
      return {
        data: null,
        message: "Среда с большой вязкостью. Возникает апериодическое движение",
      };
    }

    const phi0 = Math.atan(velocity / (k * deformation));
    const A = deformation / Math.cos(phi0);

    const t = Array.from(
      { length: Math.floor(time * 10) + 1 },
      (_, i) => i / 10
    );
    const y = t.map(
      (ti) =>
        A * Math.exp(-n * ti) * Math.cos(Math.sqrt(k ** 2 - n ** 2) * ti + phi0)
    );

    return {
      data: {
        x: t,
        y: y,
        type: "scatter",
        mode: "lines",
        marker: { color: "blue" },
      },
      message: null,
    };
  };

  const { data, message } = calculateOscillations();

  if (message) {
    return <p>{message}</p>;
  }

  const studentName = JSON.parse(localStorage.getItem("auth")).name;
  const studentGroup = JSON.parse(localStorage.getItem("auth")).group;

  return (
    <Plot
      data={[data]}
      layout={{
        title:
          studentName +
          " / " +
          studentGroup +
          "<br>" +
          "График затухающих колебаний",
        xaxis: { title: "Время, с" },
        yaxis: { title: "Деформация пружины, м" },
        width: 500,
        height: 400,
      }}
    />
  );
};

export default OscillationChart;
